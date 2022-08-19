<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
      </v-card-title>
      <v-container>
        <v-card :height="height">
          콘텐츠
        </v-card>
      </v-container>
    </v-card>

    <v-card class="mt-15">
      <v-card-title primary-title>
        $vuetify.breakpoint.mobile-break-point: {{ $vuetify.breakpoint.mobile }} | {{ $vuetify.breakpoint.mobileBreakpoint }}
      </v-card-title>
      
      <v-container>
        <v-dialog
          v-model="dialog"
          width="500"
          :fullscreen="$vuetify.breakpoint.mobile"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Click Me
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Privacy Policy
            </v-card-title>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false
      }
    },

    computed: {
      height() {
        switch(this.$vuetify.breakpoint.name) {
          case 'xs':
            return 100
            break
          case 'sm':
          return 200
          break
          case 'md':
            return 300
            break
          case 'lg':
            return 400
            break
          default: 
            return 500
        }
      }
    },
  }
</script>