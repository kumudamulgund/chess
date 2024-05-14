
import MovementPattern from '../src/models/MovementPatterns/MovementPattern';
import Piece from '../src/models/Pieces/Piece';
import IValidation from '../src/models/Validations/IValidation';

class MockMovementPattern extends MovementPattern {

    getPossibleMoves(position: string, validations: IValidation[]): string[] {
        return ['A1', 'A2', 'B2']; // Mock implementation
    }

    protected isPositionValid(validations: IValidation[], row: number, col: string): boolean {
        return true;
    }
}

class MockErrorMovementPattern extends MovementPattern {
    getPossibleMoves(position: string, validations: IValidation[]): string[] {
        throw new Error('Invalid position')
    }
}


describe('Piece', () => {
    const mockValidationSuccess: IValidation = {
        validate: jest.fn().mockReturnValue(true)
    };

    const mockValidationFail: IValidation = {
        validate: jest.fn().mockReturnValue(false)
    };

    const mockMovementPattern = new MockMovementPattern();
    const errorMockMovementPattern = new MockErrorMovementPattern();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should give possible moves", () => {
        const piece = new Piece('Piece', [mockValidationSuccess], [mockMovementPattern]);
        const possibleMoves = piece.getPossibleMoves('B1');
        expect(possibleMoves).toEqual(expect.arrayContaining(['A1', 'A2', 'B2']));
    });

    it('should throw error for invalid position', () => {
        const piece = new Piece('Piece', [mockValidationFail], [mockMovementPattern]);
        expect(() => piece.getPossibleMoves('Z9')).toThrow('Not a valid position');
    });

    it('should throw error when getPossibleMoves in pattern throws error', () => {
        const piece = new Piece('Piece', [mockValidationSuccess], [errorMockMovementPattern]);
        expect(() => piece.getPossibleMoves('A1')).toThrow('Invalid position');
    });


    
});