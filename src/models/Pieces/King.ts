import Chessboard from "../Chessboard/Chessboard";
import { Direction } from "../Direction";
import Piece from "./Piece";

export default class King extends Piece {

    private _directions:Direction[];

    constructor(position:string) {
        super(position);
        this._directions = [[0, 1], [1, 0], [0, -1], [-1, 0],
            [1, 1], [-1, 1], [1, -1], [-1, -1]
        ];
    }
    getPossibleMoves(chessboard: Chessboard): string[] {
        const moves: string[] = [];
        const [col, row] = this.position;
        this._directions.forEach(([dr, dc]) => {
            const newRow = parseInt(row) + dr;
            const newCol = String.fromCharCode(col.charCodeAt(0) + dc);
            if (chessboard.isValidPosition(newRow, newCol)) {
                const newPosition = newCol + newRow;
                moves.push(newPosition);
            }
        });
        return moves;
    }

}
