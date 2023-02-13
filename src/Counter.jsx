import React from "react";
import attack from './images/attack.png';
import defend from './images/defend.png';

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = {
      count: 0,
      gameStatus: undefined,
      lastPlay: undefined
    }
  }

  async handleAttack(){
    await this.setState({count: this.state.count + Math.round(Math.random() * 10)}); 
    if(this.state.count >= 10)
    {
      await this.setState({gameStatus: "You Won!"});
    }
    await this.setState({lastPlay: "Attack"});
  }

  async handleDefence(){
    await this.setState({count: this.state.count - Math.round(Math.random() * 10)});
    if(this.state.count <= -10)
    {
      await this.setState({gameStatus: "You Lost!"});
    }
    await this.setState({lastPlay: "Defense"});
  }

  handleRandomPlay = () =>{
    let playMode = Math.round(Math.random());
    
    if(playMode == 0)
    {
      this.handleAttack();
    }
    else{
      this.handleDefence();
    } 

    if(this.state.count <= -10)
    {
      this.setState({gameStatus: "You Lost!"});
    }
    else if(this.state.count >= 10)
    {
      this.setState({gameStatus: "You Won!"});
    }
  }

  handleReset = () => {
    this.setState({ count: 0, lastPlay: undefined, gameStatus: undefined });
  }

    render(){ 
      return(
        <div className="row text-center text-white">
          <h1>Game Score: {this.state.count}</h1>
          <p>you will win at +10 points and lose at -10 points!</p>
          <p>Last Play: {this.state.lastPlay}</p>
          <h3>Game gameStatus: {this.state.gameStatus}</h3>
          <div className="col6 col-md-3 offset-md-3">
            <img style={{width: "100%", cursor:"pointer", border:"1px solid green"}} className="p-4 rounded" src={attack} onClick={this.handleAttack}/>
          </div>
          <div className="col6 col-md-3 offset-md-3">
            <img style={{width: "100%", cursor:"pointer", border:"1px solid red"}} className="p-4 rounded" src={defend} onClick={this.handleDefence}/>
          </div> 
          <div className="col-12 col-md-4 offset-md-4">
            <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play</button>
            <br/>
            <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset</button>
          </div>
        </div>
      );
      }
  }

  export default  Counter;