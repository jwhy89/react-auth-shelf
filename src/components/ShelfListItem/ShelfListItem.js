import React, { Component } from 'react';
import { connect } from 'react-redux';


class ShelfListItem extends Component {

    render(){
        return(
            'Hello from ShelfListItem'
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ShelfListItem);