import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDataGridModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcitivityListComponent } from './acitivity-list/acitivity-list.component';

@NgModule({
  declarations: [AppComponent, AcitivityListComponent],
  imports: [BrowserModule, AppRoutingModule, DxDataGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
