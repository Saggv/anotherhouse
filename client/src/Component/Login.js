import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram,faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LoginAction, CloseLogin, SignUpAction} from "../Action/User";
import {ClearError} from "../Action/Error";
function Login(){
    const [isLogin, setIsLogin] =useState(false);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const {error} = useSelector(state=>state.User);
    const onChangeName =(e)=>{
        setName(e.target.value);
    }
    const onChangeUserName =(e)=>{
        setUserName(e.target.value);
        if(error){
            dispatch(ClearError())
        }
    }
    const onChangePassword =(e)=>{
        setPassword(e.target.value);
        if(error){
            dispatch(ClearError())
        }
    }
    const switchLogin=()=>{
        setIsLogin(!isLogin);
        setName("");
        setUserName("");
        setPassword("");
        if(error){
            dispatch(ClearError())
        } 
    }
    const submit = (e)=>{
        e.preventDefault();
        const payload ={name, userName, password};
        if(userName===""|| password===""){
          return alert("Please enter all field !")
        }
        if(isLogin){
           return dispatch(LoginAction(payload));
        }
        else{
            return dispatch(SignUpAction(payload));
        }
    }
    return(
        <div className="login">
            <div className="login__header">
                <div className="login__title">
                    <h2>{isLogin ? "LOGIN":"SIGN UP"}</h2>
                </div>
                <div className="login__header__icon">
                    <FontAwesomeIcon icon={faTimes} className="login__icon" onClick={()=>dispatch(CloseLogin())}></FontAwesomeIcon>
                </div>
            </div>
            <div className="login__body">
                <div className="login__media">
                    <FontAwesomeIcon icon={faGoogle} className="login__media__icon"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faFacebook} className="login__media__icon"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faInstagram} className="login__media__icon"></FontAwesomeIcon>
                </div>
                <div className="login__border">
                    <div className="login__border__line"></div>
                    <h5>Login with</h5>
                    <div className="login__border__line"></div>
                </div>
                <form className="form" onSubmit={(e)=>submit(e)}>
                    {error ? <h2>{error}</h2>:null}
                    {isLogin ? null : <input type="text" value={name} placeholder="Your name..." onChange={(e)=>onChangeName(e)} />}
                    <input type="text" value={userName} placeholder="Your user name..." onChange={(e)=>onChangeUserName(e)}  />
                    <input type="password" value={password} placeholder="Your password..." onChange={(e)=>onChangePassword(e)}  />
                    <div className="textalign-center">
                        <button type="submit" className="btn__submit">{isLogin ? "LOGIN":"SIGN UP"}</button>
                    </div>
                </form>
                <div className="login__switch">
                    <p>I already have an account for this !!! <Link to="#" onClick={()=>switchLogin()}>{isLogin ? "Sign up":"Login"}</Link></p>
                </div>
            </div>
        </div>
    );
}
export default Login;