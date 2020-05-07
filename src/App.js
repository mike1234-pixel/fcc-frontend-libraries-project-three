import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      power: true,
      powerStatus: "on",
      sliderVal: 1,
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
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  adjustVolume(e) {
    this.setState({
      sliderVal: e.target.value,
      display: "Volume: " + Math.round(e.target.value * 100),
    });

    console.log(this.state.sliderVal);
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
      let audio = document.getElementById("Q");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-1",
      }));
    }
  }
  handleW() {
    if (this.state.power === true) {
      let audio = document.getElementById("W");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-2",
      }));
    }
  }
  handleE() {
    if (this.state.power === true) {
      let audio = document.getElementById("E");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-3",
      }));
    }
  }
  handleA() {
    if (this.state.power === true) {
      let audio = document.getElementById("A");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-4",
      }));
    }
  }
  handleS() {
    if (this.state.power === true) {
      let audio = document.getElementById("S");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Clap",
      }));
    }
  }
  handleD() {
    if (this.state.power === true) {
      let audio = document.getElementById("D");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Open-HH",
      }));
    }
  }
  handleZ() {
    if (this.state.power === true) {
      let audio = document.getElementById("Z");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Kick-n'-Hat",
      }));
    }
  }
  handleX() {
    if (this.state.power === true) {
      let audio = document.getElementById("X");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Kick",
      }));
    }
  }
  handleC() {
    if (this.state.power === true) {
      let audio = document.getElementById("C");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Closed-HH",
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
        <p id="display">{this.state.display}</p>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={this.state.sliderVal}
          onChange={this.adjustVolume}
        ></input>

        <br></br>
        <a onClick={this.power} className="btn btn-power">
          POWER
        </a>
        <p className="power-status">{this.state.powerStatus}</p>
      </div>
    );
  }
}

export default App;
