import React, { PureComponent } from 'react'

class Input extends PureComponent{
    constructor(){
        super()
        this.state = {
            pros: [],
            text: '',
            newText: ''
        }

    }

    prosChange = (e) => {

        var array = this.state.pros.slice();
        if(e.target.value.length === 0){
            array.splice(e.target.name, 1)
        }
        else{
            array[e.target.name] = e.target.value;
            
        }
        this.setState({
            pros: array,
            text: e.target.value
        })
        console.log(this.state.pros)
        
        
    }

    newProsChange = (e) => {
        
        var array = this.state.pros.slice();
        if(e.target.value.length === 0){
            array.splice(0, 1)
        }
        else {
            array[0] = (e.target.value)
        }
        this.setState({
            pros: array,
            text: e.target.value    
        })
    }

    render(){
        return(
            <div>
                <div>1</div>
                <input type="text" onChange={this.newProsChange} value={this.state.pros[0]}/>
                {this.state.pros.map((pro, index) => 
                <div key={index}>
                    <div>{index+2}</div>
                    <input name={index+1} type="text" onChange={this.prosChange} value={this.state.pros[index+1]}/>
                </div>
                )}
            </div>          
        )
    }
}

export default Input