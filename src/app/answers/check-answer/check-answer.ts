import { Answer } from "../answer";
export class CheckAnswer extends Answer {
    constructor(jsonStr?: string) {
        super();
        if (jsonStr) {
            let obj = JSON.parse(jsonStr);
            this._answers = obj.answers;
        }
    }
    public readonly description = "multiple choice answer";
    private _answers: { text: string, right: boolean }[];
    public get value(): { text: string, right: boolean }[] {
        return this._answers;
    }
    public set value(v: { text: string, right: boolean }[]) {
        this._answers = v;
    }

}