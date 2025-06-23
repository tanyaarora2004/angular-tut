import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  color="pink"
  fontSize="40"  // if we dont want px here
  headingSizeBig="80px"
  headingSizeSmall="40px"

  zoom=true

  updateHeadingSize(){
    this.zoom=!this.zoom
  }
}
