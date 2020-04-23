import React from 'react'

const aprovados = ['Lucas', 'José', 'Zeca', 'Julia']

export default props => {
    const gerarItens = (itens) =>{
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}