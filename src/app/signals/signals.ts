import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
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

  // data : WritableSignal<number | string> = signal<number | string>(10);
  // data : WritableSignal<number>=signal<number>(10);
  // count:Signal<number>=computed(()=>10)
  // update(){
  //   // this.data.set("hii");
  //   this.data.update((val)=>val+1);
  // }

  // normal properties
  // x=10;
  // y=20;
  // z=this.x+this.y;

  // showValue1(){
  //   alert(this.z);
  //   this.x=100;
  //   alert(this.z);
  // }

  // signals

  // a=signal(10);
  // b=signal(20);
  // c=computed(()=>this.a()+this.b());
  // showValue(){
  //   console.log(this.c());         // we need to display as function

  //   console.log(this.c());
  // }

  // updateX(){
  //   this.a.set(200);
  // }

  // effects in angular

  userName = signal('Tanya');
  count = signal(0);
  displayHeading = false;
  toggle() {
    // this.displayHeading=!this.displayHeading;
    this.count.set(this.count() + 1);
  }
  constructor() {
    effect(() => {
      // console.log(this.userName());
      // console.log(this.count())
      if (this.count() == 2) {
        this.displayHeading = true;
        setTimeout(() => {               // want to display only for 2 sec
          this.displayHeading = false;
        },2000); 
      } else {
        this.displayHeading = false;
      }
    });
  }
}
