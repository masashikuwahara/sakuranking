<template>
  <div>
    <h2>どちらを選びますか？</h2>
    <button @click="selectMember(member1)">{{ member1.name }}</button>
    <button @click="selectMember(member2)">{{ member2.name }}</button>
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
