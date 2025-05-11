<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  instrument: 'guitar',
  preferredTime: 'morning'
})

const submitted = ref(false)
const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  submitted.value = true
  loading.value = false
  setTimeout(() => {
    submitted.value = false
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
      instrument: 'guitar',
      preferredTime: 'morning'
    }
  }, 3000)
}
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          <span class="text-[#f4c03e]">Contact</span> Us
        </h1>
        <p class="text-[#d8d8d8] text-lg">Book your free trial class today!</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-[#1a1a1a] p-8 rounded-lg">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-[#d8d8d8] mb-2">Name *</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#3a3a3a] focus:border-[#f4c03e] focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label class="block text-[#d8d8d8] mb-2">Phone *</label>
              <input
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#3a3a3a] focus:border-[#f4c03e] focus:outline-none"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label class="block text-[#d8d8d8] mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#3a3a3a] focus:border-[#f4c03e] focus:outline-none"
                placeholder="Your email"
              />
            </div>

            <div>
              <label class="block text-[#d8d8d8] mb-2">Instrument</label>
              <select
                v-model="form.instrument"
                class="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#3a3a3a] focus:border-[#f4c03e] focus:outline-none"
              >
                <option value="guitar">Guitar</option>
                <option value="bass">Bass Guitar</option>
                <option value="ukulele">Ukulele</option>
              </select>
            </div>

            <div>
              <label class="block text-[#d8d8d8] mb-2">Preferred Time</label>
              <select
                v-model="form.preferredTime"
                class="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#3a3a3a] focus:border-[#f4c03e] focus:outline-none"
              >
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (4 PM - 8 PM)</option>
              </select>
            </div>

            <div>
              <label class="block text-[#d8d8d8] mb-2">Message</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-2 rounded bg-[#2a2a2a] text-white border border-[#3a3a3a] focus:border-[#f4c03e] focus:outline-none"
                placeholder="Any specific requirements or questions?"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitted || loading"
              class="w-full bg-[#f4c03e] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#d8d8d8] transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              <svg v-if="loading" class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ submitted ? 'Message Sent!' : loading ? 'Sending...' : 'Book Free Trial Class' }}
            </button>
          </form>
        </div>

        <div class="space-y-8">
          <div class="bg-[#1a1a1a] p-8 rounded-lg">
            <h2 class="text-2xl font-bold text-[#f4c03e] mb-4">Visit Us</h2>
            <div class="space-y-2 text-[#d8d8d8]">
              <p>📍 123 Music Street</p>
              <p>Harmony City, HC 12345</p>
              <p class="text-sm">Near Central Mall, Easy Parking Available</p>
            </div>
            
            <div class="mt-6 space-y-2">
              <a 
                href="tel:+15551234567"
                class="flex items-center text-[#f4c03e] hover:text-[#d8d8d8] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (555) 123-4567
              </a>
              <a 
                href="mailto:info@stringsacademy.com"
                class="flex items-center text-[#f4c03e] hover:text-[#d8d8d8] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@stringsacademy.com
              </a>
            </div>
          </div>

          <div class="bg-[#1a1a1a] p-8 rounded-lg">
            <h2 class="text-2xl font-bold text-[#f4c03e] mb-4">Business Hours</h2>
            <div class="space-y-2 text-[#d8d8d8]">
              <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div class="bg-[#1a1a1a] p-8 rounded-lg">
            <h2 class="text-2xl font-bold text-[#f4c03e] mb-4">Special Offer</h2>
            <p class="text-white font-semibold">First 3 Classes Free!</p>
            <p class="text-[#d8d8d8] text-sm mt-2">* Limited time offer. Terms and conditions apply.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>