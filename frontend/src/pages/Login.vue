<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref("");

// Firebase login function
const handleLogin = async () => {
  const auth = getAuth();
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "Please enter both email and password!";
    return;
  }

  try {
    // Sign in
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Get Firebase token (optional, can be used for backend verification)
    const token = await user.getIdToken();

    // Save user info in localStorage (or use Vuex/Pinia for state management)
    localStorage.setItem("user", JSON.stringify({
      uid: user.uid,
      email: user.email,
      name: user.displayName || "",
      token,
    }));

    // Redirect to home or cart page
    router.push("/");
  } catch (err) {
    console.error(err);
    // Map Firebase error codes to friendly messages
    if (err.code === "auth/user-not-found") {
      error.value = "User not found. Please register first.";
    } else if (err.code === "auth/wrong-password") {
      error.value = "Incorrect password.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "Invalid email address.";
    } else {
      error.value = err.message || "Login failed. Try again.";
    }
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen  bg-gray-700">
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4 text-center text-white">Login</h2>

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

      <p class="text-sm text-gray-400 mb-4">
        Don’t have an account? 
        <router-link to="/register" class="text-indigo-600 hover:underline">
          Register
        </router-link>
      </p>

      <button 
        @click="handleLogin" 
        class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-md"
      >
        Login
      </button>

      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>

