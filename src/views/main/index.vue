<template>
  <div class="app-container">
    main
  </div>
</template>

<script>
import { list } from '@/api/user'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  created() {
    list().then(res => res)
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>

</style>
