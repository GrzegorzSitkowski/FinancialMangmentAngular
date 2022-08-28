import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/models/goals/goal.model';
import { GoalsService } from 'src/app/services/goals/goals.service';

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css']
})
export class GoalsListComponent implements OnInit {

  goals: Goal[] = [];
  constructor(private goalService: GoalsService) { }

  ngOnInit(): void {
    this.goalService.getGoals()
    .subscribe({
      next: (goalApi) => {
        this.goals = goalApi as Goal[];
        console.log(this.goals);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
