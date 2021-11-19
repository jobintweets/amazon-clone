import React ,{ useState }from 'react'
import './Login.css';
import { Link ,useHistory} from 'react-router-dom';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";


import { db,auth } from './firebase';



 function Login() {
     const history = useHistory();
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
     const signIn = (e) => {
         e.preventDefault();
         signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
      const user = userCredential.user.email;
      console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
  });

   
    }

     const register = (e) => {
      
         e.preventDefault();
       
         createUserWithEmailAndPassword( auth , email, password).then((credential) => {
             if (credential) {
                 history.push('/');
            }
         }).catch((error) => {
             alert(error.message);
         })
      
    }

    return (
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="logo" />

            </Link>
            <div className="login__card">
                <h1>Sign In</h1>
                <form >
                    <h5>Email</h5>
                    <input value={email} type="email"  onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input value={password} type="password"  onChange={e => setPassword(e.target.value)} />
                    <button className ="login__signInButton" onClick={signIn}>Login</button>
                </form>
              <p>
                    By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton" onClick={register}>SignUp</button>
            </div>
        </div>
    )
}

export default Login
