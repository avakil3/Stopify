import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='sign-up-errors' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(){
    const demoUser = {
      username: "Demo",
      password: 'password'
    }
    this.props.login(demoUser);
  }

  render() {
    return (
      <div className="session-form-container">
         <div className="logo-wrapper">
          <img src={window.blackLogoURL} alt="logo-black" id='logo-black'/>
         </div>
        <h1>{this.props.formType==='signup'? "Sign up for free to start listening.": "To continue, log in to Stopify."}</h1>

        <button className='demo-btn' onClick={ () => this.demoLogin() }>Continue with demo</button>

        <div className='divider'>
              <strong className='divider-title'>OR</strong>
        </div>

        <h3>{this.props.formType ==='signup' ? "Sign up with your email address" : ""}</h3>
        <form onSubmit={this.handleSubmit} className="form-box">
          <br/>
          
          <div className="form-elements">
            <br/>
            <label className='form-input-titles'><strong>{this.props.formType ==='signup' ? "What should we call you?" : "Username"}</strong>
              <input type="text"
               placeholder="Enter your username."
                value={this.state.username}
                onChange={this.update('username')}
                className="form-input"
              />
            </label>
            <br/>
            {
             this.props.formType ==='signup' ?   
             <label className='form-input-titles'>What's your email?
                    <input type="text"
                        placeholder="Enter your email."
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="form-input"
                    />
             </label> 
             : ""
            }
            <br/>

            <label className='form-input-titles'>Password
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
                placeholder="Enter a password."
              />
            </label>
            <br/>
            {this.renderErrors()}
            {
             this.props.formType ==='signup' ? 
             <div >  
                <p className="terms-and-conditions">By clicking on sign-up, you agree to Stopify's Terms and Conditions of Use.</p>
                <br/>
                <p className="terms-and-conditions">To learn more about how Stopify collects, uses, shares and protects your personal data, please see Stopify's Privacy Policy.</p>
              </div>
              : ""
            }


            <input type="submit" className="session-submit" 
            value={this.props.formType ==='signup' ? "Sign Up" : "Log In" } />
          </div>
        </form>
        {
             this.props.formType ==='signup' ?   
            <p className='form-redirect'> Have an account? {<Link to='/login'>Log in.</Link>}</p>
              : <p className='form-redirect'> Don't have an account? {<Link to='/signup'>Sign up.</Link>}</p>
            }

      </div>
    );
  }
}

export default withRouter(SessionForm);
