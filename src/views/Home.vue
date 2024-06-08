<template>
  <h1>Sakuranking</h1>
  <div class="explan">
    <h2>櫻坂46の推しメンを決めるアプリです。</h2>
    <h3>メンバー27人を総当たりで選んでいき、最終的にランキング形式で推しメンを決定します。<br>
    全員分を総当たりで選んでいくので、目安で5～10分ほどで選び終わることができます。</h3>
    <button><router-link class="routerLink" to="/ranking">はじめる</router-link></button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style>
.explan {
  text-align: center;
}

.routerLink{
     text-decoration: none;
     color: #fff;
 }
</style>