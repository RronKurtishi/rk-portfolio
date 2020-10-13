import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  clicked: boolean = false;
  id: number;
  imgSrcDemo: string = "../../../assets/images/demo.svg";
  imgSrcGithub: string = "../../../assets/images/github.svg"
  skills: any[] = [
    {id: 1, name: 'HTML'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'Bootstrap 4'},
    {id: 4, name: 'JavaScript'},
    {id: 5, name: 'TypeScript'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Wordpress'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  clickedEvent(i: number): void {
    let element = document.getElementsByClassName('skill')[i];
    element.classList.toggle("selected");
  }

  onHoverDemo() {
    this.imgSrcDemo = "../../../assets/images/demo-hover.svg"
  }

  onMouseOutDemo() {
    this.imgSrcDemo = "../../../assets/images/demo.svg";
  }

  onHoverGithub() {
    this.imgSrcGithub = "../../../assets/images/github-hover.svg"
  }

  onMouseOutGithub() {
    this.imgSrcGithub = "../../../assets/images/github.svg"
  }
}
