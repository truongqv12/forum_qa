<template>
    <show-question :data="question"></show-question>
</template>

<script>
    import ShowQuestion from '../components/forum/ShowQuestion'

    export default {
        name: "Read",
        components: {
            ShowQuestion
        },
        data() {
            return {
                question: {}
            }
        },
        created() {
            this.axios.get(`http://localhost:8000/api/question/${this.$route.params.slug}`)
                .then(res => this.question = res.data.data)
                .catch(error => console.log(error.response.data))
        }
    }
</script>

<style scoped>

</style>