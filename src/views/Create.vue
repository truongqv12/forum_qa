<template>
    <v-container>
        <v-form @submit.prevent="create">
            <v-text-field
                    v-model="form.title"
                    label="Title *"
                    type="text"
                    required
            ></v-text-field>
            <v-select
                    :items="categories"
                    item-text="name"
                    item-value="id"
                    v-model="form.category_id"
                    label="Category"
            ></v-select>
            <v-btn color="green" type="submit">Post</v-btn>

        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "Create",
        data() {
            return {
                form: {
                    title: null,
                    category_id: null
                },
                categories: {}
            }
        },
        created() {
            const headers = {
                'Accept' : 'application/json',
                'Authorization' : 'Bearer' + localStorage.getItem('token')
            }
            this.axios.get('http://localhost:8000/api/category',{headers})
                .then(res => this.categories = res.data.data)
                .catch(error => console.log(error.response.data))
        },
        methods: {
            create() {
                this.axios.post('http://localhost:8000/api/auth/me')
                    .then(res => console.log(res))
            }
        }
    }
</script>

<style scoped>

</style>