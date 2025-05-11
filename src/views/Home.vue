<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Swiper from "swiper";
import "swiper/css";

const router = useRouter();
const isVertical = ref(false);
const testimonials = ref([
  {
    name: "Sarah M.",
    text: "The instructors at Strings Academy are incredible! My daughter has improved so much in just 3 months.",
    rating: 5,
  },
  {
    name: "John D.",
    text: "Professional teaching methods and a great learning environment. Highly recommended!",
    rating: 5,
  },
  {
    name: "Mike R.",
    text: "Finally found the perfect place to learn guitar. The personalized attention is amazing.",
    rating: 5,
  },
]);

const achievements = [
  "500+ Students Trained",
  "15+ Years of Excellence",
  "Certified Instructors",
  "Award-winning Faculty",
];

onMounted(() => {
  new Swiper(".testimonials-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});

const toggleOrientation = () => {
  isVertical.value = !isVertical.value;
};

const scrollToContact = () => {
  router.push("/contact");
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col items-center justify-center min-h-[80vh] relative"
      >
        <div
          class="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full animate-pulse"
        >
          Limited Seats Available!
        </div>

        <div
          :class="{ 'rotate-90': isVertical }"
          class="transition-transform duration-500"
        >
          <img
            src="/guitar.svg"
            alt="Electric Guitar"
            class="w-full max-w-3xl text-white fill-current filter invert brightness-0"
          />
        </div>

        <div class="mt-8 space-y-4 text-center">
          <h1 class="text-4xl md:text-6xl font-bold">
            <span class="text-[#f4c03e]">STRINGS</span>
            <span class="text-white">MUSIC ACADEMY</span>
          </h1>
          <p class="text-[#d8d8d8] max-w-xl mx-auto text-lg">
            Master your craft with professional guitar instruction
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="scrollToContact"
              class="bg-[#f4c03e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#d8d8d8] transition-colors text-lg"
            >
              Start Your Journey Today
            </button>
            <button
              @click="toggleOrientation"
              class="border-2 border-[#f4c03e] text-[#f4c03e] px-8 py-4 rounded-lg font-semibold hover:bg-[#f4c03e] hover:text-black transition-colors text-lg"
            >
              Toggle View
            </button>
          </div>
        </div>
      </div>

      <!-- Why Choose Us Section -->
      <section class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">
          <span class="text-[#f4c03e]">Why Choose</span> Strings Academy
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="p-6 bg-[#1a1a1a] rounded-lg transform hover:scale-105 transition-transform"
          >
            <h3 class="text-xl font-semibold mb-4 text-[#f4c03e]">
              Expert Instructors
            </h3>
            <p class="text-[#d8d8d8]">
              Learn from professional musicians with years of teaching
              experience.
            </p>
          </div>
          <div
            class="p-6 bg-[#1a1a1a] rounded-lg transform hover:scale-105 transition-transform"
          >
            <h3 class="text-xl font-semibold mb-4 text-[#f4c03e]">
              Personalized Learning
            </h3>
            <p class="text-[#d8d8d8]">
              Tailored lessons that match your skill level and musical
              interests.
            </p>
          </div>
          <div
            class="p-6 bg-[#1a1a1a] rounded-lg transform hover:scale-105 transition-transform"
          >
            <h3 class="text-xl font-semibold mb-4 text-[#f4c03e]">
              Modern Facilities
            </h3>
            <p class="text-[#d8d8d8]">
              State-of-the-art equipment and comfortable learning environments.
            </p>
          </div>
        </div>
      </section>

      <!-- Achievements Section -->
      <section class="py-16 bg-[#1a1a1a] rounded-lg">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">
            <span class="text-[#f4c03e]">Our</span> Achievements
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div
              v-for="achievement in achievements"
              :key="achievement"
              class="p-4"
            >
              <p class="text-[#f4c03e] text-lg font-bold mb-2">
                {{ achievement }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-16">
        <h2 class="text-3xl font-bold text-center mb-12">
          <span class="text-[#f4c03e]">Student</span> Testimonials
        </h2>
        <div class="testimonials-swiper overflow-hidden">
          <div class="swiper-wrapper">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="swiper-slide"
            >
              <div class="bg-[#1a1a1a] p-6 rounded-lg h-full">
                <div class="flex text-[#f4c03e] mb-2">
                  <svg
                    v-for="i in testimonial.rating"
                    :key="i"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
                <p class="text-[#d8d8d8] mb-4">{{ testimonial.text }}</p>
                <p class="text-[#f4c03e] font-semibold">
                  - {{ testimonial.name }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-[#1a1a1a] rounded-lg text-center">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-6">
            <span class="text-[#f4c03e]">Start Your Musical Journey</span> Today
          </h2>
          <p class="text-[#d8d8d8] mb-8 text-lg">
            First 3 classes free! Limited time offer.
          </p>
          <button
            @click="scrollToContact"
            class="bg-[#f4c03e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#d8d8d8] transition-colors text-lg"
          >
            Book Your Free Trial
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
