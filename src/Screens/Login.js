import React,{useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../assets/css/style.css'
import {Link} from "react-router-dom";

const Login = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [detailsUser, setDetailsUser] = useState([]);
    const handleChangeEmail=(event)=>{
        setEmail(event.target.value)
    }
    const handleChangePassword=(event)=>{
        setPassword(event.target.value)
    }
    const performLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                'http://3.97.166.213:81/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        _email: email,
                        _password: password
                    }),
                },
            );
            const data= await response.json();
            console.log(data);
            if (
                data != 'Invalid Credentials' &&
                data != 'Oops! could not connect at the moment' &&
                data != "Sorry, There's something wrong"
            ) {
                alert('Validated successfully');
                localStorage.setItem('UserId', data[0].id.toString());
                localStorage.setItem('email', data[0].email.toString());
                history.push('/user/AllNurse')
            } else {
                alert('Invalid Credentials');
            }

        } catch (error) {
           alert(error);
            alert('something went wrong');
        }
    };

  return(
    <div>
      <Header/>
        <section className="sptb">
            <div className="container customerpage">
                <div className="row">
                    <div className="single-page">
                        <div className="col-lg-5 col-xl-4 col-md-6 d-block mx-auto">
                            <div className="wrapper wrapper2">


                                    <form id="login" className="card-body" tabIndex="500"  onSubmit={(e)=>performLogin(e)}>
                                        <div className="mail">
                                            <input type="email" name="mail" value={email} onChange={handleChangeEmail}/>
                                                <label>Email</label>
                                        </div>
                                        <div className="passwd">
                                            <input type="password" name="password" value={password} onChange={handleChangePassword}/>
                                                <label>Password</label>
                                        </div>
                                        <div className="submit">
                                            <input type="submit"  value={"Login"}/>

                                        </div>
                                        <p className="mb-2"><a href="forgot.html">Forgot Password</a></p>
                                        <p className="text-dark mb-0">Don't have account? <Link to={"/signup"}>Sign UP</Link></p>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <Footer/>

    </div>
  );
}

export  default Login;