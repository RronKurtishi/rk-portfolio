import { Component, OnInit } from '@angular/core';
import projects from '../../../assets/files/projects.json';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: [ './projects.component.scss' ]
})

export class ProjectsComponent implements OnInit {
	clicked: boolean = false;
	id: number;
	search: string[] = [];

	// sort projects by rating
	public projects = projects.sort((a: { rating: number; }, b: { rating: number; }) => (a.rating < b.rating) ? 1 : -1);

	// array to display skills, id is not really needed right now
	skills: any[] = [
		{ id: 1, name: 'HTML' },
		{ id: 2, name: 'CSS' },
		{ id: 3, name: 'Bootstrap 4' },
		{ id: 4, name: 'JavaScript' },
		{ id: 5, name: 'TypeScript' },
		{ id: 6, name: 'Angular' },
		{ id: 7, name: 'Wordpress' }
	];

	constructor() {}

	ngOnInit(): void {
		// empty search array when page initialized
		this.search = [];
	}
	// when a skill is clicked
	clickedEvent(i: number): void {
		let element = document.getElementsByClassName('skill')[i];
		element.classList.toggle('selected');
		if (this.search.includes(element.textContent)) {
			this.search.splice(this.search.indexOf(element.textContent), 1);
		} else {
			this.search.push(element.textContent);
		}
  }
  checkSearch(i){
    let projectTags = this.projects[i].tags;
		let searchProjects = this.search;
		console.log("projecttags:" + projectTags +  "search: " + searchProjects)
    if (searchProjects.every(t => projectTags.includes(t))){
      return true;
    }
    return false;
  }
}
