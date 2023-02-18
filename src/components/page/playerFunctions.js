import React from "react";

export default playerFunctions = () => {
  exporthandlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  //   handleStop = () => {
  //     this.setState({ url: null, playing: false })
  //   }

  //   handleToggleControls = () => {
  //     const url = this.state.url
  //     this.setState({
  //       controls: !this.state.controls,
  //       url: null
  //     }, () => this.load(url))
  //   }

  //   handleToggleLight = () => {
  //     this.setState({ light: !this.state.light })
  //   }

  //   handleToggleLoop = () => {
  //     this.setState({ loop: !this.state.loop })
  //   }

  //   handleVolumeChange = e => {
  //     this.setState({ volume: parseFloat(e.target.value) })
  //   }

  //   handleToggleMuted = () => {
  //     this.setState({ muted: !this.state.muted })
  //   }

  //   handleSetPlaybackRate = e => {
  //     this.setState({ playbackRate: parseFloat(e.target.value) })
  //   }

  //   handleOnPlaybackRateChange = (speed) => {
  //     this.setState({ playbackRate: parseFloat(speed) })
  //   }

  //   handleTogglePIP = () => {
  //     this.setState({ pip: !this.state.pip })
  //   }

  //   handlePlay = () => {
  //     console.log('onPlay')
  //     this.setState({ playing: true })
  //   }

  //   handleEnablePIP = () => {
  //     console.log('onEnablePIP')
  //     this.setState({ pip: true })
  //   }

  //   handleDisablePIP = () => {
  //     console.log('onDisablePIP')
  //     this.setState({ pip: false })
  //   }

  //   handlePause = () => {
  //     console.log('onPause')
  //     this.setState({ playing: false })
  //   }

  //   handleSeekMouseDown = e => {
  //     this.setState({ seeking: true })
  //   }

  //   handleSeekChange = e => {
  //     this.setState({ played: parseFloat(e.target.value) })
  //   }

  //   handleSeekMouseUp = e => {
  //     this.setState({ seeking: false })
  //     this.player.seekTo(parseFloat(e.target.value))
  //   }

  //   handleProgress = state => {
  //     console.log('onProgress', state)
  //     // We only want to update time slider if we are not currently seeking
  //     if (!this.state.seeking) {
  //       this.setState(state)
  //     }
  //   }

  //   handleEnded = () => {
  //     console.log('onEnded')
  //     this.setState({ playing: this.state.loop })
  //   }

  //   handleDuration = (duration) => {
  //     console.log('onDuration', duration)
  //     this.setState({ duration })
  //   }

  //   handleClickFullscreen = () => {
  //     screenfull.request(findDOMNode(this.player))
  //   }

  //   renderLoadButton = (url, label) => {
  //     return (
  //       <button onClick={() => this.load(url)}>
  //         {label}
  //       </button>
  //     )
  //   }
};

//export default playerFunctions;
