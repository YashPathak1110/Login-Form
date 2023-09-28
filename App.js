import  React,{ useState } from "react";
import "./App.css";

function Form(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({})

    const handleSubmit =(event) =>{
        event.preventDefault();
        const validationerrors = validate();
        setErrors(validationerrors);
        if(Object.keys(validationerrors).length === 0){
            alert("Done");
        } 
    }

    const validate = () => {
        const validationerrors = {};

        if(!email){
            validationerrors.email = "Email is Required "
        } else if (/\S+@\S+\.S+/.test(email)){
            validationerrors.email = "Email is not matched";
        } else{
            validationerrors.email = "";
        }
         
    

    if(!password) {
        validationerrors.password = "Password is Required ";
    } else if (password.length < 8){
        validationerrors.password = "Password is not matched";
    } else{
        validationerrors.password = "";
    }
     return validationerrors;
}

    return(
        <div className="container">
            <div className="Form-container">
                <h2>Login Form</h2><br></br>
               <form onSubmit={handleSubmit}>
                <div className="Form-group">
                <lable htmlFor="email" >Email</lable>
                <input type="email" onChange={(e) =>setEmail(e.target.value)} ></input>
                {errors.email && <div className="error">{errors.email}</div>}

                </div><br></br>

                <div className="Form-group">
                <lable htmlFor="password">Password</lable>
                <input type="password" onChange={(e) =>setPassword(e.target.value)}></input>
                {errors.password && <div className="error">{errors.password}</div>}

                </div>

                <button type="submit" className="btn btn-secondary" >Login </button>
              </form>

              <a href="#" className="a"> Forgot Password </a>
            </div>
        </div>
    );
}
export default Form;
