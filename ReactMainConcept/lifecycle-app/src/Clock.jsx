import React from "react";

const lists = ["BMW", "Toyota", "Honda"];
const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists);
    }, 1000);
  });
};
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: { created: new Date().toLocaleTimeString() },
      seconds: {
        created: new Date().getSeconds(),
      },
    };
    this.date = "22/08/2023";
    this.getTime = this.getTime.bind(this);
  }
  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
      listsL: [],
      darkMode: false,
    };
    this.setState(newState);
  };
  toggleDarkMode = () => {
    this.setState((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };
  //   componentDidMount
  componentDidMount() {
    const seconds = document.getElementById("seconds");
    console.log(seconds);
    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res,
      }))
    );
  }

  //   componentDidUpdate
  componentDidUpdate() {
    // if (this.state.darkMode) {
    //   const value = document.querySelector("input").value;
    //   console.log(value);
    // }

    if (this.state.length === 0) {
      fetchApi().then((res) =>
        this.setState((prevState) => ({
          ...prevState,
          lists: res,
        }))
      );
    }
  }
  render() {
    return (
      <div>
        <h1>Hello everybody</h1>

        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <h3>{this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.toggleDarkMode}>Toggle</button>
        {this.state.darkMode && (
          <input value={this.state.darkMode} type="text" />
        )}
      </div>
    );
  }
}
