<template>
      <div>
        <span>{{statName}}:</span>
        <span>{{statValue}}</span>
        <span><button class="btn">+</button></span>
      </div>
  </template>

<script>
export default {
  name: 'statBlock',
  props: {
    statName: String,
    statValue: Number
  }
}
</script>


<style scoped>

.btn {
  margin: 50px;
  height: 50px;
  width: 50px;
  color:red;
  font-size: 50px;
  text-align: center;
  background-color:blue;
}

.btn:hover {
  cursor: pointer;
}

</style>