<template>
  <div>
    <MemberPair
      v-if="currentPair"
      :member1="currentPair[0]"
      :member2="currentPair[1]"
      @selected="handSel"
    />
    <div v-else>
      <h1>結果</h1>
      <ul>
        <li v-for="(member, index) in sortedMembers" :key="member.id" class="ranking-member">
          <span class="ranking-position">{{ index + 1 }}位</span>
          <img :src="member.image" :alt="member.name" class="ranking-image">
          <div>{{ member.name }}: {{ member.score }}</div>
        </li>
      </ul>
      <button @click="resetRanking">もう一度やる！</button>
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
    handSel(selectedmember) {
      const member = this.members.find(i => i.id === selectedmember.id);
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
  text-align: center;
}

h1 {
  text-align: center;
}

button {
  display: block;
  margin: auto;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #f19db5;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
}

button:hover {
  background: #f19db5c4;
}

.ranking-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.ranking-position {
  margin-right: 10px;
  font-weight: bold;
}

.ranking-image {

  object-fit: cover;
  margin-right: 10px;
}
</style>
