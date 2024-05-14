import { BishopPattern } from "../models/MovementPatterns/BishopPattern";
import KingPattern from "../models/MovementPatterns/KingPattern";
import MovementPattern from "../models/MovementPatterns/MovementPattern";
import PawnPattern from "../models/MovementPatterns/PawnPattern";
import { RookPattern } from "../models/MovementPatterns/RookPattern";
import Piece from "../models/Pieces/Piece";
import { BasicValidation } from "../models/Validations/BasicValidation";
import IValidation from "../models/Validations/IValidation";

export interface Factory {
    getMoveMentPatterns():MovementPattern[];
    getValidations():IValidation[];
}

export class RookFactory implements Factory {
    getMoveMentPatterns():MovementPattern[] {
        return [new RookPattern()]
    }
    getValidations():IValidation[] {
        return [new BasicValidation()]
    }
}

export class BishopFactory implements Factory {
    getMoveMentPatterns(): MovementPattern[] {
        return [new BishopPattern()]
    }
    getValidations(): IValidation[] {
        return [new BasicValidation()]
    }
}

export class KingFactory implements Factory {
    getMoveMentPatterns(): MovementPattern[] {
        return [new KingPattern()]
    }
    getValidations(): IValidation[] {
        return [new BasicValidation()]
    }
}

export class PawnFactory implements Factory {

    getMoveMentPatterns(): MovementPattern[] {
        return [new PawnPattern()]
    }
    getValidations(): IValidation[] {
        return [new BasicValidation()]
    }
}

export class QueenFactory implements Factory {

    getMoveMentPatterns(): MovementPattern[] {
        return [new RookPattern(), new BishopPattern()]
    }
    getValidations(): IValidation[] {
        return [new BasicValidation()]
    }
}

export const createPieceFromInput = (type:string):Piece => {
    let piece:Piece;
    let factory:Factory | null;
    switch(type) {
        case "king": 
            factory = new KingFactory();
            break;
        case "pawn": 
            factory = new PawnFactory();
            break;
        case "queen": 
            factory = new QueenFactory();
            break;
        default: factory = null;
    }
    if(!factory) {
        throw new Error("Invalid input");
    }
    piece = new Piece(type, factory.getValidations(), factory.getMoveMentPatterns());
    return piece;
}


