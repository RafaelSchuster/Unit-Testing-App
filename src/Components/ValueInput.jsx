import React, { Component } from 'react'

export default class ValueInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fieldValue: 0
        }
    }
    handleChange = (ev) => {
        this.setState({ fieldValue: ev.target.value }, () => this.props.changeCallback(this.props.id, this.state.fieldValue))
    }

    render() {
        return (
            <div className="form-group p-2">
                <label htmlFor="">Value #{this.props.id}</label>
                <input type="text" className="form-control"
                    defaultValue={this.state.fieldValue}
                    onChange={this.handleChange} />

            </div>
        )
    }
}
