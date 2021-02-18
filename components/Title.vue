<template>
	<div class="title-container">
		<div class="title top">
			<h1 class="title-font" v-bind:style="{ color: color }">
				{{title}}
			</h1>
		</div>
		<div class="title bottom">
			<h1 class="title-font" v-bind:style="{ color: color }">
				{{title}}
			</h1>
		</div>
	</div>
</template>

<script>
export default {
	props: {
    color: {
			type: String,
			default() {
				return 'white'
			}
		},
		title: {
			type: String,
			default() {
				return 'HOME HOME HOME'
			}
		}
	},
	created() {
		const handleScroll = () => {
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop
			const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
			const scrolled = winScroll / height
			document.documentElement.style.setProperty('--scroll', `${scrolled}px`);
		}
		
		window.addEventListener('scroll', handleScroll)
	}
}
</script>

<style lang="scss" scoped>
.title-container {
	width: 100%;
  height: 150px;
	z-index: 100;
  overflow: hidden;
  padding: 0.5rem 0;
  position: relative;
  align-items: center;
	flex-direction: column;
	.title {
		padding: 0px;
		display: flex;
		font-size: 72px;
		position: absolute;
		white-space: nowrap;
		flex-direction: row;
		align-items: center;
		color: var(--color);
	}
}

.top {
	top: 0;
	left: 0;
	margin-left: (calc(var(--scroll) * -600));
	.title-font {
		font-family: 'Altero Outline';
	}
}

.bottom {
	bottom: 0;
	right: (calc(var(--scroll) * -600));
	.title-font {
		font-family: 'Altero Regular';
	}
}

</style>
