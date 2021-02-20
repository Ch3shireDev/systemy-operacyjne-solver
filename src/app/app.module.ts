import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicComponent } from './basic/basic.component';
import { AdresowanieComponent } from './adresowanie/adresowanie.component';
import { StronicowanieComponent } from './stronicowanie/stronicowanie.component';
import { Router, ActivatedRoute, ParamMap, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'first-component', component: BasicComponent },
  { path: 'first-component', component: AdresowanieComponent },
  { path: 'second-component', component: StronicowanieComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AdresowanieComponent,
    StronicowanieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })  // .../#/crisis-center/
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
