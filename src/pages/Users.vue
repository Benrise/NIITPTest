<template>
    <div class="main-block">
        <li v-for="user in users" :key="user.id">
            <router-link :to="{ name: 'comments', params: { userId: user.id }}"><div class="test">{{user.username}}</div></router-link>
        </li>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                users: [
                    {username: 'Benrise', id: 1, name: 'Artem'},
                    {username: 'Benristar', id: 2, name: 'Tema'},
                    {username: 'TommyOG', id: 3, name: 'Yura'},
                ]
            }
        }
    }
</script>
