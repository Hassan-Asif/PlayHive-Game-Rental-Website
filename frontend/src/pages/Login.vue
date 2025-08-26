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
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">Login</h2>

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

      <p class="text-sm text-gray-600 mb-4">
        Don’t have an account? 
        <router-link to="/register" class="text-blue-600 hover:underline">
          Register
        </router-link>
      </p>

      <button 
        @click="handleLogin" 
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition mb-2"
      >
        Login
      </button>

      <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    </div>
  </div>
</template>

