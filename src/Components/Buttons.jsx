import React from 'react';

class MyButtons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeButton: null
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(id) {
      this.setState({ activeButton: id });
    }
  
    render() {
      return (
        <div>
          <button className='duit'
            style={this.state.activeButton === 1 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(1)}
          >
            10.000
          </button>
          <button className='duit'
            style={this.state.activeButton === 2 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(2)}
          >
            20.000
          </button>
          <button className='duit'
            style={this.state.activeButton === 3 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(3)}
          >
            50.000
          </button>
          <button className='duit'
            style={this.state.activeButton === 4 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(4)}
          >
            75.000
          </button>
          <button className='duit'
            style={this.state.activeButton === 5 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(5)}
          >
            100.000
          </button>
          <button className='duit'
            style={this.state.activeButton === 6 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(6)}
          >
            125.000
          </button>
          <button className='duit'
            style={this.state.activeButton === 7 ? { backgroundColor: '#009EFF', color: "white" } : {}}
            onClick={() => this.handleClick(7)}
          >
            150.000
          </button>
        </div>
      );
    }
  }


export default MyButtons;
