import React from 'react';
import ReactDOM from 'react-dom';

class Father extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            age:15,
            name:lisa
        }
    }
    render(){
        return(
            <div>
                <h1>name:{this.state.name}</h1>
                <p>age:{this.state.age}</p>
            </div>
        )
    }
}

class Child extends React.Component{
    render(){
        return(
            <div>

            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Father/>
    </div>,
    document.getElementById('app')
)