<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref("");

// Register function
const handleRegister = async () => {
  const auth = getAuth();
  error.value = "";

  if (!name.value || !email.value || !password.value) {
    error.value = "All fields are required!";
    return;
  }

  try {
    // Create user
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Update display name
    await updateProfile(user, { displayName: name.value });

    // Get token (optional)
    const token = await user.getIdToken();

    // Save user info locally
    localStorage.setItem("user", JSON.stringify({
      uid: user.uid,
      email: user.email,
      name: user.displayName || "",
      token
    }));

    // Redirect to homepage
    router.push("/");
  } catch (err) {
    console.error(err);

    // Friendly error messages
    if (err.code === "auth/email-already-in-use") {
      error.value = "Email already in use. Try logging in.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Invalid email address.";
    } else if (err.code === "auth/weak-password") {
      error.value = "Password should be at least 6 characters.";
    } else {
      error.value = err.message || "Registration failed.";
    }
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Register</h2>

      <label class="block mb-2 font-medium">Name</label>
      <input 
        v-model="name" 
        type="text" 
        placeholder="Name" 
        class="w-full p-2 border rounded mb-4" 
      />

      <label class="block mb-2 font-medium">Email</label>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        class="w-full p-2 border rounded mb-4" 
      />

      <label class="block mb-2 font-medium">Password</label>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        class="w-full p-2 border rounded mb-4" 
      />

      <p class="text-sm text-gray-600 mb-4 text-center">
        Already have an account? 
        <router-link to="/login" class="text-blue-600 hover:underline">
          Login
        </router-link>
      </p>

      <button 
        @click="handleRegister" 
        class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition mb-2"
      >
        Register
      </button>

      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>
