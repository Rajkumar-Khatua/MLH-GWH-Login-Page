// import { Link } from "react-router-dom";
import "./login.scss";
// import { useContext } from 'react';
// import { AuthContext } from '../../context/authContext';

const Login = () => {

//   const {login} = useContext(AuthContext);
//   const handelLogin= ()=>{
//     login();
//   }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome back 👋</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam tenetur quibusdam obcaecati corporis dolores laudantium quod neque molestias, quas error laborum officiis, provident id quia hic sapiente pariatur impedit?</p>
          <span>Don't have account yet?</span>
          {/* <Link to="/register"> */}
          <button>Register</button>
          {/* </Link> */}
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="#">
            <input type="text" placeholder="Username" required="true"/>
            <input type="password" placeholder="password" required="true"/>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login