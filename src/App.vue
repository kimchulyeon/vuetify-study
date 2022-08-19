<template>
  <!-- # Header -->
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon
        @click="openMenu"
      />

      <v-spacer />
    </v-app-bar>

    <!-- # Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Dashboard
          </v-list-item-title>
          <v-list-item-subtitle> using Vuetify </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- # Main -->
    <v-main>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- ################################################################ -->
<script>
  export default {
    name: "App",

    /**
     *  # data
     */
    data() {
      return {
        items: [
          { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
          {
            title: "Grid System",
            icon: "mdi-image",
            to: "/grid-system",
          },
          {
            title: "Grid List",
            icon: "mdi-image",
            to: "/grid-list",
          },
          {
            title: "Breakpoint",
            icon: "mdi-image",
            to: "/breakpoint",
          },
        ],
        drawer: false
      };
    },

    /**
     * # methods
     */
    methods: {
      openMenu() {
        this.drawer = !this.drawer
      }
    },
  };
</script>
