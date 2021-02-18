<template>
	<div class="wrapper-card" :style="styleObject">
		<div 
			class="time-wrapper" 
			v-bind:id="'start'" 
			v-bind:class="odd ? 'right' : 'left'"
		>
			<h3 class="time-text">{{data.startTime}}</h3>
		</div>
		<div 
			class="time-wrapper" 
			v-bind:id="'end'" 
			v-bind:class="odd ? 'right' : 'left'"
		>
			<h3 class="time-text">{{data.endTime}}</h3>
		</div>
		<div class="background-card" v-bind:class="odd ? 'right' : 'left'" />
		<div class="profile-card">
			<img 
				class="profile-image"
				:src="require(`~/assets/logo/${data.image}.png`)" 
			/>
			<div class="profile-content">
				<h1 class="spacer">{{data.title}}</h1>
				<h3>{{data.role}}</h3>
				<div class="button">
					<h3>See Detail</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		styleObject: function() {
			return {
				'--borderradius': this.odd ? '40px 0px 40px 40px' : '0px 40px 40px 40px',
				'--gradient': `linear-gradient(to bottom, ${this.data.firstColor}, ${this.data.secondColor})`,
				'--origin': this.odd ? 'top right' : 'top left',
				'--transform': this.odd ? 'rotate(10deg) skew(0deg, 5deg)' : 'rotate(-10deg) skew(0deg, -5deg)',
				'--position': this.odd ? 'right' : 'left',
			}
		}
	},
	props: {
		odd: {
			type: Boolean
		},
		data: {
			type: Object
		}
	}
}
</script>

<style lang="scss" scoped>
.wrapper-card {
	width: 60%;
	height: 55vh;
	padding: 20px;
	display: flex;
	position: relative;
	margin-bottom: 5vh;
	.time-wrapper {
		height: auto;
		z-index: 100;
		padding: 5px 25px;
		position: absolute;
		border-radius: 40px;
		backdrop-filter: blur(20px);
		background: rgba(0, 0, 0, 0.2);
		border: solid 1px rgba(150, 150, 150, 0.5);
	}
	.profile-card {
		top: 5vh;
		left: 0%;
		width: 100%;
		height: 45vh;
		padding: 20px;
		display: flex;
		position: absolute;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		backdrop-filter: blur(30px);
		border-radius: var(--borderradius);
		background: rgba(50, 50, 50, 0.1);
		border: solid 1px rgba(150, 150, 150, 0.5);
		transition: all 0.4s ease;
		.profile-content {
			padding: 4%;
			display: flex;
			margin-top: 2%;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			.button {
				border: none;
				width: 170px;
				display: flex;
				margin-top: 10%;
				padding-top: 20px;
				border-radius: 10px;
				align-items: center;
				justify-content: center;
				transition: all 0.2s ease-in-out;
				background: rgba(255, 255, 255, 0.2);
				border: solid 1px rgba(255, 255, 255, 0.4);
			}
		}
		.profile-image {
			height: 35%;
			object-fit: contain;
			flex-direction: row;
			justify-content: center;
		}
	}
	.background-card {
		top: 5vh;
		width: 100%;
		height: 45vh;
		position: absolute;
		background: var(--gradient);
		transform-origin: var(--origin);
		border-radius: var(--borderradius);
		transition: all 0.4s cubic-bezier(0.62, 0.01, 0.33, 0.97);
	}
}

#start {
	bottom: 0vh;
}

#end {
	top: 0vh;
}

.left {
	left: 0%;
}

.right {
	right: 0%;
}

.spacer {
	margin-top: 5%;
}


.wrapper-card:hover .background-card {
	width: 82%;
	transform: var(--transform);
	box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
}

.button:hover {
	transform: scale(1.07);
}

h1 {
	color: white;
	font-size: 28px;
	line-height: 100%;
	text-align: center;
	margin-bottom: -5px;
}

h3 {
	line-height: 0%;
	font-size: 18px;
	color: #DDDDDD;
	text-align: center;
	letter-spacing: 1px;
	background: #845FC0;
	font-family: 'SF Pro Display Regular';
}

.time-text {
	color: white;
	font-size: 16px;
	margin-top: 10px;
}

</style>