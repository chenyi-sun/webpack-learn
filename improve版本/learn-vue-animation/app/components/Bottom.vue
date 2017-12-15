<template>
    <div id="bottom">
       <a class="menu" href="./index.html">
           <div class="menu-box">首页</div>
           <div class="menu-img">
               <img src="./../imgs/bottom/index.png"/>
           </div>
       </a>
       <a class="menu" href="./">
          <div class="menu-box">游记</div>
          <div class="menu-img">
              <img src="./../imgs/bottom/travel.png"/>
          </div>
       </a>
       <a class="menu" href="./">
         <div class="menu-box">客服</div>   
         <div class="menu-img">
             <img src="./../imgs/bottom/call.png"/>
         </div>          
       </a>
       <a class="menu" href="./">
         <div class="menu-box">我的</div>
         <div class="menu-img">
             <img src="./../imgs/bottom/mine.png"/>
         </div>
       </a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style scoped>
*{
    font-size: 0px;
}
#bottom {
    width: 100%;
    height: 60px;
    background: white;
    left: 0px;
    bottom: 0px;
    position: fixed;
    border-top: 1px solid rgba(219,219,219,0.6);
}
#bottom .menu{
    width: 25%;
    height: 100%;
    position: relative;
    display: inline-block;
}
#bottom .menu .menu-box{
    width: 100%;
    position: absolute;
    bottom: 5px;
    font-size: 14px;
    text-align: center;
    color: grey;
}
#bottom .menu .menu-img{
    width: 23px;
    height: 30px;
    position: absolute;
    left: 50%;
    margin-left: -11.5px;
    top: 8px;
    /*margin-left: -15px;*/
}
#bottom .menu .menu-img img{
    width: 100%;
    /*height: 100%;*/
}
</style>