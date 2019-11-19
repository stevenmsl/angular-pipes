import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FetchJsonPipe } from "./fetch-json.pipe";
import { ExponentialStrengthPipe } from "./exponential-strength.pipe";
import { HeroBirthdayComponent } from "./hero-birthday1.component";
import { HeroBirthday2Component } from "./hero-birthday2.component";
import { PowerBoosterComponent } from "./power-booster.component";
import { PowerBoostCalculatorComponent } from "./power-boost-calculator.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FetchJsonPipe,
    ExponentialStrengthPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
