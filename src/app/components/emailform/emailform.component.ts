import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    message: ""
  }

  flag = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private email: ApicallService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitForm() {
    console.log("submit to backend");
    console.log(this.mailData);
    if ((this.mailData.message == '' && this.mailData.subject == '') || this.mailData.to == '') {
      this.snack.open("Either Subject and Mail body or Recipient cannot be empty", "OK", { duration: 1000, });
      return;
    }
    this.flag = true;
    this.email.sendEmail(this.mailData).subscribe(
      response => {
        console.log(response);
        this.flag = false;
        this.snack.open("Email sent successfully", "OK", { duration: 1000, });
      },
      error => {
        console.log(error);
        this.flag = false;
        this.snack.open("Falied to send email", "OK", { duration: 1000, });
      }
    )
  }

}



