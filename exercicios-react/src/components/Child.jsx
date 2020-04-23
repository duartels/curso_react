import React from 'react'

export default (props) =>{
    return(
        <div>
            <button onClick={() => props.notificarSaida('fut')}>Vou Sair</button>
        </div>
    )
    
}