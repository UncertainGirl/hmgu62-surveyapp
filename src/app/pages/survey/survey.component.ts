import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss'
})
export class SurveyComponent {
  form: FormGroup = new FormGroup({
    favoriteColor: new FormControl(''),
    birthYear: new FormControl(''),
    option: new FormControl('')
  });

  submit() {
    console.log(this.form.value);
  }

  yourValue(){
  
  }
}
