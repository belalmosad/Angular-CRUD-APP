import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId = '';
  userData:any;
  newUserFormGroup:any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.userId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.userData = user;
      this.newUserFormGroup = new FormGroup({
        name: new FormControl(this.userData['name'], Validators.required),
        username: new FormControl(this.userData['username'] , Validators.required),
        email: new FormControl(this.userData['email'] , Validators.required),
        phone: new FormControl(this.userData['phone'] , Validators.required),
        city: new FormControl(this.userData['address'].city , Validators.required),
        company: new FormControl(this.userData['company'].name , Validators.required),
        website: new FormControl(this.userData['website'] , Validators.required)
    
      });
    });
  }

  

  

  

  updateUser() {
    if(this.newUserFormGroup.valid) {
      let userUpdated = {
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
      this.userService.updateUser(userUpdated,this.userId).subscribe(() => {
        window.location.href = '';
      });
      
    }
  }


}
