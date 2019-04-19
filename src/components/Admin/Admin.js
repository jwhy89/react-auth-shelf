import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

componentDidMount() {
    const action = {type: 'GET_COUNT'};
    this.props.dispatch(action);
}


    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>
                            User
                        </th>
                    </tr>
                    <tr>
                        <th>
                Count
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.adminReducer.map((count, i) =>
                 <tr key={i}>
                 <td>
                     {count.username}
                 </td>
                 <td>
                     {count.count}
                 </td>
                 </tr> 
                    )}
                </tbody>
            </table>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState,
})

export default connect(mapReduxStateToProps)(Admin);