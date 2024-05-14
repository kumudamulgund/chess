import { Direction } from "../Direction";
import IValidation from "../Validations/IValidation";
import MovementPattern from "./MovementPattern";

export class RookPattern extends MovementPattern {

    private _directions:Direction[];

    constructor() {
        super();
        this._directions = [
            [0, 1], 
            [0, -1],
            [1, 0], 
            [-1, 0],
        ];
    }

    getPossibleMoves(position:string, validations:IValidation[]): string[] {
        const [col, row] = position;
        if(!this.isPositionValid(validations, parseInt(row), col)) {
            throw new Error("Invalid position");
        }
        const moves: string[] = [];
        for (const [dr, dc] of this._directions) {
            let newRow = parseInt(row);
            let newCol = col;
            while (true) {
                newRow += dr;
                newCol = String.fromCharCode(newCol.charCodeAt(0) + dc);
                if (!this.isPositionValid(validations, newRow, newCol)) break;
                moves.push(newCol + newRow);
            }
        }
        return moves;
    }
    
}