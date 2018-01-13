<template lang='html'>
    <div class="">
        <form v-on:submit.prevent="updateItem()" class="card">
            <div class="card-title"><h1>Editar Item {{ item.name }}</h1></div>
            <div class="card-body">
                <div class="form-group">
                    <input type="text" v-model="item.name" placeholder="Nombre del producto" class="form-control">
                </div>
                <div class="form-group">
                    <input type="number" v-model="item.price" placeholder="Agrega un precio" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">Envíar</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                item: {}
            }
        },
        created () {
            this.getItem()
        },
        methods: {
            getItem () {
                this.axios.get(`/item/${this.$route.params.id}`)
                    .then((res) => {
                        this.item = res.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            updateItem () {
                this.axios.put(`/item/${this.$route.params.id}`, this.item)
                    .then((res) => {
                        this.$router.replace({ name: 'DisplayItem' })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>