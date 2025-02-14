import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { TemplateBuilderComponent } from './template-builder/template-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    TemplateBuilderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
