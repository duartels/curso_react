import React from 'react'

export default (props) => {
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={()=>{props.click('Juca', 48, false)}}>Fornecer Informações</button>
        </div>
    )
}