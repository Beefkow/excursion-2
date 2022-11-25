<template>
    <div>
      <span>{{statName}}:</span>
      <span>{{statValue}}</span>
      <span><button>+</button></span>
    </div>
</template>

<script> 
export default {
  name: 'StatBlock',
  props: {
    statName: String,
    statValue: Number
  }
}
</script>

<style scoped>

</style>