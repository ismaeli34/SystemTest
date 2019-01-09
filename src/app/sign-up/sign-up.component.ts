import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  genderCategory = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}];

  constructor() {
  }

  ngOnInit() {
  }


  signUp(formData: string): void {
    localStorage.setItem('MyData', formData);
    console.log('Data stored in My Data' + formData);
  }

}
