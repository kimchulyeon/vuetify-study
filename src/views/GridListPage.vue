<template>
  <v-container>
    <v-row>
      <!-- # BreakPoint -->
      <v-col
        v-for="i in 8"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card class="pa-5">
          col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>