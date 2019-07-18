<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  padding: 30px;
/* #nav {
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
/* 重置样式表 */
*{margin: 0;padding: 0;}
ul,ol{list-style: none;}
em,i{font-style: normal;}
a{text-decoration: none; color: #000;}
/* a:hover{text-decoration: underline;} */
input{border:none; outline: none; background-color: transparent;}
body,html{height: 100%;font-size: 26px}
body{position: relative; overflow-x: hidden;}
/*公用*/
.clearfix:after,.clearfix:before{content: '';display: table;}.clearfix:after{clear: both;}
.hide{display: none;}
.fl{float: left;}
.fr{float: right;}
</style>
