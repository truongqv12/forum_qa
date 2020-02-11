<template>
    <v-layout>
        <v-flex>
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">
                            <router-link :to="data.path">
                                {{data.title}}
                            </router-link>
                        </h3>
                        <div class="grey--text">{{data.user}} said {{data.created_at}}</div>
                    </div>
                </v-card-title>
                <v-card-text>
                    {{data.body}}
                </v-card-text>
                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Question",
        props:['data']
    }
</script>

<style scoped>

</style>