<script setup>
import { ref } from 'vue'
import BookingForm from './components/BookingForm.vue'

const confirmed = ref(false)
const booking = ref(null)

function handleConfirm(data) {
  booking.value = data
  confirmed.value = true
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-10">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8 text-blue-700">
        Hotel Booking Demo
      </h1>

      <BookingForm v-if="!confirmed" @confirm="handleConfirm" />

      <div v-else class="bg-green-50 border border-green-300 rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-green-800 mb-4">
          Booking Confirmed!
        </h2>
        <pre class="bg-white p-4 rounded text-sm">{{ booking }}</pre>
        <button
          @click="confirmed = false; booking = null"
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Book Another
        </button>
      </div>
    </div>
  </div>
</template>