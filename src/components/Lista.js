import React from "react";

export default class Lista extends React.Component {
    render() {
        return(
            <>
                <h3>Historial:</h3>
                <ul>
                    {
                        this.props.lista.map((e,i) => {
                            return(<li key={e+i}>{i+1+e}</li>)
                        })
                    }
                </ul>
            </>
        )
    }
}