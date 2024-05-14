import IValidation from "../Validations/IValidation";
import MovementPattern from "./MovementPattern";

export default class PawnPattern extends MovementPattern {

    getPossibleMoves(position:string, validations:IValidation[]) {
        const moves:string[] = [];
        const [col, row] = position;
        const newRow = parseInt(row) + 1;
        if (this.isMoveValid(validations, newRow, col)) {
            const possiblePosition = col+newRow;
            moves.push(possiblePosition);
        }
        return moves;
    }

}