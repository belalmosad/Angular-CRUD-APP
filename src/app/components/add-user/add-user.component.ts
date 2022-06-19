import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {Router, ɵROUTER_PROVIDERS} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [ɵROUTER_PROVIDERS]
})
export class AddUserComponent implements OnInit {

  newUserFormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z ]{5,50}$/i)]),
    username: new FormControl(null, [Validators.required, Validators.pattern(/^([a-z]\d*){5,30}$/)]),
    email: new FormControl(null, [Validators.required,Validators.pattern(/^[a-z\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    phone: new FormControl(null, [Validators.required, Validators.pattern(/^(01)[0-2,5]\d{8}$/)]),
    city: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z]{3,50}$/i)]),
    company: new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9 ]{1,100}$/i)]),
    website: new FormControl(null, Validators.required)

  });


  constructor(private userService: UserService, private router: Router) { 
  }

  addNewUser() {
    if(this.newUserFormGroup.valid) {
      let newUser = {
        name: this.newUserFormGroup.controls['name'].value,
        username: this.newUserFormGroup.controls['username'].value,
        email: this.newUserFormGroup.controls['email'].value,
        address: {
          city : this.newUserFormGroup.controls['city'].value,
        },
        phone: this.newUserFormGroup.controls['phone'].value,
        website: this.newUserFormGroup.controls['website'].value,
        company: {
          name: this.newUserFormGroup.controls['company'].value
        }
      }
      this.userService.addNewUser(newUser).subscribe(() => {
        this.router.navigate(['./']);
        window.location.href = '';
      });
      
    }
  }



  ngOnInit(): void {
  }

}
