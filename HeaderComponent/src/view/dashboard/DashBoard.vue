<template>
  <div id="dashboard">
    {{msg}}
    <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/page/Header'

export default {
  name: 'DashBoard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
  }
}
</script>

<style>

</style>