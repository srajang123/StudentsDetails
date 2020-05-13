import React,{Component} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

export default class App extends Component
{
    componentDidMount=()=>{
      document.title='Students By Srajan';
      let data=localStorage.getItem('studs');
      this.setState(data!=null?JSON.parse(data):
      {
        studs:[{
          name:'Srajan Gupta',
          Branch:'CSE',
          roll:1234567890
        },
      {
        name:'Oliver Queen',
        Branch:'CSE',
        roll:1234567891
      },
      {
        name:'Barry Allen' ,
        Branch:'IT',
        roll:1234567892
      }],
      temp:{
        name: ' ',
        Branch: ' ',
        roll: 0
      }
      }
      )
    }
    constructor(props)
    {
      super(props);
      this.state=
      {
        studs:[{
          name:'Srajan Gupta',
          Branch:'CSE',
          roll:1234567890
        },
      {
        name:'Oliver Queen',
        Branch:'CSE',
        roll:1234567891
      },
      {
        name:'Barry Allen' ,
        Branch:'IT',
        roll:1234567892
      }],
      temp:{
        name: '',
        Branch: '',
        roll: null
      }
      }
    }

    addStudent=(data)=>{
      this.setState({
        studs:[...this.state.studs,data]
      },
      ()=>localStorage.setItem('studs',JSON.stringify(this.state)));
      console.log(this.state);
    }

    render=()=>
    <div>
      <Header></Header>
      <Form callback={this.addStudent}/>
      <List studs={this.state.studs}></List>
      <Footer></Footer>
    </div>
}
