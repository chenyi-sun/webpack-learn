require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom, {render} from 'react-dom';
class Template extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
        }
        this.ValueChaneg = this.ValueChaneg.bind(this);
    }
    ValueChaneg(event){
        this.props.onTempletchange(event.target.value, this.props.name);
    }
    render(){
        return (
            <div>
                <input value={this.state.value} onChange={this.ValueChaneg}/>
            </div>
        );
    }
}
class Dangor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setWater: null,
            ceil: 0,
            feil: 0
        };
        this.change = this.change.bind(this); 
    }
    change(value, name){
        console.log(value); 
        console.log(name);
    }
    render() {
        return (
           <div>
               <Template 
                    name={names[0]}
                    value={this.state.ceil}
                    onTempletchange = {this.change}
               />
               <Template 
                    name={names[1]} 
                    value={this.state.feil}
                    onTempletchange = {this.change}
               />
              
               <div>

               </div>
           </div>
        )
    }
}
const names = ['cel','fah'];
ReactDom.render(
    <Dangor/>,
    document.getElementById('root')
);



