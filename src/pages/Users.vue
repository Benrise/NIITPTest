<template>
    <div class="main-block">
        <div class="main-block__container">
            <UsersTable></UsersTable>
        </div>
    </div>
</template>

<script>
import UsersTable from '@/components/data/UsersTable.vue'

export default {
    components: {UsersTable}
}
</script>
