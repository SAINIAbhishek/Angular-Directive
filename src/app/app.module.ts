import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicAttributeDirectiveDirective } from './attribute/basic-attribute-directive.directive';
import { RendererAttributeDirectiveDirective } from './attribute/renderer-attribute-directive.directive';
import { HostlistenerAttributeDirectiveDirective } from './attribute/hostlistener-attribute-directive.directive';
import { OppositeNgifDirectiveDirective } from './structural/opposite-ngif-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicAttributeDirectiveDirective,
    RendererAttributeDirectiveDirective,
    HostlistenerAttributeDirectiveDirective,
    OppositeNgifDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
