require('./../css/index.css');
require('./../less/index.less');
require('./../less/common.less');
import React from 'react';
import ReactDom, {render} from 'react-dom';
import { VelocityComponent } from 'velocity-react';

const VelocityLetter = ({ letter }) => (
  <VelocityComponent
    runOnMount
    animation={{ opacity: 1, marginTop: 0 }}
    duration={500}
  >
    <p style={styles.letter}>{letter}</p>
  </VelocityComponent>
)


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            letters: [],
        }
        this.onChange = this.onChange.bind(this);
    }
  onChange (e) {
    const letters = e.target.value.split('');
    const arr = []
    letters.forEach((l, i) => {
      arr.push(<VelocityLetter letter={l} key={i}/>)
    })
    this.setState(() => ({ letters: arr }))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <input onChange={this.onChange} style={styles.input} />
          <div style={styles.letters}>
            {
              this.state.letters
            }
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  input: {
    height: 40,
    backgroundColor: '#ddd',
    width: 200,
    border: 'none',
    outline: 'none',
    marginBottom: 20,
    fontSize: 22,
    padding: 8,
  },
  letters: {
    display: 'flex',
    height: 140,
  },
  letter: {
    opacity: 0,
    marginTop: 100,
    fontSize: 22,
    whiteSpace: 'pre',
  }
}


ReactDom.render(
    <App/>,
    document.getElementById('root')
);



