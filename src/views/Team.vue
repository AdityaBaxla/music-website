<script setup>
const team = [
  {
    name: 'John Smith',
    role: 'Lead Guitar Instructor',
    image: 'https://images.pexels.com/photos/7520935/pexels-photo-7520935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: '20+ years of experience in guitar instruction and performance.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Classical Guitar Specialist',
    image: 'https://images.pexels.com/photos/7520939/pexels-photo-7520939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Masters in Classical Guitar Performance from Juilliard.'
  },
  {
    name: 'Mike Davis',
    role: 'Rock Guitar Instructor',
    image: 'https://images.pexels.com/photos/7520941/pexels-photo-7520941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Former touring musician with extensive teaching experience.'
  }
]
</script>

<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold text-center mb-12">
      <span class="text-[#f4c03e]">Meet Our</span> Team
    </h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="member in team" :key="member.name" class="bg-[#1a1a1a] rounded-lg overflow-hidden">
        <img :src="member.image" :alt="member.name" class="w-full h-64 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold text-[#f4c03e]">{{ member.name }}</h3>
          <p class="text-[#d8d8d8] text-sm mb-2">{{ member.role }}</p>
          <p class="text-white">{{ member.bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>