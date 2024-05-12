import Chessboard from "../Chessboard/Chessboard";

//make this class abstract
export default class Piece {
    
    position:string;
    
    constructor(position) {
        this.position = position;
    }

    getPossibleMoves(chessboard:Chessboard):string[] {
        return [];
    }
}