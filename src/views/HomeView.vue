<template>
  <main>
    <h3>Introduce tu nombre de usuario </h3>
    <input placeholder="username" v-model="username"/>
    <button @click='iniciar'>iniciar</button>
  </main>
</template>
<script>
export default {
  data() {
    return{
      username:''
    }
  },
  methods:{
    iniciar(){
      return this.$router.push('/chats')
    }
  }
}



</script>
