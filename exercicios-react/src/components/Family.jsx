import React from 'react'
import { childWithProps } from '../utils/utils'

export default props => 
    <div>
        {childWithProps(props)}
        {/* {React.Children.map(props.children, child=>{
            return React.cloneElement(child, {...props})
        })} */}
    </div>