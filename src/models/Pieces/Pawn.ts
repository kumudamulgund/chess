import Chessboard from "../Chessboard/Chessboard";
import Piece from "./Piece";

export default class Pawn extends Piece {

    getPossibleMoves(chessboard:Chessboard) {
        const moves:string[] = [];
        const [col, row] = this.position;
        const newRow = parseInt(row) + 1;
        if (newRow <= chessboard.rows) {
            const possiblePosition = col+newRow;
            moves.push(possiblePosition);
        }
        return moves;
    }

}