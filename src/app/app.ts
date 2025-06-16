import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,Signup,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
//   title = 'angular-tut';
//   name='Tanya'

// function call on button click 

// handleClickEvent(){
//   console.log(  "Function called");
//   this.otherFunction()
// }
// otherFunction(){
//   console.log("other called");
  
// }

// define data types

name:string="Tanya Arora"
data:string|number="tanya"
other:any=false
updateName(){
// this.name="Peter"  
this.name="20"
this.data=123
}

sum(a:number,b:number){
  console.log(a+b);
  
}
}
