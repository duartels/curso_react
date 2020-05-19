import React, {useState} from 'react'
import './Input.css'

export default (props) => {

    const [value, setValue] = useState('Inicial')

    const handleChange = (e) =>{
        setValue(e.target.value)
    }

    return(
        <div className="Input">
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    )
}