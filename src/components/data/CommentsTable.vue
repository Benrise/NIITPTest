<template>
    <div class="comments-table">
        <DataTable 
            :value="comments" 
            tableStyle="min-width: 50rem"
            class="p-datatable-sm"
        >
            <Column field="id" header="ID" style="width: 25%"></Column>
            <Column field="title" header="Содержание" style="width: 25%"></Column>
            <Column field="completed" header="Статус" style="width: 25%"></Column>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Axios from 'axios';

    export default { 
        components: {Axios, DataTable, Column},
        mounted(){
            this.getComments()
        },
        data() {
            return{
                comments: {},
            }
        },
        methods: {
            getComments(){
                const userId = this.$route.params.userId
                Axios
                    .get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
                    .then((response) => {
                        this.comments = response.data

                    })
                    .catch((error) => {
                        console.error(error)
                    })
            }
        }   
}
</script>