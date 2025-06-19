import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  count=signal(10);
  x=20
  constructor(){
    effect(()=>{
      // console.log(this.x)    // property
      console.log(this.count());
      
    })
  }
  update(val:string){
    // this.x=30;   //property
    // this.count.set(100)   //signal

    if(val=='dec'){
      this.count.set(this.count()-1);
    }else{
      this.count.set(this.count()+1)
    }
  }
}
