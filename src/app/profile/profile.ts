import { Component } from "@angular/core"
import { FormsModule } from "@angular/forms"
@Component({
    selector:'app-profile',
    // template:`<h1>Profile Component</h1>`,  // if there are single line
    // styles:'h1{color:orange}'
    templateUrl:'./profile.html',
    styleUrl:'./profile.css',
    imports:[FormsModule]
})

export class Profile{
    name=""
    changeName(event:Event){
        const val=(event.target as HTMLInputElement).value 
        this.name=val
    }
}