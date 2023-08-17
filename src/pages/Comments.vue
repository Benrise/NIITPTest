<template>
    <div class="main-block">
        <div class="main-block__container">
            <CommentsTable></CommentsTable>
        </div>
    </div>
</template>

<script>
import CommentsTable from '@/components/data/CommentsTable.vue'

export default {
    components: {CommentsTable}
}
</script>