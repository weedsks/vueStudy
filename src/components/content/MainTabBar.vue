<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="item-icon" src="@/assets/img/home/home.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/home/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" active-color="blue">
      <img slot="item-icon" src="@/assets/img/category/category.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/category/category-active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" active-color="orange">
      <img slot="item-icon" src="@/assets/img/cart/cart.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/cart/cart-active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="item-icon" src="@/assets/img/profile/profile.png" alt="">
      <img slot="item-icon-active" src="@/assets/img/profile/profile-active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style scoped>

</style>
