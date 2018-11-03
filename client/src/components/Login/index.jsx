import React, { Component } from 'react';
import './login.scss';

export default class Login extends Component {
  constructor() {
    super();


    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: ''
    }
  } 
  // async onSubmit() {
  //   this.setState({
  //     usernameError: '',
  //     passwordError: ''

  //   })

  //   const { username, password } = this.state;
    
  //   const response = await this.props.mutate({
  //     variables: { username, password },
  //   })

  //   const { ok, errors } = response.data.register;

  //   if (ok) {
  //     this.props.history.push('/');
  //   } else {
  //     const err = {};
  //     errors.forEach(({path, message}) => {
  //       err[`${path}Error`] = message;
  //       // err['passwordError'] = 'too long..';
  //     });
  //     this.setState(err);
  //     console.log(err)
  //   }
  //   console.log(response);
  // }

  // onChange(e) {
  //   const {name, value} = e.target;
  //   this.setState({ [name]: value });
  // }

  render() {
    const { username, password, usernameError, passwordError } = this.state;

    return (
      <div id="login">
        <h1>Login</h1>
        <form className="mailbox" >
          <textarea 
            className="input"
            placeholder="userID"
            name="username"
            onChange={this.onChange}>
          </textarea>
          <textarea 
            className="input"
            placeholder="password"
            name="password" 
            onChange={this.onChange}>
          </textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
      {/* <Container text>
          <Header as="h2">Login</Header>
          <Input error={!!usernameError} name="username" onChange={e => this.onChange(e)} value={username} placeholder="Username" fluid/>
          <Input error={!!passwordError} name="password" onChange={e => this.onChange(e)} value={password} type="password" placeholder="Password" fluid/>
          <Button onClick={this.onSubmit}>Submit</Button>
          {usernameError || passwordError ? 
          <Message error header="There was some errors with your submission" list={errorList} 
          /> : null }
        </Container> */}