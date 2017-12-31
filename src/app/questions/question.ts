import { Answer } from "../answers/answer";
import { CheckAnswer } from "../answers/check-answer/check-answer";
import { yesnoAnswer } from "../answers/yes-no-answer/yes-no-answer";
import { TextAnswer } from "../answers/text-answer/text-answer";
export class Question {

    constructor(jsonStr?) {
        if (jsonStr) {
            let obj = (typeof (jsonStr) == 'string') ? JSON.parse(jsonStr) : jsonStr;
            this.questionTypeName = obj.questionTypeName;
            this.QuestionText = obj.QuestionText;
            this.ExplanationText = obj.ExplanationText;
            if (this.questionTypeName == 'yesnoAnswer') {
                this.answer = new yesnoAnswer(obj.answer);
            }
            else if (this.questionTypeName == 'checkAnswer') {
                this.answer = new CheckAnswer(obj.answer);
            }
            else if (this.questionTypeName == 'textAnswer') {
                this.answer = new TextAnswer(obj.answer);
            }
            else {
                console.log("Unknown type", this.questionTypeName);
                throw new Error();
            }
        }
    }
    public QuestionText: string;
    public ExplanationText: string;

    // human readable question type
    public readonly questionTypeName: string;

    private answer: Answer;
    public get Answer() {
        return this.answer;
    }
    public rightAnswered(object: any): boolean {
        return true;
    }
}