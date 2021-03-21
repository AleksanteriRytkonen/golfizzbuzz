import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GolComponent } from './gol/gol.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', redirectTo: 'gol', pathMatch: 'full' },
  { path: 'gol', component: GolComponent },
  { path: 'fizz', component: FizzbuzzComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzComponent,
    GolComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
