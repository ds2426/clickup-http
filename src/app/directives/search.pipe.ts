import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
    transform(projects: any, searchText: any): any {
        if(searchText == null) return projects;
        return projects.filter(function(project){
            return project.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
        })
    }
}