import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prof',
  imports: [],
  templateUrl: './prof.html',
  styleUrl: './prof.css'
})
export class Prof {
  constructor(private route:ActivatedRoute){}
  userName:string|null="";
  ngOnInit(){
    // // for router link
    // let name=this.route.snapshot.paramMap.get('name');

    // this.userName=name;
    //   console.log(this.userName);

  // for button
  // this.route.queryParams.subscribe(params=>{
  //   this.userName=params['name'];
  // })

  // for router
  this.route.data.subscribe(data=>{
    this.userName=data['name']
  })
  }
}
