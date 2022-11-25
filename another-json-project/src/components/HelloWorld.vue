<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="all-attributes">
      <p>{{selectCharacter.name}}:</p>
      <statBlock class="attributes" v-for="(statValue, statName ) in selectCharacter.stats"
      :key="statName"
      :statName=statName
      :statValue=statValue
      />
    </div>
  </div>
</template>

<script>
import statBlock from "./StatBlock.vue"
import charstatData from '../assets/charstats.json';
export default {
    name: "HelloWorld",
    props: {
        msg: String

    },
    components: {
      statBlock
    },

    data () {
    return {
      characters: charstatData.characters,
      selectCharacter: charstatData.characters[0]
    }
  }
}
</script>

<style scoped>

h1 {
  font-size: 100px;
  color:crimson;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-shadow: 10px 10px blue;
}

p {
  font-size: 100px;
  color: blue;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.all-attributes {
  text-align: center;
  margin: auto;
  width: 70%;
  border: 6px dashed rgb(0, 70, 128);
  padding: 10px;
  display: flex;
}
.attributes {
  margin: 30px;
  border: solid 10px;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: red;
  font-size: 50px;
}


</style>
