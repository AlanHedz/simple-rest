<template lang='html'>
    <div>
        <h3>Mostrando Items</h3>
        <table class="table table-hover table-bordered">
        	<thead>
        		<th>Nombre</th>
        		<th>Precio</th>
        		<th>Acciones</th>
        	</thead>
        	<tbody>
                <tr v-for="item in items">
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td>
                        <a href="#" class="btn btn-danger" v-on:click.prevent="deleteItem(item._id)">Eliminar</a>
                        <router-link :to="{ name: 'EditItem', params: {id: item._id} }" class="btn btn-dark">Actualizar</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: []
            }
        },
        created () {
            this.fetchItems();
        },
        methods: {
            fetchItems () {
                let uri = '/item'
                this.axios.get(uri)
                    .then((response) => {
                        this.items = response.data
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },
            deleteItem (id) {
                let response = confirm('¿Estas seguro de eliminar este item?')
                if (response) {
                    this.axios.delete(`/item/${id}`)
                        .then((res) => {
                            this.fetchItems()
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
                return
            }
        }
    }
</script>
