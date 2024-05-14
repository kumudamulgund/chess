import IValidation from "../Validations/IValidation";
import MovementPattern from "./MovementPattern";

export default class PawnPattern extends MovementPattern {

    getPossibleMoves(position:string, validations:IValidation[]) {
        const [col, row] = position;
        if(!this.isPositionValid(validations, parseInt(row), col)) {
            throw new Error("Invalid position");
        }
        const moves:string[] = [];
        const newRow = parseInt(row) + 1;
        if (this.isPositionValid(validations, newRow, col)) {
            const possiblePosition = col+newRow;
            moves.push(possiblePosition);
        }
        return moves;
    }

}