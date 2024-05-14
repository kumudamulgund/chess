import KingPattern from "../src/models/MovementPatterns/KingPattern";
import { BasicValidation } from "../src/models/Validations/BasicValidation";

describe('King pattern', () => {
    it("should return all 8 moves for king", () => {
        const kingPattern = new KingPattern();
        const position = "E4";
        const expectedMoves = ['D3', 'E3', 'F3', 'D4', 'F4', 'D5', 'E5', 'F5'];
        const possibleMoves = kingPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should return all 3 moves for king", () => {
        const kingPattern = new KingPattern();
        const position = "H8";
        const expectedMoves = ['G8', 'G7', 'H7'];
        const possibleMoves = kingPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should throw error when invalid position given", () => {
        const kingPattern = new KingPattern();
        const position = "I8";
        expect(() => kingPattern.getPossibleMoves(position, [new BasicValidation()])).toThrow('Invalid position');
    })
})