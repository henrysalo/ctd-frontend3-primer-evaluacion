import React from "react";

export default class Ultima extends React.Component {
    render() {
        return(
            <>
                <h2>
                    Última opción seleccionada:
                    {this.props.ultima === 0 ? " -" : ` ${this.props.ultima}`}
                </h2>
            </>
        )
    }
}