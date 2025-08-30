<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();
const error = ref("");
const loading = ref(false);

// Register function
const handleRegister = async () => {
  const auth = getAuth();
  error.value = "";
  loading.value = true;

  if (!name.value || !email.value || !password.value) {
    error.value = "⚠️ All fields are required!";
    loading.value = false;
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
      error.value = "❌ Email already in use. Try logging in.";
    } else if (err.code === "auth/invalid-email") {
      error.value = "⚠️ Invalid email address.";
    } else if (err.code === "auth/weak-password") {
      error.value = "🔑 Password should be at least 6 characters.";
    } else {
      error.value = "⚠️ Registration failed. Try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-900 pt-20">
    <div class="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 border border-gray-700">
      <!-- Title -->
      <h2 class="text-3xl font-extrabold mb-6 text-center text-indigo-400">
        Create Account 🕹️
      </h2>

      <!-- Name -->
      <label class="block mb-2 font-medium text-gray-300">Name</label>
      <input 
        v-model="name" 
        type="text" 
        placeholder="Enter your name" 
        class="w-full p-3 border rounded-lg mb-4 bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500" 
      />

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

      <!-- Login link -->
      <p class="text-sm text-gray-400 mb-4 text-center">
        Already have an account? 
        <router-link to="/login" class="text-indigo-500 hover:underline">
          Login
        </router-link>
      </p>

      <!-- Register Button -->
      <button 
        @click="handleRegister" 
        :disabled="loading"
        class="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition transform hover:scale-105 shadow-md disabled:opacity-50"
      >
        <span v-if="loading">🔄 Creating Account...</span>
        <span v-else>🚀 Register</span>
      </button>

      <!-- Error Message -->
      <p v-if="error" class="text-red-500 mt-4 text-center font-medium">{{ error }}</p>
    </div>
  </div>
</template>
