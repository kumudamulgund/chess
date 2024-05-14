import { Interface, createInterface } from "readline";
import Piece from "./models/Pieces/Piece";
import { createPieceFromInput } from "./factories/Factory";


interface PieceInfo {
    piece:Piece,
    position:string
}
const main = async() => {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const pieceInfo = await getInput(readline);
        getPossibleMoves(pieceInfo);
    } catch (error:any) {
        console.error(error.message);
    } finally {
        readline.close();
       main();
    }
}

const getInput = async (readline: Interface): Promise<PieceInfo> => {
    return new Promise((resolve, reject) => {
        readline.question('Enter piece type and position (e.g., Pawn, G1): ', input => {
            const [pieceType, position] = input.trim().split(', ');
            try {
                const piece = createPieceFromInput(pieceType.toLowerCase().trim());
                resolve({piece:piece, position:position});
            } catch (err) {
                reject(new Error("Invalid Input. Possible piece names: King, Queen, Pawn"));
            }
        });
    });
}




const getPossibleMoves = (pieceInfo:PieceInfo) => {
    try {
        const{piece, position} = pieceInfo;
        const possibleMoves = piece.getPossibleMoves(position);
        console.log("Possible moves:", possibleMoves.join(', '));
    } catch (err:any) {
        console.log("Error:", err.message);
    }
}

main();