<template>
    <DataTable :value="products" tableStyle="min-width: 50rem">
        <Column field="code" header="Code" sortable style="width: 25%"></Column>
        <Column field="name" header="Name" sortable style="width: 25%"></Column>
        <Column field="category" header="Category" sortable style="width: 25%"></Column>
        <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
    </DataTable>
</template>

<script>

    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

    export default {
        components: {DataTable, Column}
    }
</script>

<style lang="scss" scoped>

</style>