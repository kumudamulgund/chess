import { createInterface } from "readline";
import Chessboard from "./models/Chessboard/Chessboard";
import King from "./models/Pieces/King";
import Pawn from "./models/Pieces/Pawn";
import Queen from "./models/Pieces/Queen";

const main = () => {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const chessboard = Chessboard.getInstance();
    readline.question('Enter piece type and position (e.g., Pawn, G1): ', input => {
        const [pieceType, position] = input.trim().split(', ');
        const piece = pieceType.toLowerCase() === 'pawn' ? new Pawn(position) :
            pieceType.toLowerCase() === 'king' ? new King(position) :
            pieceType.toLowerCase() === 'queen' ? new Queen(position) : null;

        if (!piece) {
            console.log("Invalid piece type");
            readline.close();
            return;
        }

        const possibleMoves = piece.getPossibleMoves(chessboard);
        console.log("Possible moves:", possibleMoves.join(', '));
        readline.close();
    });
}


main();