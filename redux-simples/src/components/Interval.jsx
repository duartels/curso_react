import React from 'react'
import './Interval.css'
import Card from './Card'
import { connect } from 'react-redux'
import {changeMinNumber, changeMaxNumber} from '../store/actions/numbers'

const Interval = (props) => {

    const {max, min} = props.numbers
    return(
        <Card title="Intervalo de Números" red>
            <div className="Interval">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}
                            onChange={(e) => props.changeMin(+e.target.value)}/>
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max}
                            onChange={(e) => props.changeMax(+e.target.value)}/>
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

function mapDispatchToProps(dispatch){
    return{
        changeMin(newNumber){
            const action = changeMinNumber(newNumber)
            dispatch(action)
        },
        changeMax(newNumber){
            const action = changeMaxNumber(newNumber)
            dispatch(action)
        }
    }
}


export default connect(
                    mapStateToProps,
                    mapDispatchToProps)
                (Interval)