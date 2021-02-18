<template>
	<div class="container">
		<div class="wrapper-card">
			<div class="background-card"/>
			<div class="profile-card">
				<img 
					class="profile-image"
					src="~/static/img/profile.jpg" 
				/>
				<div class="profile-content">
					<img 
							class="emoji"
							src="~/static/img/memoji_celebrate.png" 
						/>
					<div class="title">
						<h1 class="spacer">{{`First of all, Glad to meet you!`}}</h1>
					</div>
					<h2>{{`I’m experienced in designing and developing in Web and Mobile Apps with a passion for the Love of bringing delightful and human-centric experience to Life. I’m also Interested in front-end developing and everything related to visual, such as photography, web & graphic design.`}}</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.container {
	height: 100vh;
}

.wrapper-card {
	width: 75%;
	margin-left: 12.5%;
	height: 60vh;
	padding: 20px;
	display: flex;
	position: relative;
	.profile-card {
		top: 5vh;
		left: 0%;
		width: 100%;
		height: 60vh;
		padding: 20px;
		display: flex;
		position: absolute;
		border-radius: 30px;
		backdrop-filter: blur(40px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.5);
		.profile-content {
			width: 60%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 4%;
			flex-direction: column;
			.title {
				width: 100%;
				display: flex;
				align-items: flex-start;
			}
			.emoji {
				width: 200px;
				height: 200px;
				object-fit: contain;
			}
		}
		.profile-image {
			width: 40%;
			height: 100%;
			border-radius: 20px;
			object-fit: cover;
			flex-direction: row;
			justify-content: center;
		}
	}
	.background-card {
		top: 5vh;
		left: 0%;
		width: 92%;
		height: 60vh;
		position: absolute;
		border-radius: 30px;
		transform: skew(0, 5deg);
		transform-origin: top left;
		transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
		background: linear-gradient(to bottom, #FF9CE9, #845FC0);
	}
}

.spacer {
	font-size: 28px;
}

.wrapper-card:hover .background-card {
	width: 82%;
	transform: skew(0, 10deg);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
}

h2 {
	text-align: left;
}

</style>