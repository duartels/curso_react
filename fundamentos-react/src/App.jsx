import React from 'react'
import './App.css'

import Card from './components/layout/Card'
import Family from './components/basics/Family'
import Member from './components/basics/Member'
import StudantList from './components/repetition/StudantList'
import ProductList from './components/repetition/ProductsList'

import First from './components/basics/First'
import Parameter from './components/basics/Parameter'
import Random from './components/basics/Random'

export default (props) => {
    return(
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card title="#06 - Desafio Repetição" color="#FF4C65">
                    <ProductList> </ProductList>
                </Card>

                <Card title="#05 - Repetição" color="#FF4C65">
                    <StudantList> </StudantList>
                </Card>

                <Card title="#04 - Componentes com filhos" color="#00C8F8">
                    <Family lastName="Duarte">
                        <Member name="Andre" />
                        <Member name="Andreia" />
                        <Member name="José" />
                    </Family>
                </Card>

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