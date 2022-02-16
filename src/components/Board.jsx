import React from "react";
import { useState } from "react";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player:1,
            win:null,
            board:[
                [null,null,null],
                [null,null,null],
                [null,null,null]
            ]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i,j){
        let copy = [...this.state.board];
        copy[i][j] =+ this.state.player==1?"O":"X";
        this.state.board = copy;
        if(this.state.player == 1){
            this.setState({player:2});
        }
        else{
            this.setState({player:1})
        }
        this.checkResult(this.state.board);
    }
    checkResult(){
        const arr = new Array(3).fill(0).map(() => new Array(3).fill(0));
        for(var i =0;i<3;i++){
            for(var j=0;j<3;j++){
                console.log(this.state.board[i][j]);
                if(this.state.board[i][j]=="X"){
                    arr[i][j]=-1;
                }
                else if(this.state.board[i][j]=="O"){
                    arr[i][j]=1;
                }else{
                    arr[i][j]=0;
                }
            }
        }
       for(var i = 0; i<3;i++){
            var rowSum = 0;
            for(var j = 0; j<3;j++){
                rowSum += arr[i][j];
            }
            if(rowSum === 3)
            {
                this.setState({win:"Player 1"});
                break;
            }
            else if(rowSum === -3)
            {
                this.setState({win:"Player 2"});
                break;
            }                
        }
    
        for(var i = 0; i<3;i++){
            var colSum = 0;
            for(var j = 0; j<3;j++){
                colSum += arr[j][i];
            }
            if(colSum === 3)
            {
                this.setState({win:"Player 1"});
                break;
            }
            else if(colSum === -3)
            {
                this.setState({win:"Player 2"});
                break;
            }
        }
    
        if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
            this.setState({win:"Player 1"});
        else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
            this.setState({win:"Player 2"});
    
        if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
            this.setState({win:"Player 1"});
        else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
            this.setState({win:"Player 2"});
    }

    render(){
        return <div>
            <h4>Turn: Player {this.state.player}</h4>
            <div class="game-board">
                <div class="box" onClick={()=>this.handleClick(0,0)}>{this.state.board[0][0]}</div>
                <div class="box" onClick={()=>this.handleClick(0,1)}>{this.state.board[0][1]}</div>
                <div class="box" onClick={()=>this.handleClick(0,2)}>{this.state.board[0][2]}</div>
                <div class="box" onClick={()=>this.handleClick(1,0)}>{this.state.board[1][0]}</div>
                <div class="box" onClick={()=>this.handleClick(1,1)}>{this.state.board[1][1]}</div>
                <div class="box" onClick={()=>this.handleClick(1,2)}>{this.state.board[1][2]}</div>
                <div class="box" onClick={()=>this.handleClick(2,0)}>{this.state.board[2][0]}</div>
                <div class="box" onClick={()=>this.handleClick(2,1)}>{this.state.board[2][1]}</div>
                <div class="box" onClick={()=>this.handleClick(2,2)}>{this.state.board[2][2]}</div>
            </div>
            {this.state.win!=null?<h5>{this.state.win} has won!!!</h5>:""}
        </div>
    }
}

export default Board;