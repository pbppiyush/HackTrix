import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onAddPost( form: NgForm) {

    if (form.invalid) {
      return;
    }
    alert('submit');
    // alert(form.value.email);
    console.log(form.get('email').value);
    console.log(form.valid);
      // this.userServ.addPost(form.value.title, form.value.content);
      form.resetForm();
    }


}
