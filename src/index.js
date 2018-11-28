import React from 'react';
import ReactDOM from 'react-dom';

export class FirstComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div> ali erenkara </div>
    }
}

ReactDOM.render(<FirstComponent/>, document.getElementById("container"));