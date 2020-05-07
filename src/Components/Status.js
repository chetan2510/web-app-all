import React, {Component} from "react";
import soundFile from '../resources/audio/alertSound.wav'

class Status extends Component {

    state = {
        "o2a_variables": {

            "XFRAStatus": "Online",
            "T7Status": "Online",
            "GmcVersion": "081.390.000",
            "bunny_XFRA": "081.003.090",
        }
    }

    // Method to call backend
    componentDidMount() {


        // Make a backend call here and update the state ~ use axios for that

        // when ever some status is down the sound will be played
        if(!(this.state.o2a_variables.T7Status === "Online") || !(this.state.o2a_variables.XFRAStatus === "Online")) {
            let audio = new Audio(soundFile);
            audio.play();
        }

    }

    getStyleForTextT7 = () => {
        return {
            textAlign: "center",
            color: this.state.o2a_variables.T7Status === "Online"? "#008000" : "#FF0000"
        }
    }

    getStyleForTextXFRA = () => {
        return {
            textAlign: "center",
            color: this.state.o2a_variables.XFRAStatus === "Online"? "#008000" : "#FF0000"
        }
    }

    getStyleForText = () => {
        return {
            textAlign: "center",
            color: "#fbfbff",
            padding: "10px",
            borderBottom: "1px #ccc dotted"
        }
    }

    styleForDiv = () => {
        return {
            backgroundColor: "black"
        }
    }




    // Shows the status of the systems like XRFA, T7 etc
    render() {
        return (
            <div style={this.styleForDiv()}>

                {/* This is for T7 */}
                <h1 style={this.getStyleForTextT7()}> T7 STD: {this.state.o2a_variables.T7Status} </h1>
                <div style={this.getStyleForText()}>
                    <h6>BE: {this.state.o2a_variables.bunny_XFRA}</h6>
                    <h6>GMC: {this.state.o2a_variables.GmcVersion}</h6>
                    <h6>Bunny: {this.state.o2a_variables.GmcVersion}</h6>
                </div>

                {/* This  is for XFRA status*/}
                <h1 style={this.getStyleForTextXFRA()}> T7 XFRA: {this.state.o2a_variables.XFRAStatus} </h1>
                <div style={this.getStyleForText()}>
                    <h6>BE: {this.state.o2a_variables.bunny_XFRA}</h6>
                    <h6>GMC: {this.state.o2a_variables.GmcVersion}</h6>
                    <h6>Bunny: {this.state.o2a_variables.GmcVersion}</h6>
                </div>
            </div>


        )
    }
}

export default Status