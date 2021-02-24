import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Contact = {
    name : 'etudiant',
    email : 'amine@sloth-lab.com',
    pic : 'assets/imgs/1.png'
  }
}
