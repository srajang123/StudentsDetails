import React,{Component} from 'react';

export default class Row extends Component
{
    constructor(props)
    {
        super(props);
        console.log('this');
    }
    render=()=>
    <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.Branch}</td>
        <td>{this.props.data.roll}</td>
    </tr>
}
