<template>
    <v-container fluid gird-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <question
                        v-for="question in questions"
                        :key="question.path"
                        :data="question"
                ></question>
            </v-flex>
            sidebar
        </v-layout>
    </v-container>
</template>

<script>
    import Question from '../components/forum/Question'

    export default {
        components: {
            question: Question
        },
        data() {
            return {
                questions: {}
            }
        },
        created(){
            this.axios.get('http://localhost:8000/api/question')
                .then(res => this.questions = res.data.data)
                .catch(error => console.log(error.response.data))
        }
    }
</script>
