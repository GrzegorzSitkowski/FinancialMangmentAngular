import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalAdd } from 'src/app/models/goals/goalAdd.model';
import { GoalsService } from 'src/app/services/goals/goals.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.css']
})
export class AddGoalComponent implements OnInit {

  addGoalRequest: GoalAdd = {
    name: '',
    targetAmount: 0,
    savedAmount: 0,
    desiredDate: new Date(2022, 1, 1),
    note: '',
    categoryId: 0
  }
  constructor(private goalService: GoalsService, private router: Router) { }

  ngOnInit(): void {
  }

  addGoal(){
    this.goalService.addGoal(this.addGoalRequest)
    .subscribe({
      next: (goal) => {
        this.router.navigate(['goals']);
      }
    });
  }

}
