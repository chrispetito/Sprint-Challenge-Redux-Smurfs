import React from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../actions'

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    }


  addSmurf = event => {
    event.preventDefault();
    if(!this.state.smurf) return;
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  handleChanges = event => {
    this.setState({
        smurf: {
            ...this.state.smurf,
            [event.target.name]: event.target.value
        }
    })
  }

    render() {
        return (
            <div className='form-container'>
                <form className='smurf-form' onSubmit={this.addSmurf}>
                    <input required placeholder='Name' name='name' value={this.state.smurf.name} onChange={this.handleChanges}></input>
                    <input required placeholder='Age' name='age' value={this.state.smurf.age} onChange={this.handleChanges}></input>
                    <input required placeholder='Height' name='height' value={this.state.smurf.height} onChange={this.handleChanges}></input>
                    <button>Add Smurf!</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    addingSmurf: state.addingSmurf
})

export default connect(mapStateToProps, { addSmurf })(SmurfForm);