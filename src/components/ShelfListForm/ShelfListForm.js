import React, { Component } from 'react';
import { connect } from 'react-redux'


class ShelfListForm extends Component {

state = {
    newItem: {
        image_url: '',
        description: '',
    }
}

handleChange = (e) => {
    console.log(this.state);
    this.setState({
        newItem: {
        ...this.state.newItem,
        [e.target.name]: e.target.value,
        }
    })
}

handleSubmit = (event) => {
event.preventDefault();
console.log(`This submit has been HANDLED`);

this.props.dispatch({type:'ADD_ITEM', payload: this.state.newItem});
this.setState({
    newItem : {
        image_url:'',
        description: '',
        user_id: ''
    }
})
}

    render(){
        return(
            <form>
                <label>
                    Image URL
                </label>
                <input type='text' onChange={this.handleChange} name='image_url' value={this.state.newItem.image_url} />
                <label>
                    Description
                </label>
                <input type='text' onChange={this.handleChange} name='description' value={this.state.newItem.description} />
            <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ShelfListForm);