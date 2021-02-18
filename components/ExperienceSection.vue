<template>
	<div class="container">
		<div class="content">
			<div class="odd-experience" v-for="(state, index) in oddData" :key="index" >
				<ExperienceCard :odd="true" :data="state" />
			</div>
		</div>
		<div class="spacer" />
		<div class="content" id="even">
			<div class="even-experience" v-for="(state, index) in evenData" :key="index" >
				<ExperienceCard :odd="false" :data="state" />
			</div>
		</div>
	</div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue'
export default {
	components: {
		ExperienceCard
	},
	data() {
		return {
			oddData: [],
			evenData: []
		}
	},
	props: {
    data: {
			type: Array,
		},
	},
	created() {
		this.oddData = this.data.filter(dt => dt.id % 2 === 1)
		this.evenData = this.data.filter(dt => dt.id % 2 === 0)
	}
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	padding: 10vh 0vh;
	.content {
		width: 50%;
		.odd-experience {
			width: 100%;
			display: flex;
			padding-right: 10%;
			align-items: flex-end;
			flex-direction: column;
			justify-content: center;
		}
		.even-experience {
			width: 100%;
			display: flex;
			padding-left: 10%;
			align-items: flex-start;
			flex-direction: column;
			justify-content: center;
		}
	}
	.spacer {
		width: 1px;
		border-radius: 2px;
		background: #908F9B;
	}
}

#even {
	margin-top: 30vh;
}



</style>