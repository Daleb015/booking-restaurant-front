import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/booking/booking.component';
import { ExploreComponent } from './components/explore/explore.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';




const appRoutes: Routes = [
  { path: '', component: ExploreComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'cancel', component: CancelComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ExploreComponent,
    CancelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
      ),
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
