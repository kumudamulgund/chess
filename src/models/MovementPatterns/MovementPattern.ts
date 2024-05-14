import IValidation from "../Validations/IValidation";

export default abstract class MovementPattern {

    protected isPositionValid(validations:IValidation[], row:number, col:string):boolean {
        return validations.reduce((isValid, validation) => {
            return isValid && validation.validate(row, col);
        },true);
    }

    abstract getPossibleMoves(position:string, validations:IValidation[]):string[];
}