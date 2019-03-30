import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
   public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value.email);
    console.log(this.profileForm.value.pass);
  }


//   onAddPost( form: NgForm) {

//     if (form.invalid) {
//       return;
//     }
//     alert('submit');
//     // alert(form.value.email);
//     console.log(form.get('email').value);
//     console.log(form.valid);
//       // this.userServ.addPost(form.value.title, form.value.content);
//       form.resetForm();
//     }

}
