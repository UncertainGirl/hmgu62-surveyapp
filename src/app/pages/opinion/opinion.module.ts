import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpinionRoutingModule } from './opinion-routing.module';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';
import { OpinionComponent } from './opinion.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    OpinionComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    OpinionRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class OpinionModule { }
