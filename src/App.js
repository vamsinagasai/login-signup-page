import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeForm: 'login-form'
    };
  }

  showTab = (tabId) => {
    this.setState({ activeForm: tabId });
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  }

  handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Lost &amp; Found</h1>

        <div className="tabs">
          <button
            className={`tab-btn ${this.state.activeForm === 'login-form' ? 'active' : ''}`}
            onClick={() => this.showTab('login-form')}
          >
            Sign In
          </button>
          <button
            className={`tab-btn ${this.state.activeForm === 'signup-form' ? 'active' : ''}`}
            onClick={() => this.showTab('signup-form')}
          >
            Sign Up
          </button>
        </div>

        <form
          id="login-form"
          className={`form ${this.state.activeForm === 'login-form' ? 'active' : ''}`}
          onSubmit={this.handleLoginSubmit}
        >
          <h2>Sign In</h2>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
        </form>

        <form
          id="signup-form"
          className={`form ${this.state.activeForm === 'signup-form' ? 'active' : ''}`}
          onSubmit={this.handleSignUpSubmit}
        >
          <h2>Sign Up</h2>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Reg No" required />
          <input type="text" placeholder="Phone" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default App;
