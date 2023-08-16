<template>
    <div class="button"
        :class="className"
        @click="click"
    >
            <div class="button__inner">
                <i v-if="!!prependIcon" :class="`_icon-${prependIcon}`"></i>
                <span>{{title}}</span>
                <i v-if="!!appendIcon" :class="`_icon-${appendIcon}`"></i>
            </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Кнопка'
            },
            isDisabled: {
                type: Boolean,
                default: false 
            },
            appendIcon:{
                type: String,
                default: ''
            },
            prependIcon:{
                type: String,
                default: ''
            },
            isOnlyIcon:{
                type: Boolean,
                default: false
            }

        },
        computed: {
            className(){
                return {
                    '_disabled' : this.disabled,
                    '_onlyIcon' : this.isOnlyIcon
                }
            }
            
        }

    }
</script>