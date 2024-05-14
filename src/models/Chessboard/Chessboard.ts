//make this singleton
export default class Chessboard {

    private _rows:number;
    private _columns:string;
    private static instance: Chessboard | null = null;

    private constructor() {
        this._rows = 8;
        this._columns = "H";
    }

    public static getInstance(): Chessboard {
        if(!Chessboard.instance) {
            Chessboard.instance = new Chessboard();
        }
        return Chessboard.instance;
    }

    public isValidPosition(row:number, col:string):boolean {
        return row >= 1 && row <= this._rows && col >= 'A' && col <= 'H';
    }

    get rows():number {
        return this._rows;
    }

    get columns():string {
        return this._columns;
    }
}