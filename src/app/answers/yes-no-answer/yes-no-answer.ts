import { Answer } from "../answer";
export class yesnoAnswer extends Answer {
    constructor(jsonStr?:string) {
        super();
        if (jsonStr) {
            let obj =(typeof(jsonStr)=='string')? JSON.parse(jsonStr):jsonStr;
            this._correct = obj._correct;
        }
    }
    public readonly description = "yes or no Answer";
    private _correct: boolean;
    public get correct(): boolean {
        return this._correct;
    }
    public set correct(v: boolean) {
        this._correct = v;
    }
}
