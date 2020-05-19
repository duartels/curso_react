import React from 'react'
import If, {Else} from './if'

export default (props) => {
    const user = props.user || {}
    return(
        <div>
            <If test={user && user.name}>
                Seja bem vindo <strong>{user.name}</strong>
                <Else>
                    Seja bem vindo <strong>cara</strong>
                </Else>
            </If>
        </div>
    )
}