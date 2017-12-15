var all = {
    path: 'dev',//build
    ask: function(aa){
        console.log(aa||'dddd');
    },
    id: function(self){
        return 'ddddd';
    },
    router: function(){
        console.log(window.location.href);
        return 'dddd';
    },
    next: function(self){
        var location = window.location.href;
        var num = location.indexOf("?");
        if(num>0){
            var str= location.substr(num+1);
            var arr = str.split("&");
            console.log(arr);
        }
        return false;
        window.location.href = 'window.location.href/../test.html?id=';
    },
    setLocation: function(name,value){ //localstorage
        localStorage[name] = value;
    },
    allPath:{
        dev: {
            base: './',
            second: './',
            third: './',
        },
        build:{
            base: './',
            second: './../',
            third: './../../',
        }
    },
    pathDetail:{
        
    }
}
export default all;

