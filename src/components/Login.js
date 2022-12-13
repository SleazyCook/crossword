import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form>
        <label>Username:</label>
        <input type="text"></input>
        <br />
        <label>Password:</label>
        <input type="password"></input>
        <br />
        <button>Login</button>
        <br />
        <Link to="/register">Click here to register</Link>
      </form>
    </div>
  )
};

export default Login;