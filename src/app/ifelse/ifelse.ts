import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css'
})
export class Ifelse {
  display=true
  toggleDiv=true

  hide(){
    this.display=false;
  }
  show(){
    this.display=true
  }
  toggle(){
    this.display=!this.display
  }
  toggleTwo(){
    this.toggleDiv=!this.toggleDiv
  }

   x=1
   color(x:number){
    this.x=x;
   }
   handleInput(event:Event){
     this.x=parseInt((event.target as HTMLInputElement).value);
   }

   colour='red'
   color1(colour:string){
    this.colour=colour;
   }

   change(event:Event){
     this.colour=((event.target as HTMLInputElement).value);
   }
  }
