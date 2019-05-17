import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: {
      name: ''
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>{this.props.smurfs.map(smurf => {
          return <div>
            <h1>{smurf.name}</h1>
          </div>
        })} </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
})

export default connect(mapStateToProps, { fetchSmurfs })(App);
