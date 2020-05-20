import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Draw = (props) => {

    const {min, max} = props.numbers
    const random = parseInt(Math.random() * (max-min)) + min

    return(
        <Card title="Sorteio de Números" purple>
            <div className="Interval">
                <span>
                    <strong>Resultado:</strong>
                    <strong>{random}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return{
        numbers: state.numbers
    }
}

export default connect(mapStateToProps)(Draw)