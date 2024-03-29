import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { UserData } from '../../core/interfaces/user-data'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userId!:number
  userInfo!:UserData
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _UsersService:UsersService
  ){}

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next:(res)=>{
       this.userId = res["id"];
        this._UsersService.getSpecUser(this.userId).subscribe({
          next:(res)=>{
            this.userInfo = res.data
          },
          error:(err)=>{console.log(err);
          }
        })
      }
    })
  }
}
