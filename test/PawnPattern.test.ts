import PawnPattern from "../src/models/MovementPatterns/PawnPattern";
import { BasicValidation } from "../src/models/Validations/BasicValidation";

describe('Bishop pattern', () => {
    it("should return all moves when in middle of the chessboard", () => {
        const pawnPattern = new PawnPattern();
        const position = "E4";
        const expectedMoves = ['E5'];
        const possibleMoves = pawnPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual(expect.arrayContaining(expectedMoves));
    })

    it("should return no moves when at the edge", () => {
        const pawnPattern = new PawnPattern();
        const position = "H8";
        const possibleMoves = pawnPattern.getPossibleMoves(position, [new BasicValidation()]);
        expect(possibleMoves).toEqual([]);
    })

    it("should throw error when invalid position given", () => {
        const pawnPattern = new PawnPattern();
        const position = "I8";
        expect(() => pawnPattern.getPossibleMoves(position, [new BasicValidation()])).toThrow('Invalid position');
    })
})