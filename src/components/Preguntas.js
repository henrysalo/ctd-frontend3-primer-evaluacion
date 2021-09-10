import React from "react";

export default class Preguntas extends React.Component {
    render() {
        return(
            <>
                <h1>{this.props.id}</h1>
                <p>{this.props.historia}</p>
            </>
        )
    }
}