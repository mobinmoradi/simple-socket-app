<script >
import { io } from "socket.io-client";



export default {
  data() {
    return {
      msg: '',
      socket: null
    }
  },
  mounted() {
   
    this.socket = io.connect('localhost:8000/')

    this.socket.on('num',(msg)=>{
      this.msg=msg
    })
   

  },
  methods: {
  }
}

</script>

<template>
  <div>
    
    <p>
      {{msg}}
    </p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
