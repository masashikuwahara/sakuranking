<template>
  <div>
    <ItemPair
      v-if="currentPair"
      :item1="currentPair[0]"
      :item2="currentPair[1]"
      @selected="handleSelection"
    />
    <div v-else>
      <h2>ランキング結果</h2>
      <ul>
        <li v-for="item in sortedItems" :key="item.id">{{ item.name }}: {{ item.score }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { items } from '../data.js';
import ItemPair from '../components/ItemPair.vue';

export default {
  components: { ItemPair },
  data() {
    return {
      items: items.map(item => ({ ...item, score: 0 })),  // アイテムリストにスコアを追加
      currentPairIndex: 0,  // 現在のペアのインデックス
      pairCombinations: this.generatePairCombinations(items),  // 全てのペアの組み合わせ
    };
  },
  computed: {
    currentPair() {
      return this.pairCombinations[this.currentPairIndex] || null;  // 現在のペアを取得
    },
    sortedItems() {
      return [...this.items].sort((a, b) => b.score - a.score);  // スコアに基づいてアイテムをソート
    }
  },
  methods: {
    generatePairCombinations(items) {
      const pairs = [];
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          pairs.push([items[i], items[j]]);  // 全てのペアの組み合わせを生成
        }
      }
      return pairs;
    },
    handleSelection(selectedItem) {
      const item = this.items.find(i => i.id === selectedItem.id);
      if (item) {
        item.score++;  // 選択されたアイテムのスコアを増加
      }
      this.currentPairIndex++;  // 次のペアに進む
    }
  }
}
</script>
