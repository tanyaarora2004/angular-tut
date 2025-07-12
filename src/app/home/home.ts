import { Component } from '@angular/core';
import { Prof } from '../prof/prof';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router:Router){}

  // // to pass data with button
  // goToProfile(){
  //   this.router.navigate(['prof'],{queryParams:{name:'Tanya'}})
  // }
}
