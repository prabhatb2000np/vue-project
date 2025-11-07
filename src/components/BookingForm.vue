<script setup>
import { ref } from 'vue'

const emit = defineEmits(['confirm'])

const form = ref({
  name: '',
  email: '',
  checkIn: '',
  checkOut: '',
  rooms: 1,
  guests: 1
})

function submit() {
  if (!form.value.name || !form.value.email || !form.value.checkIn || !form.value.checkOut) {
    alert('Please fill all fields')
    return
  }
  emit('confirm', { ...form.value })
}
</script>

<template>
  <form @submit.prevent="submit" class="booking-form bg-white shadow-lg rounded-lg p-6 space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Full Name</label>
      <input v-model="form.name" type="text" required
             class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input v-model="form.email" type="email" required
             class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Check-in</label>
        <input v-model="form.checkIn" type="date" required
               class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Check-out</label>
        <input v-model="form.checkOut" type="date" required
               class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Rooms</label>
        <input v-model.number="form.rooms" type="number" min="1" value="1"
               class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Guests</label>
        <input v-model.number="form.guests" type="number" min="1" value="1"
               class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
      </div>
    </div>

    <button type="submit"
            class="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
      Confirm Booking
    </button>
  </form>
</template>

<style scoped>
/* Fancy enhancements while keeping Tailwind utility classes primary */
.booking-form {
  background: linear-gradient(135deg, rgba(255,255,255,0.92), rgba(245,250,255,0.94));
  border: 1px solid rgba(99,102,241,0.06); /* soft indigo tint */
  padding: 1.25rem;
  transition: transform .18s ease, box-shadow .18s ease, border-color .12s ease;
  will-change: transform;
}

.booking-form:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
}

.booking-form label {
  color: #374151; /* slate-700 */
  display: block;
  font-weight: 600;
}

.booking-form input[type="text"],
.booking-form input[type="email"],
.booking-form input[type="date"],
.booking-form input[type="number"] {
  background: #ffffff;
  border: 1px solid rgba(203, 213, 225, 1); /* gray-300 */
  border-radius: 0.5rem;
  padding: 0.625rem 0.75rem;
  transition: box-shadow .12s ease, border-color .12s ease, transform .12s ease;
  width: 100%;
  -webkit-appearance: none;
  appearance: none; /* Standard property for compatibility */
  -moz-appearance: none;
}

.booking-form input:focus {
  outline: none;
  border-color: rgba(99,102,241,0.9); /* indigo */
  box-shadow: 0 8px 24px rgba(99,102,241,0.08);
  transform: translateY(-1px);
}

/* Remove number field spinners for a cleaner look */
.booking-form input[type="number"]::-webkit-outer-spin-button,
.booking-form input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  appearance: none; /* Standard property for compatibility */
  margin: 0;
}
.booking-form input[type="number"] {
  appearance: none; /* Standard property for compatibility */
  -moz-appearance: textfield;
}

/* Button polish */
.booking-form button {
  border-radius: 0.625rem;
  padding: 0.75rem 1rem;
  transition: transform .12s ease, box-shadow .12s ease, opacity .12s ease;
  box-shadow: 0 8px 28px rgba(59,130,246,0.08);
}
.booking-form button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(59,130,246,0.14);
}
.booking-form button:active {
  transform: translateY(0);
}

/* Small responsive tweaks */
@media (min-width: 640px) {
  .booking-form { padding: 1.5rem; }
}
</style>