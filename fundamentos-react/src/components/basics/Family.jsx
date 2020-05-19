import React from 'react'

export default (props) => {
    return(
        <div>
            {
                props.children.map((el, i)=>{
                    return React.cloneElement(el, {...props, key: i})
                })
            }
        </div>
    )
}