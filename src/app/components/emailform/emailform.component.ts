import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApicallService } from 'src/app/service/apicall.service';

@Component({
  selector: 'app-emailform',
  templateUrl: './emailform.component.html',
  styleUrls: ['./emailform.component.css']
})
export class EmailformComponent implements OnInit {

  mailData = {
    to: "",
    subject: "",
    messagebody: ""
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private email: ApicallService) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log("submit to backend");
    console.log(this.mailData);

  }

}



