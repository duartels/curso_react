import React, {useState} from 'react'
import ChildInd from './ChildInd'

export default (props) => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)
    function getInfo(name, age, nerd){
        setName(name)
        setAge(age)
        setNerd(nerd)
    }

    return(
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? "Verdadeiro" : "False"}</span>
            </div>

            <ChildInd click={getInfo}></ChildInd>
        </div>
    )
}