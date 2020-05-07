import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sound: "",
      power: true,
      powerStatus: "on",
    };
    this.handleQ = this.handleQ.bind(this);
    this.handleW = this.handleW.bind(this);
    this.handleE = this.handleE.bind(this);
    this.handleA = this.handleA.bind(this);
    this.handleS = this.handleS.bind(this);
    this.handleD = this.handleD.bind(this);
    this.handleZ = this.handleZ.bind(this);
    this.handleX = this.handleX.bind(this);
    this.handleC = this.handleC.bind(this);
    this.power = this.power.bind(this);
  }

  power() {
    this.setState((state) => ({
      power: !state.power,
    }));
    console.log(this.state.power);
    if (this.state.powerStatus === "on") {
      this.setState((state) => ({
        powerStatus: "off",
      }));
    } else if (this.state.powerStatus === "off") {
      this.setState((state) => ({
        powerStatus: "on",
      }));
    }
  }

  handleQ() {
    if (this.state.power === true) {
      document.getElementById("Q").play();
      this.setState((state) => ({
        sound: "Heater-1",
      }));
    }
  }
  handleW() {
    if (this.state.power === true) {
      document.getElementById("W").play();
      this.setState((state) => ({
        sound: "Heater-2",
      }));
    }
  }
  handleE() {
    if (this.state.power === true) {
      document.getElementById("E").play();
      this.setState((state) => ({
        sound: "Heater-3",
      }));
    }
  }
  handleA() {
    if (this.state.power === true) {
      document.getElementById("A").play();
      this.setState((state) => ({
        sound: "Heater-4",
      }));
    }
  }
  handleS() {
    if (this.state.power === true) {
      document.getElementById("S").play();
      this.setState((state) => ({
        sound: "Clap",
      }));
    }
  }
  handleD() {
    if (this.state.power === true) {
      document.getElementById("D").play();
      this.setState((state) => ({
        sound: "Open-HH",
      }));
    }
  }
  handleZ() {
    if (this.state.power === true) {
      document.getElementById("Z").play();
      this.setState((state) => ({
        sound: "Kick-n'-Hat",
      }));
    }
  }
  handleX() {
    if (this.state.power === true) {
      document.getElementById("X").play();
      this.setState((state) => ({
        sound: "Kick",
      }));
    }
  }
  handleC() {
    if (this.state.power === true) {
      document.getElementById("C").play();
      this.setState((state) => ({
        sound: "Closed-HH",
      }));
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 81) {
        this.handleQ();
      } else if (event.keyCode === 87) {
        this.handleW();
      } else if (event.keyCode === 69) {
        this.handleE();
      } else if (event.keyCode === 65) {
        this.handleA();
      } else if (event.keyCode === 83) {
        this.handleS();
      } else if (event.keyCode === 68) {
        this.handleD();
      } else if (event.keyCode === 90) {
        this.handleZ();
      } else if (event.keyCode === 88) {
        this.handleX();
      } else if (event.keyCode === 67) {
        this.handleC();
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div id="drum-machine" style={{ "margin-left": 100 }}>
        <a className="drum-pad" id="Heater-1" onClick={this.handleQ}>
          Q
          <audio
            src="../Audio-Files/Heater-1.mp3"
            id="Q"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Heater-2" onClick={this.handleW}>
          W
          <audio
            src="../Audio-Files/Heater-2.mp3"
            id="W"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Heater-3" onClick={this.handleE}>
          E
          <audio
            src="../Audio-Files/Heater-3.mp3"
            id="E"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Heater-4" onClick={this.handleA}>
          A
          <audio
            src="../Audio-Files/Heater-4_1.mp3"
            id="A"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Clap" onClick={this.handleS}>
          S
          <audio
            src="../Audio-Files/Clap.mp3"
            id="S"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Open-HH" onClick={this.handleD}>
          D
          <audio
            src="../Audio-Files/Open-HH.mp3"
            id="D"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Kick-n'-Hat" onClick={this.handleZ}>
          Z
          <audio
            src="../Audio-Files/Kick-n-Hat.mp3"
            id="Z"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Kick" onClick={this.handleX}>
          X
          <audio
            src="../Audio-Files/Kick.mp3"
            id="X"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>
        <a className="drum-pad" id="Closed-HH" onClick={this.handleC}>
          C
          <audio
            src="../Audio-Files/Closed-HH.mp3"
            id="C"
            className="clip"
            type="audio/mp3"
          ></audio>
        </a>

        <p>Hello Drum Machine World</p>
        <p id="display">{this.state.sound}</p>

        <a onClick={this.power} className="btn btn-power">
          POWER
        </a>
        <p className="power-status">{this.state.powerStatus}</p>
      </div>
    );
  }
}

export default App;
