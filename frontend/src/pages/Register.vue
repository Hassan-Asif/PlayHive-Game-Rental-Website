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
  <div class="flex justify-center items-center min-h-screen bg-gray-700">
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4 text-center text-white">Register</h2>

      <label class="block mb-2 font-medium text-white">Name</label>
      <input 
        v-model="name" 
        type="text" 
        placeholder="Name" 
        class="w-full p-2 border rounded mb-4 bg-gray-700 border-gray-700" 
      />

      <label class="block mb-2 font-medium text-white">Email</label>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        class="w-full p-2 border rounded mb-4 bg-gray-700 border-gray-700" 
      />

      <label class="block mb-2 font-medium text-white">Password</label>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        class="w-full p-2 border rounded mb-4 bg-gray-700 border-gray-700" 
      />

      <p class="text-sm text-gray-400 mb-4 text-center">
        Already have an account? 
        <router-link to="/login" class="text-indigo-600 hover:underline">
          Login
        </router-link>
      </p>

      <button 
        @click="handleRegister" 
        class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-md"
      >
        Register
      </button>

      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>
