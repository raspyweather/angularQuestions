import { QuestionCatalog } from "./catalogs/catalog";
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';


export class dataService {
    private readonly catalogLocations = "./assets/questionCatalogLocations.json";
    constructor() {
        this.questionCatalogs = [];
        this.loadQuestionCatalogs();
    }
    loadQuestionCatalogs() {
        this.getPromised(this.catalogLocations)
            .then(y => JSON.parse(y as string).map(x => this.questionCatalogs.push(new QuestionCatalog(this, x as string)))
            )
            .catch(y => console.log("couldn't load initial values", y));
    }

    questionCatalogs: QuestionCatalog[];

    public get getQuestionCatalogs(): QuestionCatalog[] {
        return this.questionCatalogs;
    }

    public get recentQuestionCatalog() {
        return this.recentQCatalog;
    }
    public set recentQuestionCatalog(q: QuestionCatalog) {
        this.recentQCatalog = q;
    }
    private recentQCatalog: QuestionCatalog;


    getPromised(url) {
        return new Promise((resolve, reject) => {
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                    resolve(xmlHttp.responseText);
            }
            xmlHttp.open("GET", url, true); // true for asynchronous
            xmlHttp.send(null);
        });
    }
}