import React from 'react'
import Member from './Member'

export default props =>
    <div>
        <Member name="José" lastname={props.lastname} />
        <Member name="Lucas" lastname={props.lastname} />
        <Member name="Rafael" lastname={props.lastname} />
    </div>