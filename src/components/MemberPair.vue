<template>
  <h1>どちらかを選んでください</h1>
  <div class="member-pair">
    <div class="member" @click="selectMember(member1)">
      <img :src="member1.image" :alt="member1.name" class="memImg">
      <p>{{ member1.name }}</p>
    </div>
    <div class="member" @click="selectMember(member2)">
      <img :src="member2.image" :alt="member2.name" class="memImg">
      <p>{{ member2.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member1: Object,
    member2: Object,
  },
  methods: {
    selectMember(member) {
      this.$emit('selected', member);
    }
  }
}
</script>

<style>
.member-pair{
  display: flex;
  justify-content: center;
  gap: 2px;
}

.memImg {
  width: 95%;
}
</style>
