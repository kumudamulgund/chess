import IValidation from "./IValidation";

export class BasicValidation implements IValidation {

    validate(row: number, col: string): boolean {
        return row >= 1 && row <= 8 && col >= 'A' && col <= 'H';
    }
    
}