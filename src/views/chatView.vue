<template>
    <div>
        <div v-for="msg in messagesFiltered" :key="msg.id">
            {{ msg.text }}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            messages:[
                { id:1, text:'mensaje 1', author:1},
                { id:2, text:'mensaje 2', author:2},
                { id:3, text:'mensaje 3', author:3},
            ]
        }
    },
    computed:{
        messagesFiltered(){
            return this.messages.filter((msg) => {
                return `${msg.author}` === this.$route.params.chatId
            })
        }
    }
}
</script>