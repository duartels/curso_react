import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Average = (props) => {
    
    const {min, max} = props.numbers

    return(
        <Card title="Média de Números" green>
            <div className="Interval">
                <span>
                    <strong>Resultado:</strong>
                    <strong>{(min+max)/2}</strong>
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

export default connect(mapStateToProps)(Average)