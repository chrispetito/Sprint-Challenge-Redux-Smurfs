import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

import SmurfForm from './SmurfForm'

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
 componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id}>
                <h2>{smurf.name}</h2>
                <h4>
                  AGE <span>{smurf.age}</span>
                </h4>
                <h5>
                  HEIGHT <span>{smurf.height}</span>
                </h5>
              </div>
            );
          })}{" "}
        </div>
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(App);
