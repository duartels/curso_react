import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Sum = (props) => {

    const {max, min} = props.numbers

    return(
        <Card title="Soma de Números" blue>
            <div className="Interval">
                <span>
                    <strong>Resultado:</strong>
                    <strong>{max+min}</strong>
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

export default connect(mapStateToProps)(Sum)