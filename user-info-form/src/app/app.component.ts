import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userInfoForm: FormGroup;
  submitted = false;
  maritalStatusChecked = 'Single';
  titleCodeChecked = 'Mr';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userInfoForm = this.formBuilder.group({
      title: new FormControl('Mr'),
      firstName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      birthdate: ['', Validators.required],
      address: ['', Validators.required],
      addressDuration: ['', Validators.required],
      maritalStatus: new FormControl('Single')
    });
  }

  get getUserInfoForm() { return this.userInfoForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userInfoForm.invalid) {
      return;
    } else {
      alert(JSON.stringify(this.userInfoForm.value, null, 4));
    }
  }
  onTitleCode(value: string) {
    this.titleCodeChecked = value;
  }

  onMaritalStatus(value: string) {
    this.maritalStatusChecked = value;
  }
}
