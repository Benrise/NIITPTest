<template>
    <div class="users-table">
        <DataTable :value="users" 
                    removableSort 
                    tableStyle="min-width: 50rem"
                    v-model:selection="selectedUser"
                    selectionMode="single"
                    dataKey="id"
                    @rowSelect="onUserSelect"
        >
            <template #header>
                <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                    <span class="text-xl text-900 font-bold">Пользователи</span>
                </div>
            </template>
            <template #empty> Пользователи не найдены. </template>
            <template #loading> Загрузка данных о пользователях. Пожалуйста, подождите. </template>

            <Column field="name" header="Имя пользователя" sortable style="width: 25%"></Column>
            <Column field="email" header="Электронная почта" style="width: 25%"></Column>
            <Column header="Адрес" style="width: 25%">
                <template #body="{ data }">
                    {{formatAddress(data.address)}}
                </template>       
            </Column>
            <Column field="phone" header="Номер телефона" style="width: 25%"></Column>
            <Column field="website" header="Веб-сайт" style="width: 25%"></Column>
            <Column field="company.name" header="Компании" sortable style="width: 25%"></Column>

            <template #footer> Всего {{ users ? users.length : 0 }} пользователей. </template>
        </DataTable>
    </div>
</template>

<script>

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Axios from 'axios';

export default {
    components: {DataTable, Column, Axios, Button},
    data() {
        return{
            users: {},
            selectedUser: {}
        }
    },
    mounted(){
        this.getUsers()
    },
    methods: {
        formatAddress(address){
            console.log(JSON.stringify(address))
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
        onUserSelect(){

        }
    }
}
</script>

<style lang="scss" scoped>

</style>