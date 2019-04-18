import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfListItem from '../ShelfListItem/ShelfListItem';

class ShelfList extends Component {

    render(){
        return(
            <>
            <ShelfListItem />
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ShelfList);