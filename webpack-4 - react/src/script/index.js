require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom, {render} from 'react-dom';

var arr = [1, 2, 3, 4, 5];
var newarr = arr.map((item) => 
    <li key = {item.toString()}>{item}</li>
);
console.log(newarr);

function AllDom(props){
    const number = props.number;
    const listItems = number.map((item, index) => 
        <li key={index}>
           {item} + sss
        </li>
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

var number = [1,2,4,5];
ReactDom.render(
    <AllDom number={number}/>,
    document.getElementById('root')
);



