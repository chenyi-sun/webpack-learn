var judgeFlag = true;
var img  = document.getElementsByTagName('img')[0];
var allImages = document.getElementsByTagName('img');
var urls = [];


import './css/mains.less';
if(!window.requestAnimationFrame){
  window.requestAnimationFrame = function(fn){
    return setTimeout(fn, 17);
  }
}

var judgeImg = function(){
  function judgeImg(img){
    this.img = img;
    this.url = img?img.getAttribute('get'):'';
    this.cacheImage = new Image();
    this.ifIgsist = false;
    this.cacheImage.src = this.url;
  }
  judgeImg.prototype.judgeApplication = function(){
    if(this.cacheImage.complete){
        this.ifIgsist = true;
        this.ifGetImg();
    }
    if(!this.ifIgsist){
      requestAnimationFrame(this.judgeApplication.bind(this))
    }
  }
  judgeImg.prototype.control = function(){
     this.judgeApplication();
  }
  judgeImg.prototype.ifGetImg = function(){
      urls.push(this.url);
      return this.url;
  }
  return judgeImg;
}();

// var imgss = new judgeImg(img);
// imgss.control();
var allInit = function(){
  function allInit(allImages, ifFillImg, fn){
    var allVariables = {
      long : allImages ? allImages.length : 0,
      allImages : allImages,
      londingLength : 0,
      ifFillImg: ifFillImg?ifFillImg: false,
      customChange: fn? fn:function(){},
    }
    for(var i = 0 ; i < allVariables.long ; i++){
      var img = new judgeImg(allImages[i]);
      img.control();
    }
    function forEachAllImg(){
      allVariables.londingLength = urls.length;
      console.log(allVariables.londingLength);
      if(urls.length == allVariables.long){
        allVariables.customChange();
          for(var i = 0 ; i < allVariables.long ; i++){
            if(allVariables.ifFillImg){
              allVariables.allImages[i].src = urls[i]
              setTimeout(set,1000);
              function set(){
                // console.log(allVariables.allImages[i]);
              }
            }
          }
          return false;
      }
      requestAnimationFrame(forEachAllImg);
    }
    forEachAllImg();
    return allVariables.long;
  }
  return allInit;
}();

var ss = allInit(allImages,true, function(){
  console.log('sss');
});
