import React, { Component } from 'react';
import { connect } from 'react-redux'


class ShelfListForm extends Component {

state = {
    newItem: {
        url: '',
        description: '',
    }
}

handleChange = (e) => {
    console.log(this.state);
    this.setState({
        newItem: {
        ...this.state.newItem,
        [e.target.name]: [e.target.value],
        }
    })
}

handleSubmit = (e) => {
e.preventDefault();
//this.props.dispatch({type:'ADD_SHELF_ITEM', payload: this.state.newItem});
this.setState({
    newItem : {
        url:'',
        description: '',
    }
})
}

    render(){
        return(
            <form>
                <label>
                    Image URL
                </label>
                <input type='text' onChange={this.handleChange} name='url' value={this.state.newItem.url} />
                <label>
                    Description
                </label>
                <input type='text' onChange={this.handleChange} name='description' value={this.state.newItem.description} />
            <button onSubmit={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ShelfListForm);