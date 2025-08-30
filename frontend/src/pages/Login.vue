<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref("");
const loading = ref(false);

// Firebase login function
const handleLogin = async () => {
  const auth = getAuth();
  error.value = "";
  loading.value = true;

  if (!email.value || !password.value) {
    error.value = "⚠️ Please enter both email and password!";
    loading.value = false;
    return;
  }

  try {
    // Sign in
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Get Firebase token (optional, for backend verification)
    const token = await user.getIdToken();

    // Save user info locally
    localStorage.setItem("user", JSON.stringify({
      uid: user.uid,
      email: user.email,
      name: user.displayName || "",
      token,
    }));

    // Redirect
    router.push("/");
  } catch (err) {
    console.error(err);

    // Map Firebase error codes to friendly messages
    if (err.code === "auth/user-not-found") {
      error.value = "❌ User not found. Please register first.";
    } else if (err.code === "auth/wrong-password") {
      error.value = "❌ Incorrect password.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "⚠️ Invalid email address.";
    } else {
      error.value = "⚠️ Login failed. Try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-900">
    <div class="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 border border-gray-700">
      <!-- Title -->
      <h2 class="text-3xl font-extrabold mb-6 text-center text-indigo-400">
        Welcome Back 🎮
      </h2>

      <!-- Email -->
      <label class="block mb-2 font-medium text-gray-300">Email</label>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Enter your email" 
        class="w-full p-3 border rounded-lg mb-4 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
      />

      <!-- Password -->
      <label class="block mb-2 font-medium text-gray-300">Password</label>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Enter your password" 
        class="w-full p-3 border rounded-lg mb-4 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
      />

      <!-- Register link -->
      <p class="text-sm text-gray-400 mb-4">
        Don’t have an account? 
        <router-link to="/register" class="text-indigo-500 hover:underline">
          Register
        </router-link>
      </p>

      <!-- Login Button -->
      <button 
        @click="handleLogin" 
        :disabled="loading"
        class="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-md disabled:opacity-50"
      >
        <span v-if="loading">🔄 Logging in...</span>
        <span v-else>🚀 Login</span>
      </button>

      <!-- Error Message -->
      <p v-if="error" class="text-red-500 mt-4 text-center font-medium">{{ error }}</p>
    </div>
  </div>
</template>
