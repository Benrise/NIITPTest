<template>
    <div class="comments-table">
        <DataTable 
            :value="comments" 
            tableStyle="min-width: 50rem"
            v-model:filters="filters"
            dataKey="id"
            :loading="loading"
            filterDisplay="row"
            :globalFilterFields="['completed']"
        >
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-5">
                    <div class="flex align-items-center justify-content-between gap-5">
                        <Button icon="pi pi-arrow-left" rounded aria-label="Filter" @click="toBack()" />
                        <span class="text-xl-custom text-900 font-bold">Комментарии пользователя под идентификатором <span class="font-bold">{{userId}}</span></span>
                    </div>
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
                    <TriStateCheckbox 
                        v-model="filterModel.value" 
                        @change="filterCallback()"
                    />
                </template>
            </Column>
            <template #footer> Всего {{ commentsLength }} комменнтариев. </template>
        </DataTable>
    </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import TriStateCheckbox from 'primevue/tristatecheckbox';
import { FilterMatchMode } from "primevue/api";
import Axios from 'axios';

    export default { 
        components: {
            DataTable, 
            Column, 
            Axios, 
            Button, 
            InputText, 
            FilterMatchMode, 
            TriStateCheckbox
        },
        mounted(){
            this.userId = this.$route.params.userId
            this.getComments(this.userId)
        },
        computed:{
            commentsLength(){
                return this.comments ? this.comments.length : 0
            }
        },
        data() {
            return{
                comments: {},
                filters: {
                    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                    completed: { value: null, matchMode: FilterMatchMode.EQUALS } 
                },
                userId: null
            }
        },
        methods: {
            getComments(id){
                Axios
                    .get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
                    .then((response) => {
                        this.comments = response.data

                    })
                    .catch((error) => {
                        console.error(error)
                    })
            },
            toBack(){
                this.$router.go(-1)
            }
        }
}
</script>