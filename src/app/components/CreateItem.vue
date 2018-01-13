<template lang='html'>
	<div class="">
		<form v-on:submit.prevent="addItem()" class="card">
			<div class="card-title"><h1>Agrega un Item</h1></div>
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
		methods: {
			addItem () {
				this.axios.post('/item', this.item)
					.then((response) => {
						this.$router.replace({ name: 'DisplayItem' })
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
	}
</script>