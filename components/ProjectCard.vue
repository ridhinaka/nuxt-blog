<template>
	<div class="project-card">	
		<img 
			class="project-image"
			src="~/static/img/profile.jpg" 
		/>
		<div class="project-content">
			<div>
				<h1>{{data.title}}</h1>
				<h2 class="spacer">{{data.year}}</h2>
			</div>
			<h2>{{data.description}}</h2>
			<div class="button">
				<h3>See Detail</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		// styleObject: function() {
		// 	return {
		// 	}
		// }
	},
	props: {
    data: {
			type: Object
		},
	},
}
</script>

<style lang="scss" scoped>
.project-card {
	width: 70%;
	height: 270px;
	padding: 20px;
	display: flex;
	margin-bottom: 3vh;
	border-radius: 30px;
	align-items: flex-start;
	background: rgba(61, 61, 61, 0.2);
	border: solid 1px rgba(150, 150, 150, 0.5);
	.project-image {
		width: 25%;
		height: 100%;
		object-fit: cover;
		border-radius: 20px;
		flex-direction: row;
		justify-content: center;
	}
	.project-content {
		width: 75%;
		height: 100%;
		display: flex;
		padding: 0% 3%;
		flex-direction: column;
		justify-content: space-between;
		.button {
			width: 40%;
			padding: 4%;
			border: none;
			display: flex;
			margin-top: 2%;
			border-radius: 10px;
			justify-content: flex-start;
			background: rgba(255, 255, 255, 0.2);
			border: solid 1px rgba(255, 255, 255, 0.4);
		}
	}
}

.spacer {
	margin-bottom: 2%;
}

.project-card:hover {
	transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
	transform: scale(1.05);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.4);
}

h1 {
	font-size: 28px;
	text-align: left;
}

h2 {
	font-size: 18px;
	text-align: left;
	color: #CDCDCD;
}

h3 {
	color: #FFFFFF;
	font-size: 20px;
  text-align: left;
  font-family: 'SF Pro Display Bold';
}



</style>