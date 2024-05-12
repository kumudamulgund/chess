import Chessboard from "../Chessboard/Chessboard";

//make this class abstract
export default abstract class Piece {
    
    protected position:string;
    
    constructor(position) {
        this.position = position;
    }

    abstract getPossibleMoves(chessboard:Chessboard):string[];
}