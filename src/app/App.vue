<template lang='html'>
    <div>
        <h1>VueJs Funcionando!</h1>
        <router-link :to="{ name: 'CreateItem' }" class="btn btn-primary">Crear Item</router-link>
        <div class="container">
        	<router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
    	
    }
</script>
