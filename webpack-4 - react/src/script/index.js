require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom, {render} from 'react-dom';

let  arrs = [];
const  arr1 = ['a', 'b'];
const  arr2 = ['c'];
const  arr3 = ['d', 'e'];
function activeLasers(){
    alert("names is as");
}

var handleClick = (e)=>{
    e.preventDefault();
}
//  function handleClick(e){
//         e.preventDefault();
// }
class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true
        }
    }
    render(){
        return (
            <buttom onClick={this.change}>
                {this.state.isToggleOn?"true":"false"}
            </buttom>
        );
    }
}


ReactDom.render(
    <Clock/>,
    document.getElementById('root')
);



