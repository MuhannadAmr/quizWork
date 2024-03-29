import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl:  './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
idNum!:string


  constructor(private _UsersService:UsersService){}
  ngOnInit(): void {
  }

  sendValue(){
    this._UsersService.idNumber.next(this.idNum);
  }
}
