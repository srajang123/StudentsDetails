import React,{Component} from 'react';
import Row from './Row';
export default class List extends Component
{
    constructor(props){
        super(props);
        console.log(this.props);
    }

    showStudents=()=>
        this.props.studs.map(item=>
                <Row data={item}/>
        );

    render=()=>
    <div className="show-students">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Roll Number</th>
                </tr>
            </thead>
                <tbody>
                    {this.showStudents()}
                </tbody>
        </table>
    </div>
}
