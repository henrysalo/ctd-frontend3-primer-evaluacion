import React from "react";

export default class Botones extends React.Component {
    render() {
        return(
            <>
                <button value={this.props.value} onClick={this.props.onClick}>{this.props.value + ". " + this.props.opcion}</button>
            </>
        )
    }
}