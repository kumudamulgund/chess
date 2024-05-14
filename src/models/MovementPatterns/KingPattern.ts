import { Direction } from "../Direction";
import IValidation from "../Validations/IValidation";
import MovementPattern from "./MovementPattern";


export default class KingPattern extends MovementPattern {

    private _directions:Direction[];

    constructor() {
        super();
        this._directions = [[0, 1], [1, 0], [0, -1], [-1, 0],
            [1, 1], [-1, 1], [1, -1], [-1, -1]
        ];
    }

    getPossibleMoves(position:string, validations:IValidation[]): string[] {
        const [col, row] = position;
        if(!this.isPositionValid(validations, parseInt(row), col)) {
            throw new Error("Invalid position");
        }
        const moves: string[] = [];
        this._directions.forEach(([dr, dc]) => {
            const newRow = parseInt(row) + dr;
            const newCol = String.fromCharCode(col.charCodeAt(0) + dc);
            if (this.isPositionValid(validations, newRow, newCol)) {
                const newPosition = newCol + newRow;
                moves.push(newPosition);
            }
        });
        return moves;
    }

}
