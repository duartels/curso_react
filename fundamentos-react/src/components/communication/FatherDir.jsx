import React from 'react'
import ChildDir from './ChildDir'

export default (props) => {
    return(
        <div>
            <ChildDir text='filho 1' number={5} bool={true}/>
        </div>
    )
}