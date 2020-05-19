import './StudantList.css'
import React from 'react'
import alunos from '../../data/alunos'

export default (props) => {
    const lis = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.name} -> {aluno.nota}
            </li>
        )
    })
    return(
        <div>
            <ul className="list">
                {lis}
            </ul>
        </div>
    )
}