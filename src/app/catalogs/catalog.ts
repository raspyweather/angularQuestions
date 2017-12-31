import { Question } from "../questions/question";
import { dataService } from "../dataService";

export class QuestionCatalog {
  constructor(private dataService: dataService, jsonStr: string) {
    console.log("qcatalog", jsonStr);
    if (jsonStr) {
      let obj = (typeof (jsonStr) == 'string') ? JSON.parse(jsonStr) : jsonStr;
      console.log(obj);
      this.title = obj.title;
      this.author = obj.author;
      this.description = obj.description;
      if (obj.questions) {
        this.questions = obj.questions.map(x => new Question(x as string)) as Question[];
      }
      if (obj.url) {
        this.url = obj.url;
      }
      console.log("qc", this);
    }
    else {
      this.questions = [];
    }
  }
  private title: string;
  public get Title() {
    return this.title;
  }
  public set Title(str: string) {
    this.title = str;
  }

  private description: string;
  public get Description() {
    return this.description;
  }
  public set Description(str: string) {
    this.description = str;
  }

  private questions: Question[];

  private url: string;
  public get Url() {
    return this.url;
  }
  public set Url(str: string) {
    this.url = str;
  }

  private author: string;
  public get Author() {
    return this.author;
  }
  public set Author(str: string) {
    this.author = str;
  }
  public get QuestionsCount() {
    return (this.questions) ? this.questions.length : 0;
  }

  public async getQuestions(): Promise<Question[]> {
    if ((!this.questions || this.questions.length == 0) && this.Url) {
      return new Promise<Question[]>(() => {
        this.dataService.getPromised(this.Url)
          .then(x => this.questions = (x as Question[]));
      });
    }
    return new Promise<Question[]>(() => this.questions);
  }
}