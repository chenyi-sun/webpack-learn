var imgs = document.getElementsByTagName('img');
var imgLength = imgs.length;

let setImg =  function(){
    function setImg(item){
        this.img = item;
    }
    setImg.prototype.set = function(){
        let src = this.img.getAttribute("imgsrc");
        let filename = src.match(/[^\/]*.(png|jpg)/)[0].slice(0,-4);
        let fileEnd = src.match(/[^\/]*.(png|jpg)/)[0].match(/\..*/)[0];
        this.img.src  = require("./../imgs/"+filename+ fileEnd)
    }
    return setImg;
}();

for(let i = 0; i < imgLength; i++ ){
    var all = new setImg(imgs[i]);
    all.set();
}