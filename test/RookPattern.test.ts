

import { RookPattern } from "../src/models/MovementPatterns/RookPattern";
import { BasicValidation } from "../src/models/Validations/BasicValidation";

describe('Bishop pattern', () => {
    it("should return all moves when in middle of the chessboard", () => {
        const rookPattern = new RookPattern();
        const position = "E4";
        const expectedMoves = ['D4','C4','B4','A4','F4','G4','H4','E1','E2','E3','E5','E6','E7','E8'];
        const possibleMoves = rookPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should return no moves when at the edge", () => {
        const rookPattern = new RookPattern();
        const position = "H8";
        const expectedMoves = ['H1','H2','H3','H4','H5','H6','H7','A8','B8','C8','D8','E8','F8','G8'];
        const possibleMoves = rookPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should throw error when invalid position given", () => {
        const rookPattern = new RookPattern();
        const position = "I8";
        expect(() => rookPattern.getPossibleMoves(position, [new BasicValidation()])).toThrow('Invalid position');
    })
})