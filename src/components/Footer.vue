<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal justify-center">
        <strong class="subheading">Hế lô anh em!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 — <strong>Truong</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>


<script>
    export default {
        name: "Footer",
        data: () => ({
        icons: [
                'fa fa-facebook',
                'fa fa-twitter',
                'fa fa-google-plus',
                'fa fa-linkedin',
                'fa fa-instagram'
            ]
        })
    }
</script>

<style scoped>

</style>