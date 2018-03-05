import React from 'react';
import { connect } from 'react-redux';
import { editAvenger, deleteAvenger } from '../actions/homeActions';

class AvengerTableRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            originalAvenger: { ...this.props.avenger },
            avenger: { ...this.props.avenger },
            editable: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.saveAvenger = this.saveAvenger.bind(this);
        this.deleteAvenger = this.deleteAvenger.bind(this);
    }

    toggleEdit() {
        this.setState({ editable: !this.state.editable })
    }

    cancelEdit(e) {
        e.preventDefault();
        this.setState({
            avenger: { ...this.state.originalAvenger }
        })
        this.toggleEdit();
    }

    editChangeHandler(e, type) {
        e.preventDefault();
        if (type == 'name') {
            this.setState({
                avenger: {
                    name: e.target.value,
                    avengername: this.state.avenger.avengername,
                    id: this.state.avenger.id
                }
            });
        } else {
            this.setState({
                avenger: {
                    name: this.state.avenger.name,
                    avengername: e.target.value,
                    id: this.state.avenger.id
                }
            });
        }
    }

    saveAvenger(e) {
        e.preventDefault();
        this.props.editAvenger(this.state.avenger);
        this.setState({
            originalAvenger: { ...this.state.avenger }
        });
        this.toggleEdit();
    }

    deleteAvenger(e) {
        e.preventDefault();
        this.props.deleteAvenger(this.props.avenger.id);
    }

    render() {
        return (
            <tr>
                <td>{this.state.editable ?
                    <input className="form-control" onChange={e => this.editChangeHandler(e, 'name')}
                        defaultValue={this.state.avenger.name} /> : this.state.avenger.name}</td>
                <td>{this.state.editable ?
                    <input className="form-control" onChange={e => this.editChangeHandler(e, 'avengername')}
                        defaultValue={this.state.avenger.avengername} /> : this.state.avenger.avengername}</td>
                <td>
                    {this.state.editable ?
                        <button className="btn btn-sm btn-primary" onClick={this.saveAvenger}>Save</button> :
                        <button onClick={this.toggleEdit} className="btn btn-sm btn-secondary">Edit</button>
                    }
                    &nbsp;
                    {this.state.editable ?
                        <button className="btn btn-sm btn-secondary" onClick={this.cancelEdit} >Cancel</button> :
                        <button className="btn btn-sm btn-danger" onClick={this.deleteAvenger}>Delete</button>
                    }
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    editAvenger: avenger => dispatch(editAvenger(avenger)),
    deleteAvenger: id => dispatch(deleteAvenger(id))
})


export default connect(null, mapDispatchToProps)(AvengerTableRow);