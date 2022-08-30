<template>
    <div>
        <p>test</p>
    </div>
</template>

<script>

import { io } from "socket.io-client";

export default {
    mounted() {
        const socket = io("http://localhost:3000/");

        socket.on("connect", () => {
            console.log(socket.id); 
        });
    }
}

</script>