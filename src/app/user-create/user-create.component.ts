import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddPost( form: NgForm) {

    if (form.invalid) {
      return;
    }
    alert('submit');
    // alert(form.value.email);
    console.log(form.value.email);
    console.log(form.valid);
      // this.userServ.addPost(form.value.title, form.value.content);
      form.resetForm();
    }


}
