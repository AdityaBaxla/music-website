<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const router = useRouter()
const mobileMenuOpen = ref(false)

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Team', path: '/team' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

const handleCall = () => {
  window.location.href = 'tel:+15551234567'
}

const handleWhatsApp = () => {
  window.location.href = 'https://wa.me/15551234567'
}
</script>

<template>
  <div class="min-h-screen bg-[#242424] text-white">
    <Disclosure as="nav" class="bg-[#1a1a1a] sticky top-0 z-50" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between items-center">
          <div class="flex">
            <div class="flex flex-shrink-0 items-center">
              <router-link to="/" class="text-[#f4c03e] font-bold text-xl">STRINGS</router-link>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.path"
                class="inline-flex items-center px-1 pt-1 text-sm font-medium text-[#d8d8d8] hover:text-[#f4c03e]"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
          
          <div class="hidden sm:flex items-center space-x-4">
            <button
              @click="handleCall"
              class="bg-[#f4c03e] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#d8d8d8] transition-colors flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </button>
            <button
              @click="router.push('/contact')"
              class="border-2 border-[#f4c03e] text-[#f4c03e] px-4 py-2 rounded-lg font-semibold hover:bg-[#f4c03e] hover:text-black transition-colors"
            >
              Book Trial Class
            </button>
          </div>

          <div class="-mr-2 flex items-center sm:hidden">
            <DisclosureButton
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 pb-3 pt-2">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="block px-3 py-2 text-base font-medium text-[#d8d8d8] hover:text-[#f4c03e]"
          >
            {{ item.name }}
          </router-link>
          <div class="px-3 py-2 space-y-2">
            <button
              @click="handleCall"
              class="w-full bg-[#f4c03e] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#d8d8d8] transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </button>
            <button
              @click="router.push('/contact')"
              class="w-full border-2 border-[#f4c03e] text-[#f4c03e] px-4 py-2 rounded-lg font-semibold hover:bg-[#f4c03e] hover:text-black transition-colors"
            >
              Book Trial Class
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <main>
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- WhatsApp floating button -->
    <button
      @click="handleWhatsApp"
      class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </button>

    <footer class="bg-[#1a1a1a] mt-12">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-[#f4c03e] font-bold text-lg mb-4">STRINGS</h3>
            <p class="text-[#d8d8d8]">Empowering musicians through excellence in education.</p>
            <div class="mt-4">
              <p class="text-[#d8d8d8] font-semibold">Near Central Mall</p>
              <p class="text-[#d8d8d8]">Easy parking available</p>
            </div>
          </div>
          <div>
            <h3 class="text-[#f4c03e] font-bold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li v-for="item in navigation" :key="item.name">
                <router-link :to="item.path" class="text-[#d8d8d8] hover:text-[#f4c03e]">
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-[#f4c03e] font-bold text-lg mb-4">Contact</h3>
            <a href="tel:+15551234567" class="text-[#d8d8d8] hover:text-[#f4c03e] block">📞 (555) 123-4567</a>
            <a href="mailto:info@stringsacademy.com" class="text-[#d8d8d8] hover:text-[#f4c03e] block">✉️ info@stringsacademy.com</a>
            <p class="text-[#d8d8d8] mt-2">📍 123 Music Street, Harmony City</p>
          </div>
          <div>
            <h3 class="text-[#f4c03e] font-bold text-lg mb-4">Special Offer</h3>
            <p class="text-white font-semibold mb-2">🎵 First 3 Classes Free!</p>
            <p class="text-[#d8d8d8] mb-4">Limited time offer. Book your trial class today.</p>
            <button 
              @click="router.push('/contact')"
              class="bg-[#f4c03e] text-black px-6 py-2 rounded font-semibold hover:bg-[#d8d8d8] transition-colors w-full"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>