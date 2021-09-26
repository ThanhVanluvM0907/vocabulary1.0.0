import React from 'react';
import './App.css';
import MicRecorder from 'mic-recorder-to-mp3';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
      startStyle: {display: 'block'},
      stopStyle: {display: 'none'},
      audioStyle: {display: 'none'},
      offStyle: {display: 'none', marginLeft: '4px'}
    };
  }

  start = () => {
      this.setState(()=>{
        return {
          startStyle: {display: 'none'},
          stopStyle: {display: 'block'}
        }
      }
    )
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    this.setState(()=>{
      return {
        startStyle: {display: 'block'},
        stopStyle: {display: 'none'},
        audioStyle: {display: 'block'},
        offStyle: {display: 'block'},
    }
    }
  )
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
        <div className="App">
          <span>
          <button id={this.props.idRec} onClick={this.start} 
          style={this.state.startStyle} className="record-btn"
          disabled={this.state.isRecording}>
            Ghi âm từ<i className="fas fa-microphone"></i>
          </button>
          <button id={this.props.idStop} onClick={this.stop} style={this.state.stopStyle}
           className="stop-btn" disabled={!this.state.isRecording} >
             Dừng ghi <i className="fas fa-stop"></i>
             </button>
             </span>
          <div className="audioRec">
          <audio className="audioR" id={this.props.idAudio}
          style={this.state.audioStyle}
          src={this.state.blobURL} autoPlay="audioplay" controls/>
          <span className="offrecord" style={this.state.offStyle} onClick={
            ()=>{
              this.setState({
                audioStyle: {display: 'none'},
                offStyle: {display: 'none'},
              })
            }
          }>Đóng audio</span>
          </div>
      </div>
    );
  }
}

export default App;