require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom, {render} from 'react-dom';
class Template extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
        this.ValueChaneg = this.ValueChaneg.bind(this);
    }
    ValueChaneg(event){
        this.props.onTempletchange(event.target.value, this.props.name);
    }
    render(){
        const value = this.props.value;
        return (
            <div>
                <input  value={value} onChange={this.ValueChaneg}/>
            </div>
        );
    }
}

class Dangor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setWater: null,
            ceil: '',
            feil: ''
        };
        this.change = this.change.bind(this); 
    }
    change(value, name){
    
        this.setState({
            ceil: name == names[0]? value: value/10,
            feil: name == names[1]? value: value*10,
            setWater: name == names[0]? value: value/10
        });
    }
    render() {
        var ceil = this.state.ceil;
        const message = this.state.setWater >= 20? "is hot": "is cold";
        return (
           <div>
               <Template 
                    name={names[0]}
                    value={ceil}
                    onTempletchange = {this.change}
               />
               <br/>
               <Template 
                    name={names[1]} 
                    value={this.state.feil}
                    onTempletchange = {this.change}
               />
              
               <div>
                    {message}
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



