import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf,NgFor,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  // show=true

  // login=false
  // block=0
  // students=["Tanya","Vanya","Sanya","Shanaya","Manya","Gurpreet"]
  //  studentsData=[
  //   {
  //     name:"Tanya",age:20,email:"tanya@gmail.com"
  //   },
  //   {
  //     name:"Vanya",age:21,email:"vanya@gmail.com"
  //   },
  //   {
  //     name:"Manya",age:10,email:"manya@gmail.com"
  //   },
  //   {
  //     name:"Sanya",age:11,email:"sanya@gmail.com"
  //   },
  // ]

  // updateBlock(){
  //   this.block++;
  // }


  // ngSwitch

  color="";

  changeColor(color:string){
    this.color=color
  }

}
