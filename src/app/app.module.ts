import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { New1Component } from './new1/new1.component';
import { New2Component } from './new2/new2.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { New3Component } from './new3/new3.component';
import { Form1Component } from './form1/form1.component';
import { FormsModule } from '@angular/forms';
import { New4Component } from './new4/new4.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    New1Component,
    New2Component,
    New3Component,
    New4Component,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
