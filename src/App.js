import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "Drum Machine",
      power: true,
      powerStatus: "on",
      sliderVal: 1,
      bank: "Bank 1",
      backgroundClass: "heater",
      buttonClass: "drum-pad",
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
    this.setBank = this.setBank.bind(this);
  }

  setBank() {
    if (this.state.bank === "Bank 1") {
      this.setState({
        bank: "Bank 2",
        display: "Smooth Piano Kit",
        backgroundClass: "piano",
        buttonClass: "drum-pad-inverse",
      });
    } else if (this.state.bank === "Bank 2") {
      this.setState({
        bank: "Bank 1",
        display: "Heater Kit",
        backgroundClass: "heater",
        buttonClass: "drum-pad",
      });
    }
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
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("Q");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-1",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("Q-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Chord-1",
      }));
    }
  }

  handleW() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("W");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-2",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("W-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Chord-2",
      }));
    }
  }

  handleE() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("E");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-3",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("E-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Chord-3",
      }));
    }
  }

  handleA() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("A");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Heater-4",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("A-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Shaker",
      }));
    }
  }

  handleS() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("S");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Clap",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("S-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Open-HH",
      }));
    }
  }

  handleD() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("D");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Open-HH",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("D-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Closed-HH",
      }));
    }
  }
  handleZ() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("Z");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Kick-n'-Hat",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("Z-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Punchy Kick",
      }));
    }
  }
  handleX() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("X");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Kick",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("X-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Side Stick",
      }));
    }
  }
  handleC() {
    if (this.state.power === true && this.state.bank === "Bank 1") {
      let audio = document.getElementById("C");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Closed-HH",
      }));
    } else if (this.state.power === true && this.state.bank === "Bank 2") {
      let audio = document.getElementById("C-2");
      audio.volume = this.state.sliderVal;
      audio.play();
      this.setState((state) => ({
        display: "Snare",
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
      <div id="drum-machine" className={this.state.backgroundClass}>
        <div className="sound-button-container">
          {/* Q BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Heater-1"
            onClick={this.handleQ}
          >
            Q
            <audio
              src={require("./Audio-Files/Heater-1.mp3")}
              id="Q"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Chord-1.mp3")}
              id="Q-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* W BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Heater-2"
            onClick={this.handleW}
          >
            W
            <audio
              src={require("./Audio-Files/Heater-2.mp3")}
              id="W"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Chord-2.mp3")}
              id="W-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* E BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Heater-3"
            onClick={this.handleE}
          >
            E
            <audio
              src={require("./Audio-Files/Heater-3.mp3")}
              id="E"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Chord-3.mp3")}
              id="E-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* A BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Heater-4"
            onClick={this.handleA}
          >
            A
            <audio
              src={require("./Audio-Files/Heater-4_1.mp3")}
              id="A"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Shaker.mp3")}
              id="A-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* S BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Clap"
            onClick={this.handleS}
          >
            S
            <audio
              src={require("./Audio-Files/Clap.mp3")}
              id="S"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Open-HH-2.mp3")}
              id="S-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* D BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Open-HH"
            onClick={this.handleD}
          >
            D
            <audio
              src={require("./Audio-Files/Open-HH.mp3")}
              id="D"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Closed-HH-2.mp3")}
              id="D-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* Z BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Kick-n'-Hat"
            onClick={this.handleZ}
          >
            Z
            <audio
              src={require("./Audio-Files/Kick-n-Hat.mp3")}
              id="Z"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Punchy-Kick.mp3")}
              id="Z-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* X BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Kick"
            onClick={this.handleX}
          >
            X
            <audio
              src={require("./Audio-Files/Kick.mp3")}
              id="X"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Side-Stick.mp3")}
              id="X-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
          {/* C BUTTON */}
          <button
            className={this.state.buttonClass}
            id="Closed-HH"
            onClick={this.handleC}
          >
            C
            <audio
              src={require("./Audio-Files/Closed-HH.mp3")}
              id="C"
              className="clip"
              type="audio/mp3"
            ></audio>
            <audio
              src={require("./Audio-Files/Snare.mp3")}
              id="C-2"
              className="clip"
              type="audio/mp3"
            ></audio>
          </button>
        </div>

        <p id="display">{this.state.display}</p>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={this.state.sliderVal}
          onChange={this.adjustVolume}
          className="volume-slider"
        ></input>

        <br></br>
        <div className="control-button-container">
          <button onClick={this.power} className={this.state.buttonClass}>
            Power
          </button>
          <button onClick={this.setBank} className={this.state.buttonClass}>
            Mode
          </button>
        </div>
        <p className="power-status">{this.state.powerStatus}</p>
        <p className="footnote">Designed and built by Michael Tandy</p>
      </div>
    );
  }
}

export default App;
