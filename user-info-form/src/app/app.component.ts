import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userInfoForm: FormGroup;
  submitted = false;
  maritalStatusChecked = 'Single';
  // maritalStatus;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      addressDuration: ['', Validators.required],
      maritalStatus: ['', Validators.required],
    });
  }

  get getUserInfoForm() { return this.userInfoForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userInfoForm.invalid) {
      return;
    }
  }

  onMaritalStatus(value: string) {
    this.maritalStatusChecked = value;
  }
}
