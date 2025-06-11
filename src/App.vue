<template>
  <v-app>
    <v-main class="d-flex align-center justify-center" style="min-height: 100vh">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="pa-4" elevation="10">
              <v-card-title class="text-h6 text-center mb-4">Login</v-card-title>
              <v-form @submit.prevent="submitLogin" ref="form">
                <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  prepend-icon="mdi-email"
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  type="password"
                  prepend-icon="mdi-lock"
                  required
                />
                <v-btn color="primary" type="submit" block class="mt-4">Login</v-btn>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const form = ref(null)
function submitLogin() {
  if (!email.value || !password.value) {
    alert('Please fill in both fields.')
    return
  }
  alert(`Logging in with ${email.value}`)
}
</script>