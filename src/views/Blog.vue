<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Getting Started with Guitar: A Beginner\'s Guide',
    excerpt: 'Learn the essential steps to start your guitar journey with confidence.',
    date: '2024-02-20',
    image: 'https://images.pexels.com/photos/7520937/pexels-photo-7520937.jpeg'
  },
  {
    id: 2,
    title: 'Advanced Guitar Techniques: Mastering the Fretboard',
    excerpt: 'Dive deep into advanced guitar techniques and theory.',
    date: '2024-02-18',
    image: 'https://images.pexels.com/photos/7520938/pexels-photo-7520938.jpeg'
  },
  {
    id: 3,
    title: 'Choosing Your First Guitar: Expert Tips',
    excerpt: 'Everything you need to know about selecting your first guitar.',
    date: '2024-02-15',
    image: 'https://images.pexels.com/photos/7520940/pexels-photo-7520940.jpeg'
  }
])

const selectedPost = ref(null)
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-12">
      <span class="text-[#f4c03e]">Latest</span> Blog Posts
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="post in posts" 
        :key="post.id"
        class="bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
        @click="selectedPost = post"
      >
        <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover" />
        <div class="p-6">
          <p class="text-[#d8d8d8] text-sm mb-2">{{ new Date(post.date).toLocaleDateString() }}</p>
          <h2 class="text-xl font-semibold text-[#f4c03e] mb-2">{{ post.title }}</h2>
          <p class="text-white">{{ post.excerpt }}</p>
        </div>
      </article>
    </div>

    <!-- Modal -->
    <div v-if="selectedPost" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div class="bg-[#1a1a1a] rounded-lg max-w-2xl w-full">
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <h2 class="text-2xl font-bold text-[#f4c03e]">{{ selectedPost.title }}</h2>
            <button @click="selectedPost = null" class="text-[#d8d8d8] hover:text-white">&times;</button>
          </div>
          <img :src="selectedPost.image" :alt="selectedPost.title" class="w-full h-64 object-cover rounded mb-4" />
          <p class="text-[#d8d8d8] text-sm mb-4">{{ new Date(selectedPost.date).toLocaleDateString() }}</p>
          <p class="text-white">{{ selectedPost.excerpt }}</p>
          <button 
            class="mt-6 bg-[#f4c03e] text-black px-6 py-2 rounded font-semibold hover:bg-[#d8d8d8] transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>