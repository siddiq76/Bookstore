import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


 import { FlexLayoutModule } from '@angular/flex-layout';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatCardModule} from '@angular/material/card';
 import {MatInputModule} from '@angular/material/input';
 import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ClarityModule } from '@clr/angular';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './component/dialog/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteComponent } from './component/delete/delete/delete.component';
import { UpdateComponent } from './component/update/update/update.component';

import { AddbookComponent } from './component/addbook/addbook/addbook.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent,
    DeleteComponent,
    UpdateComponent,
    
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
     FlexLayoutModule,
     MatButtonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    ClarityModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
