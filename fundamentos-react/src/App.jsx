import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import First from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Random from './components/basics/Random'

export default (props) => {
    return(
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card title="#03 - Desafio Aleatório" color="#FA6900">
                    <Random min={5} max={25} />
                </Card>

                <Card title="#02 - Parâmetros" color="#E94C6F">
                    <Parameter titulo="Teste" subtitulo="sub"/>
                </Card>

                <Card title="#01 - Primeiro componete" color="#E8B71A">
                    <First />
                </Card> 
            </div>
        </div>
    )
}