<template>
    <div class="fixed-top shadow jaedsada-nav">
      <nav class="navbar navbar-light">
        <a class="navbar-brand" href="/">
          <img src="/img/thnovice-icon.png" width="50px" class="thnovice-logo rounded" alt="">
          Jaedsada
        </a>
        <div class="">
          <div class="btn-group">
            <a class="jaedsada-nav-btn-down" href="javascript:void(0)" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="fas fa-bars"></i>
            </a>
            <div class="dropdown-menu jaedsada-nav-down" style="overflow: scroll;">
              <div class="container">
                <div class="row">
                  <div class="col-6" v-for="(info,index) in url" :key="index">
                    <a :href="info.url">
                      <div class="card text-center">
                        <div class="card-body">
                          <p>{{ info.name }}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .jaedsada-nav {
    border-bottom: 1px solid #e0e0e0;
    background: white;
    font-family: 'Black Ops One', cursive;
  }
  .jaedsada-nav-down {
    left: -16rem !important;
    width: 300px;
    height: 50vh;
  }
  .jaedsada-nav-btn-down{
    padding: 10px 15px;
    border-radius: 26px;
    border: 1px solid #d6d2d2eb;
    text-decoration: none;
    color: black;
  }
  .jaedsada-nav-btn-down:before {
    content: "";
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    position: absolute;
    top: -10px;
    right: 16px;
    z-index: 10;
}
</style>