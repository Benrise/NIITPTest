<template>
    <div class="comments-table">
        <DataTable 
            :value="comments" 
            tableStyle="min-width: 50rem"
            class="p-datatable-sm"
            v-model:filters="filters"
            dataKey="id"
            :loading="loading"
        >
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Комментарии</span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters.global.value" placeholder="Поиск по комментариям" />
                    </span>
                </div>
            </template>
            <template #empty> Пользователи не найдены. </template>
            <template #loading> Загрузка данных о пользователях. Пожалуйста, подождите. </template>
            <Column field="id" header="ID" style="width: 5%"></Column>
            <Column field="title" header="Содержание" style="width: 90%"></Column>
            <Column field="completed" dataType="boolean" header="Статус" style="width: 5%">
                <template #body="{ data }">
                    <i class="pi" :class="{ 'pi-check-circle text-green-500': data.completed, 'pi-times-circle text-red-400': !data.completed }"></i>
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
                </template>
            </Column>
            <template #footer> Всего {{ comments ? comments.length : 0 }} комменнтариев. </template>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FilterMatchMode } from "primevue/api";
import Axios from 'axios';

    export default { 
        components: {DataTable, Column, Axios, Button, InputText, FilterMatchMode},
        mounted(){
            this.getComments()
        },
        data() {
            return{
                comments: {},
                filters: {
                    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                    status: { value: null, matchMode: FilterMatchMode.EQUALS }
                    
            },
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