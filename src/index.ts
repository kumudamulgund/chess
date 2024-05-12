// import { Interface, createInterface } from "readline";
// import Chessboard from "./models/Chessboard/Chessboard";
// import King from "./models/Pieces/King";
// import Pawn from "./models/Pieces/Pawn";
// import Queen from "./models/Pieces/Queen";
// import Piece from "./models/Pieces/Piece";

// const main = () => {
//     const chessboard = Chessboard.getInstance();
//     getInputAndPossibleMoves(chessboard);
// }

// const getInput = (readline:Interface):Piece => {
//     let piece:Piece;
//     readline.question('Enter piece type and position (e.g., Pawn, G1): ', input => {
//         const [pieceType, position] = input.trim().split(', ');
//         piece = pieceType.toLowerCase() === 'pawn' ? new Pawn(position) :
//             pieceType.toLowerCase() === 'king' ? new King(position) :
//             pieceType.toLowerCase() === 'queen' ? new Queen(position) : null;

//         if (!piece) {
//            throw new Error("Invalid Input. Possible piece names: King, Queen, Pawn");
//         }
//     });
//     return piece;
// }

// const getInputAndPossibleMoves = (chessBoard:Chessboard) => {
//     const readline = createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//     try {
//         const piece = getInput(readline);
//         const possibleMoves = piece.getPossibleMoves(chessBoard);
//         console.log("Possible moves:", possibleMoves.join(', '));
//     } catch (err) {
//         console.log(err.message)
//     } finally {
//         readline.close();
//         getInputAndPossibleMoves(chessBoard);
//     }
// }

// main();

import { Interface, createInterface } from "readline";
import Chessboard from "./models/Chessboard/Chessboard";
import King from "./models/Pieces/King";
import Pawn from "./models/Pieces/Pawn";
import Queen from "./models/Pieces/Queen";
import Piece from "./models/Pieces/Piece";

const getInput = async (readline: Interface): Promise<Piece> => {
    return new Promise((resolve, reject) => {
        readline.question('Enter piece type and position (e.g., Pawn, G1): ', input => {
            const [pieceType, position] = input.trim().split(', ');

            const piece = pieceType.toLowerCase() === 'pawn' ? new Pawn(position) :
                pieceType.toLowerCase() === 'king' ? new King(position) :
                pieceType.toLowerCase() === 'queen' ? new Queen(position) : null;

            if (!piece) {
                reject(new Error("Invalid Input. Possible piece names: King, Queen, Pawn"));
            } else {
                resolve(piece);
            }
        });
    });
}

const main = async() => {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const chessboard = Chessboard.getInstance();
    try {
        const piece = await getInput(readline);
        processPiece(piece, chessboard);
    } catch (error) {
        console.error(error.message);
    } finally {
        readline.close();
       main();
    }
}

const processPiece = (piece: Piece, chessboard: Chessboard) => {
    const possibleMoves = piece.getPossibleMoves(chessboard);
    console.log("Possible moves:", possibleMoves.join(', '));
}

main();