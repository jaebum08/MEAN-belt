import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetdetailsComponent } from './petdetails/petdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    EditPetComponent,
    NewPetComponent,
    PetListComponent,
    PetdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
