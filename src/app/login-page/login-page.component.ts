import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('userInput', {static: true}) userInput: ElementRef;

  user: string;

  constructor() { }

  ngOnInit(): void {
  }

  userIn(){
    console.log(this.userInput.nativeElement.value);

  }
}
