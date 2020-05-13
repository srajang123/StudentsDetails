import React,{Component} from 'react';

export default class Form extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            Branch:'',
            roll:''
        }
    }
    updateName=(event)=>{
        this.setState({
            name:event.target.value
        });
    }
    updateRoll=(event)=>{
        this.setState({
            roll:event.target.value
        })
    }
    updateBranch=(event)=>{
        this.setState({
            Branch:event.target.value
        })
    }
    addStudent=()=>{
        this.props.callback(this.state);
        this.setState({
            name:'',
            roll:'',
            Branch:''
        })
    }
    render=()=>
    <div className="form ml-5">
        <div className=".container-sm ml-5 myform mt-5">
            <input type="text" className="form-control form-control-lg w-75 ml-5 mb-2" value={this.state.name} placeholder="Student Name" onChange={this.updateName}/>
            <input type="text" className="form-control form-control-lg w-75 ml-5 mb-2" value={this.state.roll} placeholder="Student Roll Number" onChange={this.updateRoll}/>
            <input type="text" className="form-control form-control-lg w-75 ml-5 mb-2" value={this.state.Branch} placeholder="Student Branch"onChange={this.updateBranch}/>
            <button className="btn btn-primary mb-5 mybtn" onClick={this.addStudent}>ADD STUDENT</button>
        </div>
    </div>
}
