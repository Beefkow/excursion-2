<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <select @change="changeCharacter($event)">
      <option v-for="(character, index) in characters" 
        :key="index" 
        :value="index"
      >{{character.name}}</option>
    </select>
    <StatBlock v-for="(statValue, statName) in selectedCharacter.stats"
      :key="statName"
      :statName=statName
      :statValue=statValue
    />
  </div>
</template>

<script>
import StatBlock from './StatBlock.vue'
import statData from '../assets/stats.json'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    StatBlock
  },
  data () {
    return {
      characters: statData.characters,
      selectedCharacter: statData.characters[0]
    }
  },
  methods: {
    changeCharacter(event) { 
      this.selectedCharacter = this.characters[event.target.value];
    }
  }
}
</script>

<style scoped>
.hello {
  /* background-image: url("../assets/3032.jpg"); */
  background-size: cover;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.character-block {
  margin: 16px;
}
</style>
