<template>
<div class="mt-5">
  <div class="container">
      <div class="jaedsada-contents p-4 text-center">
        <h3 class="404">404 Not Found</h3>
        <hr>
        <p class="help404">Whoops! Page not found</p>
        <span class="404">Return Home <a href="/">home</a></span>
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {},
  data(){
    return {
      url : [
        {
          name: 'Blog',
          url : 'https://blog.thnovice.me'
        },
        {
          name: 'Covid19',
          url : '/covid'
        }
      ]
    }
  }
}
</script>

