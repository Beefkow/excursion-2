<template>
    <div>
      <span>{{statName}}:</span>
      <span>{{ticketValue}}</span>
      <span><button>+</button></span>
    </div>
</template>

<script> 
export default {
  name: 'TicketBlock',
  props: {
    statName: String,
    ticketValue: Number
  }
}
</script>

<style scoped>

</style>