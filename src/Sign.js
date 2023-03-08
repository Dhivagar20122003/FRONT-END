import { useState } from 'react';
import './Sign.css'
import { Link } from 'react-router-dom';
function ValidatingForm() {
    const initValues={username:'',email:'',password:''}
    const [formValues,setFormValues]=useState(initValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.username)
        errors.username="Username is Required";
        else if(values.username.length<5)
        errors.username="Username must have minimum 5 characters";
        else if(reg.test(values.username))
        errors.username="Username must contain only alphabets";

        if(!values.email)
        errors.email="Corrct Email-Id is Required";
        
        if(!values.password)
        errors.password="Password is Required";
        else if(!preg.test(values.password))
        errors.password="Password must contain Special Characters, a-z, A-Z, Numbers";
        return errors;

        
    }

    return (<> <body className='q'>
        <center>
        <div className='container'>
            {
                Object.keys(formErrors).length===0 && isSubmit?
                (<h1 style={{background:"green",color:"white"}}>Signed in Successfully</h1>)
                :(<pre></pre>)
            }
        <form onSubmit={handleSubmit}>
            <h1>Update Your Profile:</h1>
            
            <div className='row'>
                <label>UserName : </label><br></br>
                <input type="text" id='username' placeholder='  Enter your name...' value={formValues.username}
                    onChange={handleChange}/>
            </div><br></br>
            <p  style={{color:"red"}}>{formErrors.username}</p>

            <div className='row'>
                <label>E-mail : </label><br></br>
                <input type="email" id='email' placeholder='  Create your Email-id...' value={formValues.email}
                    onChange={handleChange}/>
            </div><br></br>
            <p  style={{color:"red"}}>{formErrors.email}</p>

            <div className='row'>
                <label>Password : </label><br></br>
                <input type="password" id='password' placeholder='  Create your Password...' 
                    onChange={handleChange}/>
            </div><br></br><br></br>
            <div className='row'>
                <label>Confirm Password : </label><br></br>
                <input type="password" id='password' placeholder='  re-enter your Password...' 
                    onChange={handleChange}/>
            </div>
            <p  style={{color:"red"}}>{formErrors.password}</p><br></br>

            <div className='row'>
                <Link to="/Booking"><button className='btn btn-primary'>Next</button></Link>
            </div>
        </form>
        </div>
        </center>
        </body>
        </>
     );
}

export default ValidatingForm