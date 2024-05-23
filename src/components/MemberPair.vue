<template>
  <div class="position-absolute top-0 start-50">
    <h2>どちらを選びますか？</h2>
    <button class="btn btn-outline-primary" @click="selectMember(member1)">{{ member1.name }}</button>
    <button class="btn btn-outline-primary" @click="selectMember(member2)">{{ member2.name }}</button>
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
