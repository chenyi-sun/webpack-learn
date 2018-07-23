require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom from 'react-dom';
import { VelocityComponent } from 'velocity-react';
import { createStore } from 'redux';

const name = "test";

function formatName(user){
    return user.firstName + ' ' + user.lastName;
};

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

let newArr = [
    { num: 100, value: 'name1'},
    { num: 200, value: 'name2'},
    { num: 20,  value: 'name3'},
    { num: 50,  value: 'name4'}
]

let testArr = newArr.sort((x, y) => {
    return x.num < y.num;
});

function setDom(name){
    return <div>{name} is name</div>;
}


const element = (
    <div>
        <div id="index" className="index" ></div>
        hello, {formatName(user)}
        {setDom('names')}
    </div>
);

const myString = "name,ask,news,farwy,kjks";

var person1 = {
    name: 'sara',
    age: 22,
    way: 'new is open the way',
    greeting: function(){
        console.log('ask name is ' + this.name);
    }
}

var person2 = Object.create(person1);
console.log(person2.__proto__);
console.log("===========");
console.log(person2.name);
console.log(person2.way);

person2.greeting();



