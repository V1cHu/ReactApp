import React from 'react';
import { connect } from 'react-redux';
import { getAvengers } from '../actions/homeActions';
import { logoutUser } from '../actions/userActions';
import AvengerTableRow from './AvengerTableRow';

const AvengerTable = (props) => {
    const tableRows = props.avengers.map(avenger => (
        <AvengerTableRow key={avenger.id} avenger={avenger} />)
    )

    return (<div>
        <div className="row d-flex justify-content-between">
            <div>
            <h2>Avengers List</h2>
            </div>
            <div><p/><button className="btn btn-sm btn-outline-danger" style={{top: -8+'px',position: 'relative'}} onClick={props.logoutUser}>Logout</button>
            </div>
        </div>
        <div className="row">
            <table className="table table-sm table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th className="col-md-2">Name</th>
                        <th className="col-md-2">Avenger Name</th>
                        <th className="col-md-2" style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    </div>)
}


const mapStateToProps = state => {
    return { avengers: state.homeReducer.avengers }
};
const mapDispatchToProps = dispatch => ({ logoutUser: ()=>dispatch(logoutUser())});


export default connect(mapStateToProps,mapDispatchToProps)(AvengerTable);