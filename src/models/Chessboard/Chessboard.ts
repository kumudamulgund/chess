//make this singleton
export default class Chessboard {

    private _rows:number;
    private _columns:string;

    constructor() {
        this._rows = 8;
        this._columns = "H";
    }

    isValidPosition(row:number, col:string):boolean {
        return row >= 1 && row <= this._rows && col >= 'A' && col <= 'H';
    }

    get rows():number {
        return this._rows;
    }

    get columns():string {
        return this._columns;
    }
}