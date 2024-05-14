import { Interface, createInterface } from "readline";
import Piece from "./models/Pieces/Piece";
import { BasicValidation } from "./models/Validations/BasicValidation";
import KingPattern from "./models/MovementPatterns/KingPattern";
import PawnPattern from "./models/MovementPatterns/PawnPattern";
import { BishopPattern } from "./models/MovementPatterns/BishopPattern";
import { RookPattern } from "./models/MovementPatterns/RookPattern";

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
    } catch (error) {
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
            const piece = createPieceFromInput(pieceType.toLowerCase().trim());
            if (!piece) {
                reject(new Error("Invalid Input. Possible piece names: King, Queen, Pawn"));
            } else {
                resolve({piece:piece, position:position});
            }
        });
    });
}

const createPieceFromInput = (type:string):Piece => {
    let piece:Piece;
    switch(type) {
        case "king": piece = new Piece("king", [new BasicValidation()], [new KingPattern()]);
            break;
        case "pawn": piece = new Piece("pawn",  [new BasicValidation()], [new PawnPattern()]);
            break;
        case "queen": piece = new Piece("queen", [new BasicValidation()], [new BishopPattern(), new RookPattern()])
            break;
        default: piece = null;
    }
    return piece;
}


const getPossibleMoves = (pieceInfo:PieceInfo) => {
    try {
        const{piece, position} = pieceInfo;
        const possibleMoves = piece.getPossibleMoves(position);
        console.log("Possible moves:", possibleMoves.join(', '));
    } catch (err) {
        console.log("Error:", err.message);
    }
}

main();