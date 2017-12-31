import { Answer } from "../answer";
export class TextAnswer extends Answer {
    constructor(jsonStr?: string) {
        super();
        if (jsonStr) {
            let obj = (typeof (jsonStr) == 'string') ? JSON.parse(jsonStr) : jsonStr;
            this._answers = obj._answers;
            this._caseSensitive = obj._caseSensitive;
        }
    }
    public readonly description = "text answer";
    private _answers: string[];
    private _caseSensitive: boolean;
    public get caseSensitive(): boolean {
        return this._caseSensitive;
    }
    public set caseSensitive(caseSensitive: boolean) {
        this._caseSensitive = caseSensitive;
    }

    public get answers(): string[] {
        return this._answers;
    }
    public set answers(v: string[]) {
        this._answers = v;
    }
}
