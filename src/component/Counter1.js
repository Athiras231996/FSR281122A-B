import {react,Component} from 'react'

class Counter1 extends Component{

    constructor(props){
        super(props);
        this.state={
            count:0
        };
    }
    render(){
return(<div>
<h3>Class component</h3>
<button onClick={()=>this.setState({count:this.state.count+1})}>counter</button> 
        <h3>{this.state.count}</h3>
        </div>
)

    }
}
export default Counter1