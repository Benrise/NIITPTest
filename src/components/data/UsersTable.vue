<template>
    <div class="users-table">
        <DataTable :value="users" 
                    removableSort 
                    tableStyle="min-width: 50rem"
                    v-model:selection="selectedUser"
                    v-model:filters="filters"
                    selectionMode="single"
                    dataKey="id"
                    @row-dblclick="onUserDblClick(selectedUser.id)" 
                    @rowSelect="onUserTap(selectedUser.id)"
                    filterDisplay="row"
        >
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl-custom text-900 font-bold">Пользователи</span>
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText 
                            v-model="filters.global.value" 
                            placeholder="Поиск пользователей" />
                    </span>
                </div>
            </template>
            <template #empty> Пользователи не найдены. </template>

            <Column field="name" header="Имя пользователя" sortable></Column>
            <Column field="email" header="Электронная почта"></Column>
            <Column header="Адрес" style="width: 35%">
                <template #body="{ data }">
                    {{formatAddress(data.address)}}
                </template>       
            </Column>
            <Column field="phone" header="Номер телефона" style="width: 22%">
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

            <Column field="company.name" header="Компания" style="width: 22%">
                <template #filter="{ filterModel, filterCallback }">
                    <InputText 
                        v-model="filterModel.value" 
                        type="text" 
                        @input="filterCallback()" 
                        class="p-column-filter" 
                        placeholder="Фильтр по компаннии" />
                </template>
            </Column>
            <template #footer> Всего {{ usersLength }} пользователей. </template>
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
    components: {
        DataTable, 
        Column, 
        Axios, 
        Button, 
        InputText, 
        FilterMatchMode
    },
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
        console.log(Boolean(this.$isMobile))
    },
    computed:{
        usersLength(){
            return this.users ? this.users.length : 0
        }
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
        onUserDblClick(id){
            this.$router.push({ name: 'comments', params: { userId: id } })
        },
        onUserTap(id){
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                this.$router.push({ name: 'comments', params: { userId: id } })
        }
    }
        
}
</script>