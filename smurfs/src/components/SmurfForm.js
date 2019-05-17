import React from 'react'

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
            <div>
                <form>
                    <input></input>
                    <input></input>
                    <button></button>
                </form>
            </div>
        )
    }
}

export default SmurfForm;