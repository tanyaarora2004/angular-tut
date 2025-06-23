import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  // show=true

  students=["Tanya","Vanya","Sanya","Shanaya","Manya","Gurpreet"]
   studentsData=[
    {
      name:"Tanya",age:20,email:"tanya@gmail.com"
    },
    {
      name:"Vanya",age:21,email:"vanya@gmail.com"
    },
    {
      name:"Manya",age:10,email:"manya@gmail.com"
    },
    {
      name:"Sanya",age:11,email:"sanya@gmail.com"
    },
  ]
}
