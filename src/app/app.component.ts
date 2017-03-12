import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUD FORM ';
  id: number = 1;
  user: string;
  classs: string;
  year: string;
  email: string;
  contactNumber: string;
  Show: boolean;
  array: any;
  isEdit: boolean = false;
  temp: any;
  appear: boolean = false;

  constructor() {
    this.array = [];
    this.temp = [];
  }

  onclickAdd() {
    this.array.push(new student(this.id, this.user, this.classs, this.year, this.email, this.contactNumber, this.isEdit))
    this.Show = true;
    this.id++;


    this.user = "";
    this.classs = "";
    this.year = "";
    this.email = "";
    this.contactNumber = "";
  }

  onclickdel(student) {
    //  console.log(student);
    this.array.splice(this.array.indexOf(student), 1);
  }

  onclickMod(stu) {
    console.log(stu.user);
    this.user = stu.user;
    this.classs = stu.classs;
    this.year = stu.year;
    this.email = stu.email;
    this.contactNumber = stu.contactNumber;
    stu.isEdit = true;
    this.appear = true;
  }

  onclickDone(stu) {
    console.log(stu)
    for (var i = 0; i < this.array.length; i++) {
      if (stu.id == this.array[i].id) {
        console.log(stu.id)

        this.temp.push(new student(stu.id, this.user, this.classs, this.year, this.email, this.contactNumber, this.isEdit))
        this.array[i] = this.temp[i];
        console.log(this.array[i])

        console.log(this.temp[i])

        this.user = "";
        this.classs = "";
        this.year = "";
        this.email = "";
        this.contactNumber = "";
        this.appear = false;
      }
    }

  }

}


class student {
  id: number;
  user: string = "";
  classs: string = "";
  year: string = "";
  email: string = "";
  contactNumber: string = "";
  isEdit: boolean = false;

  constructor(id: number, user: string, classs: string, year: string, email: string, contactNumber: string, isEdit: boolean) {
    this.id = id;
    this.user = user;
    this.classs = classs;
    this.email = email;
    this.year = year;
    this.contactNumber = contactNumber;
    this.isEdit = isEdit;
  }
}





