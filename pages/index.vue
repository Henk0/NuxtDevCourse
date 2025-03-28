<template>
  <div class="text-center text-green-500 mt-10">
    Hello world!
    <div class="text-black">
      {{ storeMsg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "indexPage",

  computed: {
    storeMsg () {
      return this.$store.getters['modules/msgModule/msg']
    }
  }
}
</script>
