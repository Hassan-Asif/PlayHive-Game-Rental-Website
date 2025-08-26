<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref("");

const handleRegister = async () => {
  const auth = getAuth();
  error.value = "";

  if (!name.value || !email.value || !password.value) {
    error.value = "All fields are required!";
    return;
  }

  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);

    // Update display name
    await updateProfile(userCredential.user, { displayName: name.value });

    // Store token and user info in localStorage
    const token = await userCredential.user.getIdToken();
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify({
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      name: userCredential.user.displayName
    }));

    // Redirect to home
    router.push("/");
  } catch (err) {
    console.error(err);
    error.value = err.message || "Registration failed";
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <p>Name</p>

      <input 
        v-model="name" 
        type="text" 
        placeholder="Name" 
        class="w-full p-2 border rounded mb-3" 
      />
      <p>Email</p>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        class="w-full p-2 border rounded mb-3" 
      />
      <p>Password</p>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        class="w-full p-2 border rounded mb-3" 
      />

      <!-- Small Login Link -->
      <p class="text-sm text-gray-600 mb-3">
        Already have an account? 
        <router-link to="/login" class="text-blue-600 hover:underline">
          Login
        </router-link>
      </p>

      <button 
        @click="handleRegister" 
        class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
      >
        Register
      </button>

      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
  </div>
</template>
