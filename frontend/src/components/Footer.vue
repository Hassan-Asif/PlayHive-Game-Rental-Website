<template>
  <footer class="bg-gray-800 text-gray-300 py-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
      
      <!-- Company Info -->
      <div>
        <h2 class="text-xl font-bold text-white mb-2">AqilLabs</h2>
        <p class="text-gray-400">
          Custom Software Solutions Built for Your Business
        </p>
        <div class="flex gap-3 mt-3">
          <a href="#" class="hover:text-white">
            <!-- Instagram SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 0 1 1.77 1.02 4.92 4.92 0 0 1 1.02 1.77c.163.46.35 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 0 1-1.02 1.77 4.92 4.92 0 0 1-1.77 1.02c-.46.163-1.26.35-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 0 1-1.77-1.02 4.92 4.92 0 0 1-1.02-1.77c-.163-.46-.35-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 0 1 1.02-1.77 4.92 4.92 0 0 1 1.77-1.02c.46-.163 1.26-.35 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.013 7.052.072 5.772.131 4.842.326 4.042.634c-.813.322-1.498.757-2.178 1.437S.956 3.23.634 4.042C.326 4.842.131 5.772.072 7.052.013 8.332 0 8.735 0 12s.013 3.668.072 4.948c.059 1.28.254 2.21.562 3.01.322.813.757 1.498 1.437 2.178s1.365 1.115 2.178 1.437c.8.308 1.73.503 3.01.562C8.332 23.987 8.735 24 12 24s3.668-.013 4.948-.072c1.28-.059 2.21-.254 3.01-.562.813-.322 1.498-.757 2.178-1.437s1.115-1.365 1.437-2.178c.308-.8.503-1.73.562-3.01.059-1.28.072-1.683.072-4.948s-.013-3.668-.072-4.948c-.059-1.28-.254-2.21-.562-3.01-.322-.813-.757-1.498-1.437-2.178s-1.365-1.115-2.178-1.437c-.8-.308-1.73-.503-3.01-.562C15.668.013 15.265 0 12 0z"/>
              <circle cx="12" cy="12" r="3.6"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/aqillabs-ra/posts/?feedView=all" class="hover:text-white">
            <!-- LinkedIn SVG -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.65-1.2 2.25-2.45 4.65-2.45 4.95 0 5.85 3.25 5.85 7.45V24h-5v-7.5c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.95V24h-5V8z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Services</h3>
        <ul class="space-y-1">
          <li><span>Web Development</span></li>
          <li><span>Mobile Apps</span></li>
          <li><span>UI/UX Design</span></li>
          <li><span>Digital Marketing</span></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Company</h3>
        <ul class="space-y-1">
          <li><span>About</span></li>
          <li><span>Team</span></li>
          <li><span>Careers</span></li>
          <li><span>Contact</span></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-2">Legal</h3>
        <ul class="space-y-1">
          <li><span>Privacy Policy</span></li>
          <li><span>Terms of Service</span></li>
          <li><span>Cookie Policy</span></li>
        </ul>
      </div>

    </div>

    <!-- Footer Bottom -->
    <div class="border-t border-gray-700 mt-10 pt-4 text-center text-gray-500 text-xs">
      © {{ new Date().getFullYear() }} AqilLabs. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
