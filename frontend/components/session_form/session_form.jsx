import React from 'react';
import { withRouter } from 'react-router-dom';

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
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
         <div className="logo-wrapper">
          <img src={window.blackLogoURL} alt="logo-black" id='logo-black'/>
         </div>
        <h1>{this.props.formType==='signup'? "To continue, sign up for Stopify.": "To continue, log in to Spotify."}</h1>

        <button className='demo-btn' onClick={ () => demoLogin(demoUser) }>CONTINUE WITH DEMO</button>

        <div className='divider'>
              <strong className='divider-title'>OR</strong>
        </div>

        <form onSubmit={this.handleSubmit} className="form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label id="username-input">Username:
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
             <label>Email:
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

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="form-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
