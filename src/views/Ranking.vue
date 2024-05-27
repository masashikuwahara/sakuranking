<template>
  <div>
    <MemberPair
      v-if="currentPair"
      :member1="currentPair[0]"
      :member2="currentPair[1]"
      @selected="handSel"
    />
    <div v-else>
      <h2>結果</h2>
      <ul>
        <li v-for="member in sortedMembers" :key="member.id">
          <img :src="member.image" :alt="member.name">
          <span>{{ member.name }}</span>
        </li>
      </ul>
      <button @click="resetRanking">最初に戻る</button>
    </div>
  </div>
</template>

<script>
import { members } from '../data.js';
import MemberPair from '../components/MemberPair.vue';

export default {
  components: { MemberPair },
  data() {
    return {
      members: members.map(member => ({ ...member, score: 0 })),  // アイテムリストにスコアを追加
      currentPairIndex: 0,  // 現在のペアのインデックス
      pairCombinations: this.genPairCom(members),  // 全てのペアの組み合わせ
    };
  },
  computed: {
    currentPair() {
      return this.pairCombinations[this.currentPairIndex] || null;  // 現在のペアを取得
    },
    sortedMembers() {
      return [...this.members].sort((a, b) => b.score - a.score);  // スコアに基づいてアイテムをソート
    }
  },
  methods: {
    genPairCom(members) {
      const pairs = [];
      for (let i = 0; i < members.length; i++) {
        for (let j = i + 1; j < members.length; j++) {
          pairs.push([members[i], members[j]]);  // 全てのペアの組み合わせを生成
        }
      }
      return pairs;
    },
    handSel(selectedItem) {
      const member = this.members.find(i => i.id === selectedItem.id);
      if (member) {
        member.score++;  // 選択されたアイテムのスコアを増加
      }
      this.currentPairIndex++;  // 次のペアに進む
    },
    resetRanking() {
      this.currentPairIndex = 0;
      this.members = this.members.map(member => ({ ...member, score: 0 }));
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>
