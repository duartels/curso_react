import React, {Component} from 'react'

export default class Count extends Component{
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({
            numero: this.state.numero+1
        })
    }

    menosUm = () => {
        this.setState({
            numero: this.state.numero-1
        })
    }

    alterarNumero = (dif) => {
        this.setState({
            numero: this.state.numero+dif
        })
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec 10</button>
            </div>
        )
    }
}

// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }