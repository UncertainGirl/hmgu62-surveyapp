import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SurveyRoutingModule } from './survey-routing.module';
import { FormsModule } from '@angular/forms';

import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SurveyComponent } from './survey.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule
  ]
})
export class SurveyModule { }
