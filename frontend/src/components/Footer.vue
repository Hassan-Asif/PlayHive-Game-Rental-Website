<template>
  <footer class="bg-gray-950 text-gray-300 py-10 border-t-4 border-cyan-800">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      
      <div class="space-y-4">
        <h2 class="text-3xl font-black text-cyan-400 drop-shadow-md tracking-wider">
          SankGaming
        </h2>
        <p class="text-gray-400 text-sm">
          Your portal to instant, lag-free gaming access. Rent the newest titles instantly.
        </p>
        <!--<div class="flex gap-4 mt-6">
          <a href="#" class="text-cyan-500 hover:text-cyan-400 transition transform hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.4 3.7A5.9 5.9 0 0 1 12 2a5.9 5.9 0 0 1 4.6 1.7 6.1 6.1 0 0 1 1.2 3.8 6.1 6.1 0 0 1-1.2 3.8l-1.6 1.6-1.5 1.5-1.5 1.5-1.5 1.5-1.5 1.5-1.5-1.5-1.5-1.5-1.5-1.5-1.5-1.5-1.6-1.6A6.1 6.1 0 0 1 5.8 7.5a6.1 6.1 0 0 1 1.2-3.8ZM12 4.1c-1.3 0-2.5.5-3.4 1.4-1 .9-1.5 2.1-1.5 3.4 0 1.3.5 2.5 1.4 3.4L12 15.9l3.1-3c.9-.9 1.4-2.1 1.4-3.4 0-1.3-.5-2.5-1.4-3.4-.9-.9-2.1-1.4-3.4-1.4Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="#" class="text-cyan-500 hover:text-cyan-400 transition transform hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 3.03H1.325A1.325 1.325 0 0 0 0 4.355v15.29A1.325 1.325 0 0 0 1.325 21H22.675A1.325 1.325 0 0 0 24 19.645V4.355A1.325 1.325 0 0 0 22.675 3.03Z" clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="#" class="text-cyan-500 hover:text-cyan-400 transition transform hover:scale-110">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-3.75 14.5a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5h-7.5ZM9 12.75a.75.75 0 0 1 0-1.5h7.5a.75.75 0 0 1 0 1.5H9Zm.75-3.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 0 1.5h-5.5Z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div> -->
      </div>

      

      

      
    </div>

    <div class="border-t border-[#334155] mt-8 pt-4 text-center text-[#c1cee0] text-sm text-bold">
      © {{ new Date().getFullYear() }}<a 
    href="https://aqil-lab.vercel.app" 
    target="_blank" 
    rel="noopener noreferrer"
    class="text-cyan-500 hover:text-cyan-300 transition-colors font-semibold"
  >
    AqilLabs.
  </a> All rights reserved.
    </div>
    
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Scoped styles are not strictly necessary as all styling is handled by Tailwind classes */
</style>