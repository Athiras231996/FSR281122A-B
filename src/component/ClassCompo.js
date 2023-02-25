import React from 'react'
import {Component} from 'react'

class ClassCompo extends Component{
    constructor(props){
super(props)
    }

    render(){
      return(
<div>
    <h3>This is my classbased</h3>
    <h2>My name is {this.props.name}</h2>
</div>
      )  ;
    }
}

export default ClassCompo;