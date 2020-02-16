import React from 'react';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.player = React.createRef();
  }

  componentDidMount() {
    const player = this.player.current;
  }

  render() {
    return (
      <div>
        <audio ref={this.player} controls>
          <source src="/find-you.m4a" />
        </audio>
      </div>
    );
  }
}

export default Player;
