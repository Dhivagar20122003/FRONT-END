import React,{Component} from 'react';
import './Sign.css'
import axios from 'axios'

class ValidatingForm extends Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
            username:'',
            email:'',
            password:''
        };
    }
    
    handleIdChange=(event)=>{
        this.setState({id:event.target.value})
    };
    handleUserNameChange=(event)=>{
        this.setState({username:event.target.value})
    };
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value})
    };
    handlePasswordChange=(event)=>{
        this.setState({password:event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.state.id,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        
        axios.post('http://127.0.0.1:8083/post', data)
    }

    render(){
    return (<>
      <div className='q'>
        <center>
        <div className='container'>
            
        <form onSubmit={this.handleSubmit}>
            <h1>Registration Form</h1>
            
            <div className='row'>
                <label>Id : </label><br></br>
                <input type="number" id='id' placeholder='  Enter your Id...' value={this.state.id}
                    onChange={this.handleIdChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.id}</p> */}

            <div className='row'>
                <label>Username : </label><br></br>
                <input type="text" id='userName' placeholder='  Enter your Username...' value={this.state.username}
                    onChange={this.handleUserNameChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.username}</p> */}

            <div className='row'>
                <label>E-mail : </label><br></br>
                <input type="email" id='email' placeholder='  Enter your Email-id...' value={this.state.email}
                    onChange={this.handleEmailChange}/>
            </div>
            {/* <p  style={{color:"red"}}>{formErrors.email}</p> */}

            <div className='row'>
                <label>Password : </label><br></br>
                <input type="password" id='password' placeholder='  Enter the Password...' value={this.state.password}
                    onChange={this.handlePasswordChange}/>
            </div>
            
            {/* <p  style={{color:"red"}}>{formErrors.password}</p> */}
            <br></br>

            <div className='row'>
                <button className='btn btn-primary'>Login</button>
            </div>
        </form>
        </div></center>
        </div>
        </>
     );
    }
}

export default ValidatingForm