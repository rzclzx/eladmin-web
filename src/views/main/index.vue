<template>
  <div class="app-container">
    main
  </div>
</template>

<script>
import { get } from '@/api/user'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  created() {
    get().then(res => {
      console.log(res)
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
