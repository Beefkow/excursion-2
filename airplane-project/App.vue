<template>
<body>
  <img alt="Vue-logo" class="Airplane-pic" src="../assets/kcMKr7BXi.jpg">
    <form action="/action_page.php" method="get">
      <div class="wrap">
  <img
    class="bg"
    src="../assets/aurora-kreativ-UN4cs4zNCYo-unsplash.jpg">
     <h1><HelloWorld class="hello-world" msg="Ascension Airport"/></h1>
      <hr>
        <h2>Book a flight with Ascension Airport Today!</h2>
        <select @change="changeTicket($event)">
      <option v-for="(ticket, index) in tickets" 
        :key="index" 
        :value="index"
      >{{ticket.name}}</option>
    </select>
    <TicketBlock v-for="(ticketValue, statName) in selectedTicket.stats"
      :key="statName"
      :statName=statName
      :ticketValue=ticketValue
      />
      </div>
    </form>
</body>
</template>

<script>
import TicketBlock from './src/components/TicketBlock.vue'
import OptionsData from '../assets/ticketoptions.json'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TicketBlock
  },
  data () {
    return {
      tickets: OptionsData.tickets,
      selectedTicket: OptionsData.tickets[0]
    }
  },
  methods: {
    changeTicket(event) { 
      this.selectedTicket = this.tickets[event.target.value];
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#flights-hdr {
  font-size:20px;
  text-align: center;
}

.flights-li {
  text-align:left;
  border:solid;
  width:20%;
}

.Airplane-pic {
  width: 30%;
}

.hello-world {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: hsla(34, 100%, 50%, 1);
}

form {
  text-align: center;
  border: solid;
  border-radius: 10px;
  margin: 0 auto; 
  width:50%;
}

h2 {
  font-family:Tahoma, bold;
  font-size: larger;
  color:black
}

.wrap {
  overflow: hidden;
  position: relative;
}

.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  opacity: .3;
}

.drop-down:hover {
 cursor: pointer;
}

</style>

