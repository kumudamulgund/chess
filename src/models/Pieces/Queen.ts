import { Direction } from "../Direction";
import Piece from "./Piece";

export default class Queen extends Piece {
    private _directions:Direction[];

    constructor(position) {
        super(position);
        this._directions = [
            [1,0], [0,1], [-1,0], [0,-1],
            [1, 1], [1, -1], [-1, 1], [-1, -1]
        ];
    }
    
    getPossibleMoves(chessboard):string[] {
        const moves = [];
        const [col, row] = this.position;
       
        this._directions.forEach(([dc, dr]) => {
            let newRow = parseInt(row);
            let newCol = col;
            while (true) {
                newRow += dr;
                newCol = String.fromCharCode(newCol.charCodeAt(0) + dc);
                
                if (!chessboard.isValidPosition(newRow, newCol)) {
                    break;
                }
                const possiblePosition = newCol+newRow;
                moves.push(possiblePosition);
            }
        });
        console.log(moves, "---all moves");
        return moves;
    }
}