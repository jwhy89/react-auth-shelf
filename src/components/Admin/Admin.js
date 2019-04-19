import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

componentDidMount() {

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
                    {this.props.reduxState.countReducer.map((count, i) =>
                 <tr key={i}>
                 <td>
                     {count.user.username}
                 </td>
                 <td>
                     {count.user.username}
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