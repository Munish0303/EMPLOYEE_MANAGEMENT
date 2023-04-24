import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayrollCalculatorComponent } from './payroll-calculator/payroll-calculator.component';
import { WorkleavesComponent } from './workleaves/workleaves.component';
import { EmployeeComponent } from './employee/employee.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SupportComponent } from './support/support.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workleaves', component: WorkleavesComponent },
  { path: 'payroll', component: PayrollCalculatorComponent},
  { path: 'employee',component: EmployeeComponent},
  { path: 'calendar',component: CalendarComponent},
  { path: 'support',component: SupportComponent},
  { path: 'settings',component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
