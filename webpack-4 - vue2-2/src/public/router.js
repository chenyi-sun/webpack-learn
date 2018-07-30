import inde from './../components/index.vue';
const Foo = {
    template: '<div>foo</div>'
};
const Bar = {
    template: '<div>Bar</div>'
};
var routers = [
     {
        path: '/foo', component: Foo
     },
     {
        path: '/bar', component: Bar
     },
     {
         path: '/inde', component: inde
     }
 ];

 export default routers;