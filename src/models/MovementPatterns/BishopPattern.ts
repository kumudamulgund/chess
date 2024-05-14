import { Direction } from "../Direction";
import IValidation from "../Validations/IValidation";
import MovementPattern from "./MovementPattern";

export class BishopPattern extends MovementPattern {

    private _directions:Direction[];

    constructor() {
        super()
        this._directions = [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1], 
        ];
    }

    getPossibleMoves(position:string, validations:IValidation[]): string[] {
        const moves: string[] = [];
        const [col, row] = position;
        for (const [dr, dc] of this._directions) {
            let newRow = parseInt(row);
            let newCol = col;
            while (true) {
                newRow += dr;
                newCol = String.fromCharCode(newCol.charCodeAt(0) + dc);
                if (!this.isMoveValid(validations, newRow, newCol)) break;
                moves.push(newCol + newRow);
            }
        }
        return moves;
    }
    
}