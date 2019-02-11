<template>
    <v-toolbar color="success" dark tabs>
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">Truong</v-toolbar-title>

        <v-spacer></v-spacer>

        <router-link to="/">
            <v-btn flat>Forum</v-btn>
        </router-link>
        <!--<router-link>-->
            <!--<v-btn flat>Ask Question</v-btn>-->
        <!--</router-link>-->
        <!--<router-link>-->
            <!--<v-btn flat>Category</v-btn>-->
        <!--</router-link>-->
        <router-link to="/login">
            <v-btn flat>Login</v-btn>
        </router-link>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar"
    };
</script>

<style scoped>
</style>