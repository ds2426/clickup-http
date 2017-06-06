import { Component } from '@angular/core';
import { ProjectData } from './providers/ProjectData';

@Component({
    selector: 'http-demo',
    templateUrl: './app.component.html'
})
export class AppComponent {
    projects = [];
    downSorted: boolean = false;
    column: string = 'name';
    direction: number;
    constructor(private _ProjectData: ProjectData)
    {

        this._ProjectData.getSomeProjects()
            .subscribe(
                (data)=> {
                    this.projects = data;
                },
                (error) => console.log("error : " + error)
            );
    }
    arrange(property){
        this.downSorted = !this.downSorted;
        this.column = property;
        this.direction = this.downSorted ? 1 : -1;
    }

}



