import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../model/team.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-liste-team',
  templateUrl: './liste-team.component.html',
  styleUrls: ['./liste-team.component.css']
})
export class ListeTeamComponent  implements OnInit {
teams!:Team[];

updatedte:Team = {
  "idTeam": 0, "nomTeam": "", 
  descriptionTeam:"",
};

@Input()
ajout:boolean=true;

teamUpdated(te:Team){
  console.log("team recue du compo update team",te);
  this.employeeService.ajouterTeam(te).
  subscribe( ()=> this.chargerTeam());
}
constructor(private employeeService : EmployeeService) { }

ngOnInit(): void {
  this.employeeService.listeTeam().
  subscribe(te => {this.teams = te._embedded.teams;
  console.log(te);
  });
}

chargerTeam(){
    this.employeeService.listeTeam().
    subscribe(te => {this.teams = te._embedded.teams;
    console.log(te);
});
}
    
updatete(te:Team){
    this.updatedte=te;
    this.ajout=false;
  }

}