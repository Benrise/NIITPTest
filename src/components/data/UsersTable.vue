<template>
    <div class="users-table">
        <DataTable :value="users" 
                    removableSort 
                    tableStyle="min-width: 50rem"
                    v-model:selection="selectedUser"
                    v-model:filters="filters"
                    selectionMode="single"
                    dataKey="id"
                    @rowSelect="onUserSelect(selectedUser.id)"
                    :loading="loading"
                    filterDisplay="row"
        >
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Пользователи</span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText 
                            v-model="filters.global.value" 
                            placeholder="Поиск пользователей" />
                    </span>
                </div>
            </template>
            <template #empty> Пользователи не найдены. </template>
            <template #loading> Загрузка данных о пользователях. Пожалуйста, подождите. </template>

            <Column field="name" header="Имя пользователя" sortable></Column>
            <Column field="email" header="Электронная почта"></Column>
            <Column header="Адрес" style="width: 35%">
                <template #body="{ data }">
                    {{formatAddress(data.address)}}
                </template>       
            </Column>
            <Column field="phone" header="Номер телефона" style="width: 20%">
                <template #filter="{ filterModel, filterCallback }">
                    <InputText 
                        v-model="filterModel.value" 
                        type="text" 
                        @input="filterCallback()" 
                        class="p-column-filter" 
                        placeholder="Фильтр по номеру" />
                </template>
            </Column>
            <Column field="website" header="Веб-сайт">
            </Column>

            <Column field="company.name" header="Компания" style="width: 20%">
                <template #filter="{ filterModel, filterCallback }">
                    <InputText 
                        v-model="filterModel.value" 
                        type="text" 
                        @input="filterCallback()" 
                        class="p-column-filter" 
                        placeholder="Фильтр по компаннии" />
                </template>
            </Column>
            <template #footer> Всего {{ users ? users.length : 0 }} пользователей. </template>
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
    data() {
        return{
            users: {},
            selectedUser: {},
            filters: {
                global: { value: null, matchMode: FilterMatchMode.CONTAINS },
                'company.name': { value: null, matchMode: FilterMatchMode.EQUALS },
                phone: { value: null, matchMode: FilterMatchMode.EQUALS },
            },
        }
    },
    mounted(){
        this.getUsers()
    },
    methods: {
        formatAddress(address){
            let formattedAddress;
            formattedAddress = `${address.city}, ${address.street} ${address.suite} ${address.zipcode}`;
            return formattedAddress;
        },
        getUsers(){
            Axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    this.users = response.data

                })
                .catch((error) => {
                    console.error(error)
                })
        },
        onUserSelect(id){
            this.$router.push({ name: 'comments', params: { userId: id } })
        }
    }
}
</script>