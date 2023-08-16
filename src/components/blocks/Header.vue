<template>
    <div class="header">
        <div class="header__left">
            <h1 class="header__title">Пользователи</h1>
        </div>
        <div class="header__right">
            <BaseSearch/>
            <BaseButton
                @click="filter"
                :prependIcon="'filter'"
                :title="''"
                :isOnlyIcon="true"
            />
            <BaseButton
                @click="options"
                :prependIcon="'options'"
                :title="''"
                :isOnlyIcon="true"
            />
        </div>
    </div>
</template>

<script>
import BaseSearch from '@/components/ui/BaseSearch.vue';
import BaseButton from '@/components/ui/BaseButton.vue';


export default {
    components: {BaseSearch, BaseButton},
    methods: {
        filter(){
            alert('Фильтр')
        },
        options(){
            alert('Настройки')
        }
    },
}
</script>