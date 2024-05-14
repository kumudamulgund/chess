import IValidation from "../Validations/IValidation";

export default abstract class MovementPattern {

    protected isMoveValid(validations:IValidation[], row, col):boolean {
        return validations.reduce((isValid, validation) => {
            return isValid && validation.validate(row, col);
        },true);
    }

    abstract getPossibleMoves(position:string, validations:IValidation[]):string[];
}