<template>
    <div>
        <aside>
           <div v-for="chat in chats" :key="chat.id">
            <router-link :to="`/chats/${chat.id}`">{{ chat.name }}</router-link>
           </div>
        </aside>
        <article>
            <RouterView />
        </article>
    </div>
</template>
<script>
export default{
    data(){
        return {
            chats:[
                { id: 1, name:'ximena'},
                { id: 2, name:'rubis'},
                { id: 3, name:'rafael'}
            ]
    }
}
}
</script>
