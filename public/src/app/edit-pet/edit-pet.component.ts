import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  pet;
  id;
  errorL;

  constructor(private _httpService: HttpService,  
              private _route: ActivatedRoute,
              private _router: Router) {}

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._httpService.getPetBy(params.id)
      .subscribe(data =>{
        console.log(params['id'])
        this.id = params['id']
        this.pet = data;      
      })
    })
  }

  editPetForm(){
    this._httpService.updatePet(this.pet)
    .subscribe(data=>{
      console.log(data);
      if(data['status'] == 'errors'){
        this.errorL = data['errors']
        console.log(this.errorL);
      }else{
      this._router.navigate(['/details/'+this.id])
      }
    });
  }
  
}
