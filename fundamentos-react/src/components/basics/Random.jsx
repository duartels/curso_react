import React from 'react'

export default (props) => {
    //console.log(props)
    const {min, max} = props
    const num = parseInt(Math.random() * (max -min)) + min
    return(
        <div>
            <h2>Número é: {num}</h2>
        </div>
    )
}