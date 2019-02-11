<template>
    <v-container>
        <v-form @submit.prevent="login">
            <v-text-field
                    v-model="form.email"
                    label="E-mail"
                    type="email"
                    required
            ></v-text-field>

            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>

            <v-btn color="success" type="submit">submit</v-btn>
        </v-form>
    </v-container>

</template>

<script>
    export default {
        name: "LoginForm",
        data() {
            return {
                form: {
                    email: null,
                    password: null
                },
            }
        },
        // https://dota2-autochess.tk/api/question
        // http://www.dota2-autochess.tk/api/auth/login
        //http://pokeapi.co/api/v2/pokemon/ditto/
        methods: {
            login() {
                this.axios.post('http://localhost:8000/api/auth/login', this.form)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error.response.data))
            }
        }
    }
</script>

<style>

</style>
