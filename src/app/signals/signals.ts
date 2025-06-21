import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  // count=signal(10);
  // x=20
  // constructor(){
  //   effect(()=>{
  //     // console.log(this.x)    // property
  //     console.log(this.count());
      
  //   })
  // }
  // update(val:string){
  //   // this.x=30;   //property
  //   // this.count.set(100)   //signal

  //   if(val=='dec'){
  //     this.count.set(this.count()-1);
  //   }else{
  //     this.count.set(this.count()+1)
  //   }
  // }



  // data types with signals

  // data : WritableSignal<number | string>=signal<number | string>(10);
  data : WritableSignal<number>=signal<number>(10);
  count:Signal<number>=computed(()=>10)
  update(){
    // this.data.set("hii");
    this.data.update((val)=>val+1);
  }
}
