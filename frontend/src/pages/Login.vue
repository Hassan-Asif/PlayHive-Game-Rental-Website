<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref("");

const handleLogin = async () => {
  const auth = getAuth();
  error.value = "";

  if (!email.value || !password.value) {
    error.value = "Please enter both email and password!";
    return;
  }

  try {
    // Sign in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);

    // Get Firebase token
    const token = await userCredential.user.getIdToken();

    // Save token and user info in localStorage
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify({
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      name: userCredential.user.displayName
    }));

    // Redirect to homepage
    router.push("/");
  } catch (err) {
    console.error(err);
    error.value = err.message || "Login failed";
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-xl shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-4">Login</h2>
      <p>Email</p>
      <input 
        v-model="email" 
        type="email" 
        placeholder="Email" 
        class="w-full p-2 border rounded mb-3" 
      />
      <p>password</p>
      <input 
        v-model="password" 
        type="password" 
        placeholder="Password" 
        class="w-full p-2 border rounded mb-3" 
      />

      <!-- Small Register Link -->
      <p class="text-sm text-gray-600 mb-3">
        Don’t have an account? 
        <router-link to="/register" class="text-blue-600 hover:underline">
          Register
        </router-link>
      </p>

      <button 
        @click="handleLogin" 
        class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
      >
        Login
      </button>

      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </div>
  </div>
</template>
