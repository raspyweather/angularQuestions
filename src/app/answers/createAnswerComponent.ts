import { Answer } from './answer';

export interface createAnswerComponent {
     getAnswer():Answer;
     readonly isReady:boolean;
     readonly readyMessage:string;
}