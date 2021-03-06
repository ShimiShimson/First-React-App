import React from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  date: Date;
}

class Clock extends React.Component {
  state: Readonly<State> = { date: new Date() };
  timerId!: NodeJS.Timeout;

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    console.log(this.timerId)
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

function UserInfo(props: any) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Avatar(props: any) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function Comment(props: any) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date.toLocaleDateString()}
      </div>
      <Clock />
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function Welcome(props: any) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
        <Welcome name="Bartek" />
        <Welcome name="Szymon" />
        <Welcome name="Dawid" />
      </header>
    </div>
  );
}

export default App;
