import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Adel Emad",
        bio: "A human",
        imgSrc: "./img/unk.png",
        profession: "Student",
      },
      show: false,
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  ShowFunc = () => {
    if (this.state.show) {
      this.setState({
        show: false,
        counter: 0,
      });
    } else {
      this.setState({
        show: true,
      });
    }
  };

  ShowOrNo = () => {
    if (this.state.show) {
      return (
        <div>
          <h1>{this.state.Person.fullName}</h1>
          <p>{this.state.Person.bio}</p>
          <img src={this.state.Person.imgSrc} alt="Profile" />
          <p>{this.state.Person.profession}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.ShowFunc}>Show</button>
        {this.ShowOrNo()}
        <h1>Counter: {this.state.counter} seconds</h1>
      </div>
    );
  }
}

export default App;
