import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BindingComponent } from './binding/binding.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ListeTeamComponent } from './liste-team/liste-team.component';
import { LoginComponent } from './login/login.component';
import { RechercheParTeamComponent } from './recherche-par-team/recherche-par-team.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateTeamComponent } from './update-team/update-team.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    BindingComponent,
    ForbiddenComponent,
    ListeTeamComponent,
    LoginComponent,
    SearchFilterPipe,
    RechercheParTeamComponent,
    RechercheParNomComponent,
    UpdateTeamComponent,
    RegisterComponent,
    VerifEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  providers: [
    { provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptor,
      multi : true}
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }