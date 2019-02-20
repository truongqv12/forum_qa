<template>
    <loginform></loginform>
</template>

<script>
    import LoginForm from '../components/auth/LoginForm';
    // import Signup from '../components/auth/Signup';
    import User from "../Helpers/User";

    export default {
        components: {
            loginform: LoginForm,
            // signup: Signup
        },
        created() {
            if (User.loggedIn()) {
                this.$router.push({name: 'forum'});
            }
        }
    }
</script>

<style>

</style>
