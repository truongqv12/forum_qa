<template>
    <v-toolbar color="success" dark tabs>
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">Truong</v-toolbar-title>

        <v-spacer></v-spacer>

        <!--<router-link>-->
        <!--<v-btn flat>Ask Question</v-btn>-->
        <!--</router-link>-->
        <!--<router-link>-->
        <!--<v-btn flat>Category</v-btn>-->
        <!--</router-link>-->
        <router-link
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                v-if="item.show">
            <v-btn flat>{{item.title}}</v-btn>
        </router-link>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar",
        data() {
            return {
                items: [
                    {title: 'Forum', to: '/', show: true},
                    {title: 'Ask Question', to: '/ask', show: User.loggedIn()},
                    {title: 'Category', to: '/category', show: User.loggedIn()},
                    {title: 'Login', to: '/login', show: !User.loggedIn()},
                    {title: 'Logout', to: '/logout', show: User.loggedIn()},
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout();
            })
        }
    };
</script>

<style scoped>
</style>