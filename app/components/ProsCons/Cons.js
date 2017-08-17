import React, { PureComponent } from 'react'

class Input extends PureComponent{
    constructor(){
        super()
        this.state = {
            cons: [],
            text: '',
            newText: ''
        }

    }

    consChange = (e) => {

        var array = this.state.cons.slice();
        if(e.target.value.length === 0){
            array.splice(e.target.name, 1)
        }
        else{
            array[e.target.name] = e.target.value;
            
        }
        this.setState({
            cons: array,
            text: e.target.value
        })
        console.log(this.state.cons)
        
        
    }

    newConsChange = (e) => {
        
        var array = this.state.cons.slice();
        if(e.target.value.length === 0){
            array.splice(0, 1)
        }
        else {
            array[0] = (e.target.value)
        }
        this.setState({
            cons: array,
            text: e.target.value    
        })
    }

    render(){
        return(
            <div>
                <div>1</div>
                <input type="text" onChange={this.newConsChange} value={this.state.cons[0]}/>
                {this.state.cons.map((pro, index) => 
                <div key={index}>
                    <div>{index+2}</div>
                    <input name={index+1} type="text" onChange={this.consChange} value={this.state.cons[index+1]}/>
                </div>
                )}
            </div>          
        )
    }
}

export default Input