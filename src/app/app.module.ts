import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicComponent } from './basic/basic.component';
import { AdresowanieComponent } from './adresowanie/adresowanie.component';
import { StronicowanieComponent } from './stronicowanie/stronicowanie.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedComponent } from './advanced/advanced.component';
import { MarkdownModule } from 'ngx-markdown';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'advanced', component: AdvancedComponent },
  { path: 'adressing', component: AdresowanieComponent },
  { path: 'paging', component: StronicowanieComponent },
  { path: '**', redirectTo: 'basic' },
];

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AdresowanieComponent,
    StronicowanieComponent,
    AdvancedComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),

    MarkdownModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
