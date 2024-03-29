import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { UserData } from '../../core/interfaces/user-data'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  idSearch!:string
  allUser: UserData[] = [];
  pageSize!:number;
  p!:number;
  total!:number;
  constructor(private _UsersService: UsersService) { }

  ngOnInit(): void {

    this._UsersService.idNumber.subscribe(()=>{
      this.idSearch = this._UsersService.idNumber.getValue()
    })

    this._UsersService.getAllUsers().subscribe({
      next: (res) => {
        this.allUser = res.data;
        this.pageSize = res.per_page;
        this.p = res.page;
        this.total = res.total
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  pageChanged(event:any):void{
    this._UsersService.getAllUsers(event).subscribe({
      next: (res) => {
        this.allUser = res.data;
        this.pageSize = res.per_page;
        this.p = res.page;
        this.total = res.total
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
