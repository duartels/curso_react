import React from 'react'
import ReactDOM from 'react-dom'
// import FirstComponent from './components/FirstComponent'
// import {CompA, CompB} from './components/MultComponents'
// import MultElements from './components/MultElements'
// import SilvaFamily from './components/SilvaFamily'
// import Family from './components/Family'
// import Member from './components/Member'
// import CompWithFunction from './components/CompWithFunction'
// import Father from './components/Father'
// import ClassComponent from './components/ClassComponent'
// import Count from './components/Count'
import Hook from './components/Hook'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Hook />
        {/* <Count numeroInicial={100} /> */}
        {/* <ClassComponent value="Sou uma classe"/> */}
        {/* <FirstComponent value='teste'/>
        <CompA value='A'/>
        <CompB value='B'/>
        <MultElements /> */}
        {/* <SilvaFamily lastname="Silva"/> */}
        {/* <Family lastname="Pereira">
            <Member name="Andre" />
            <Member name="Andreia" />
            <Member name="José" />
        </Family>
        <CompWithFunction /> */}
        {/* <Father /> */}
    </div>
    , element)