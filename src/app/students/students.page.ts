import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  constructor() { }
  students=[
    {
      "name":"will smith",
      "email":"will@will.com",
      "country":"USA"

    },
    {
      "name":"amine kacem",
      "email":"amine@amine.com",
      "country":"TN"

    },
    {
      "name":"test",
      "email":"test@test.com",
      "country":"EU"

    }
  ]
  ngOnInit() {
  }

}
