import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { AppComponent }  from './app.component';
import { ProjectData } from './providers/ProjectData';
import {SearchPipe} from "./directives/search.pipe";
import {ArrangeByPipe} from "./directives/arrange.pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        SearchPipe,
        ArrangeByPipe
    ],
    providers: [ProjectData],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

