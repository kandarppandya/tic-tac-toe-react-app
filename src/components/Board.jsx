import React from "react";
import { useState } from "react";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player:1,
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
        copy[i][j] =+ this.state.player==1?"o":"x";
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
                if(this.state.board[i][j]=="x"){
                    arr[i][j]=-1;
                }
                else if(this.state.board[i][j]=="o"){
                    arr[i][j]=1;
                }else{
                    arr[i][j]=0;
                }
            }
        }
        for(var i =0;i<3;i++){
            for(var j=0;j<3;j++){
                console.log(arr[i][j]+"\n");
            }
        }
       for(var i = 0; i<3;i++){
            var rowSum = 0;
            for(var j = 0; j<3;j++){
                rowSum += arr[i][j];
            }
            if(rowSum === 3)
            {
                alert("Circle WIN!");
                break;
            }
            else if(rowSum === -3)
            {
                alert("Cross WIN!");
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
                alert("Circle WIN!");
                break;
            }
            else if(colSum === -3)
            {
                alert("Cross WIN!");
                break;
            }
        }
    
        if(arr[0][0] + arr[1][1] + arr[2][2] === 3)
            alert("Circle WIN!");
        else if(arr[0][0] + arr[1][1] + arr[2][2] === -3)
            alert("Cross WIN!");
    
        if(arr[2][0] + arr[1][1] + arr[0][2] === 3)
            alert("Circle WIN!");
        else if(arr[2][0] + arr[1][1] + arr[0][2] === -3)
            alert("Cross WIN!");
    }

    render(){
        return <div>
            <h4>Turn: Player {this.state.player}</h4>
            <table align="center">
                <tr>
                    <td><button  onClick={()=>this.handleClick(0,0)}>{this.state.board[0][0]==null?"?":this.state.board[0][0]}</button></td>
                    <td><button  onClick={()=>this.handleClick(0,1)}>{this.state.board[0][1]==null?"?":this.state.board[0][1]}</button></td>
                    <td><button  onClick={()=>this.handleClick(0,2)}>{this.state.board[0][2]==null?"?":this.state.board[0][2]}</button></td>
                </tr>
                <tr>
                    <td><button  onClick={()=>this.handleClick(1,0)}>{this.state.board[1][0]==null?"?":this.state.board[1][0]}</button></td>
                    <td><button  onClick={()=>this.handleClick(1,1)}>{this.state.board[1][1]==null?"?":this.state.board[1][1]}</button></td>
                    <td><button  onClick={()=>this.handleClick(1,2)}>{this.state.board[1][2]==null?"?":this.state.board[1][2]}</button></td>
                </tr>
                <tr>
                    <td><button  onClick={()=>this.handleClick(2,0)}>{this.state.board[2][0]==null?"?":this.state.board[2][0]}</button></td>
                    <td><button  onClick={()=>this.handleClick(2,1)}>{this.state.board[2][1]==null?"?":this.state.board[2][1]}</button></td>
                    <td><button  onClick={()=>this.handleClick(2,2)}>{this.state.board[2][2]==null?"?":this.state.board[2][2]}</button></td>
                </tr>
            </table>
        </div>
    }
}

export default Board;