<template>
  <div v-show="$nuxt.isOffline" class="modal-container">
    <div class="backdrop" />
    <div class="modal-content" v-bind:id="[$nuxt.isOffline ? 'show' : 'hide']">
      <div class="modal-description">
        <h2>
          You're Offline
        </h2>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.style.setProperty('--connectionheight', `${window.innerHeight}px`)
    document.documentElement.style.setProperty('--connectionwidth', `${window.innerWidth}px`)
  },
}
// "
</script>

<style lang="scss" scoped>

.modal-container {
  top: 0px;
  left: 0px;
  display: flex;
  position: absolute;
  z-index: 1000000000;
  align-items: flex-end;
  justify-content: center;
  width: var(--connectionwidth);
  height: var(--connectionheight);
  animation: smoothFade 400ms ease-in-out 0s 1 normal forwards;
  .backdrop {
    top: 0px;
    left: 0px;
    position: absolute;
    width: var(--connectionwidth);
    height: var(--connectionheight);
    background: rgba(75, 45, 105, 0.7);
  }
  .modal-content {
    padding: 2%;
    height: 25%;
    display: flex;
    align-items: center;
    background: #4499A0;
    flex-direction: column;
    justify-content: space-around;
    width: var(--connectionwidth);
    border-radius: 25px 25px 0px 0px;
    filter: drop-shadow(0px 5px 20px #4B2D69);
    animation: fadeIn 600ms cubic-bezier(0.62, 0.01, 0.33, 0.97) 0s 1 normal forwards;
    .close-container {
      height: 20%;
      width: 100%;
      .close-button {
        width: 8%;
        height: 80%;
        display: flex;
        border-radius: 50px;
        align-items: flex-start;
        justify-content: flex-start;
        .icon-close {
          width: 85%;
          height: 85%;
          object-fit: contain;
        }
      }
    }
    .modal-description {
      height: 90%;
      display: flex;
      align-items: center;
      border-radius: 20px;
      padding: 0% 5% 0% 5%;
      flex-direction: column;
      justify-content: center;
      .button-container {
        display: flex;
        width: 100%;
        height: 50%;
        flex-direction: row;
        justify-content: center;
        .modal-button {
          width: 40%;
          height: 45%;
          margin: 2%;
          display: flex;
          margin-top: 3%;
          border-radius: 50px;
          align-items: center;
          justify-content: center;
          @media (max-width: 1023px) {
            height: 60%;
          }
        }
      }
    }
    
  }
}

#no {
  color: #666666;
  background: #DDDDDD;
}

#yes {
  color: #4B2D69;
  background: #AFE3F1;
}

.modal-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 15px #FFFFFF);
}

.close-button:hover {
  cursor: pointer;
  filter: drop-shadow(0px 0px 5px #FFFFFF);
}

h2 {
  font-size: 32px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1100px) {
    font-size: 20px;
  }
}

h1 {
  font-size: 20px;
  font-weight: bold;
  line-height: 200%;
  font-style: normal;
  text-align: center;
  font-family: 'Narasi Sans Bold';
  @media (max-width: 1100px) {
    font-size: 16px;
  }
}

@keyframes fadeIn {
	from {
    transform: translateY(50%);
    opacity: 0;
	}
	to {
    transform: translateY(0%);
    opacity: 1;
	}
}

@keyframes smoothFade {
	from {
    opacity: 0;
	}
	to {
    opacity: 1;
	}
}

</style>