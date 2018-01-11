import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {

    plans = [{
      id:0,
      name:"monthly",
      price:120
    },
    {
      id:1,
      name:"weekly",
      price:40
    }];

}
