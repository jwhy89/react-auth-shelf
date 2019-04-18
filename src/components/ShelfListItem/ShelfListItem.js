import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShelfListItem extends Component {

    deleteItem = (event) => {
		this.props.dispatch( { type: 'DELETE_ITEM', payload: this.props.shelfList.id } );
    }
    
    render(){
        return(
            <tr>
                <td>{this.props.shelfList.description}</td>
                <td>{this.props.shelfList.image_url}</td>
                <td><button onClick={this.deleteItem} name={this.props.shelfList.id}>Delete</button></td>
            </tr>
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ShelfListItem);