import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalEdit } from 'src/app/models/goals/goalEdit.model';
import { GoalsService } from 'src/app/services/goals/goals.service';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.css']
})
export class EditGoalComponent implements OnInit {

  goalDetails: GoalEdit = {
    id: '',
    name: '',
    targetAmount: 0,
    savedAmount: 0,
    date: new Date(2022,1,1),
    note: '',
    categoryId: 0
  };

  constructor(private route: ActivatedRoute, private goalService: GoalsService ,private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.goalService.getGoal(id)
          .subscribe({
            next: (response) => {
              this.goalDetails = response;
              console.log('Id: ' + this.goalDetails.id);
            }
          });
        }
      }
    })
  }

  updateGoal(){
    this.goalService.updateGoal(this.goalDetails.id, this.goalDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['goals']);
      }
    });
  }

  deleteGoal(id: string){
    this.goalService.deleteGoal(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['goals']);
      }
    })
  }

}
