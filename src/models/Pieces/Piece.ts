import IMovementPattern from "../MovementPatterns/MovementPattern";
import IValidation from "../Validations/IValidation";

export default class Piece {
    
    private _name:string;
    private _validations:IValidation[];
    private _movementPatterns:IMovementPattern[];

    constructor(name:string, validations:IValidation[], movementPatterns:IMovementPattern[]) {
        this._name = name;
        this._movementPatterns = movementPatterns;
        this._validations = validations;
    }

    private isValidPosition(position:string):boolean {
        const [col, row] = position;
        return this._validations.reduce((isValid, validation) => {
            return isValid && validation.validate(parseInt(row), col);
        },true);
    }


    getPossibleMoves(position:string):string[] {
        if(! this.isValidPosition(position)) {
            throw new Error("Not a valid position");
        }
        return this._movementPatterns.reduce((acc:string[], pattern:IMovementPattern) => {
                
                const moves = pattern.getPossibleMoves(position, this._validations);
                acc.push(...moves);
                return acc;
        }, [])
    }
}