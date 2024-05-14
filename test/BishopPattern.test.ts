import { BishopPattern } from "../src/models/MovementPatterns/BishopPattern";
import { BasicValidation } from "../src/models/Validations/BasicValidation";

describe('Bishop pattern', () => {
    it("should return all moves when in middle of the chessboard", () => {
        const bishopPattern = new BishopPattern();
        const position = "E4";
        const expectedMoves = ['D5','C6', 'B7', 'A8', 'F3', 'G2', 'H1'];
        const possibleMoves = bishopPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should return all moves when at the edge", () => {
        const bishopPattern = new BishopPattern();
        const position = "H8";
        const expectedMoves = ['G7', 'F6', 'E5','D4','C3', 'B2', 'A1'];
        const possibleMoves = bishopPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should throw error when invalid position given", () => {
        const bishopPattern = new BishopPattern();
        const position = "I8";
        expect(() => bishopPattern.getPossibleMoves(position, [new BasicValidation()])).toThrow('Invalid position');
    })
})