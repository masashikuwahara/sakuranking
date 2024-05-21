<template>
  <div>
    <h2>どちらを選びますか？</h2>
    <button @click="selectItem(item1)">{{ item1.name }}</button>
    <button @click="selectItem(item2)">{{ item2.name }}</button>
  </div>
</template>

<script>
export default {
  props: {
    item1: Object,
    item2: Object,
  },
  methods: {
    selectItem(item) {
      this.$emit('selected', item);
    }
  }
}
</script>
