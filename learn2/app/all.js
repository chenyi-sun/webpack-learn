import _ from 'lodash';
function component(){
    var div = document.createElement('div');
    div.innerHTML = _.join(['Hello','webpacks'], '');
    alert('ssssss');
    return div;
}   
document.body.appendChild(component());