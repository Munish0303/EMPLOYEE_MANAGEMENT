import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayrollCalculatorComponent } from './payroll-calculator/payroll-calculator.component';
import { WorkleavesComponent } from './workleaves/workleaves.component';
import { HomeComponent } from './home/home.component';
import { NgModel } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SupportComponent } from './support/support.component';
@NgModule({
  declarations: [
    AppComponent,
    PayrollCalculatorComponent,
    WorkleavesComponent,
    HomeComponent,
    EmployeeComponent,
    SettingsComponent,
    CalendarComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
