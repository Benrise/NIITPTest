<template>
    <div class="main-block">
        <div class="main-block__container">
            <Header></Header>
            <Delimiter></Delimiter>
            <div class="users">
                <div class="users__header">
                    <div class="users__info">
                        92 Пользователей
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/blocks/Header.vue'
import Delimiter from '@/components/blocks/Delimiter.vue'

export default {
    components: {Header, Delimiter}
}
</script>
