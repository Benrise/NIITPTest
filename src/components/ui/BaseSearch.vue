<template>
        <input 
            class="search" 
            type="text" 
            v-model="value" 
            placeholder="Поиск"
            @change="search(query)"
        >
</template>

<script>
    export default {
        props: {
            query: {
                required: true,
            },
        methods: {
            search(query){
                
            }
        }
    },
}
</script>