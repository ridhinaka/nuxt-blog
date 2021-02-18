<template>
  <ul class="text-list">
    <li>
      <a href="/home">Home</a>
    </li>
    <li>
      <a href="/shop">Shop</a>
    </li>
    <li>
      <a href="/faq">FAQ</a>
    </li>
    <li>
      <a href="/favorite">Favorite</a>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.text-list{
  display: flex;
  justify-content: space-around;
  width: 50%;
  align-items: center;
  .text-list li{
    list-style: none;
    .text-list a{
      color: rgb(166,160,156);
      text-decoration: none;
      font-size: 20px;
      font-weight: bold;
      margin-right: 25px;
    }
  }
}

</style>