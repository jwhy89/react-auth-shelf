import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfListItem from '../ShelfListItem/ShelfListItem';

class ShelfList extends Component {

    render(){
        return(
            <>
            <table className="ShelfList">
                <thead>
                    <tr><th>Description</th>
                        <th>URL</th>
                        <th>{'\u00A0'}</th></tr>
                </thead>
                <tbody>
                    {/* Render each item from the shelfList reducer */}
                    {this.props.reduxState.shelfList.map((shelfList, i) => {
                        return (<ShelfListItem key={i} shelfList={shelfList} />);
                    })}
                </tbody>
            </table>
            </>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(ShelfList);