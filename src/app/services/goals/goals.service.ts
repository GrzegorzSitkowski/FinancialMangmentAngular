import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goal } from 'src/app/models/goals/goal.model';
import { GoalAdd } from 'src/app/models/goals/goalAdd.model';
import { GoalEdit } from 'src/app/models/goals/goalEdit.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getGoals(): Observable<Goal[]>{
    return this.http.get<Goal[]>(this.baseApiUrl + '/api/goals');
  }

  addGoal(addGoalRequest: GoalAdd): Observable<GoalAdd>{
    return this.http.post<GoalAdd>(this.baseApiUrl + '/api/goals', addGoalRequest);
  }

  getGoal(id: string): Observable<GoalEdit>{
    return this.http.get<GoalEdit>(this.baseApiUrl + '/api/goals/' + id);
  }

  updateGoal(id: string, updateGoalRequest: GoalEdit): Observable<GoalEdit>{
    return this.http.put<GoalEdit>(this.baseApiUrl + '/api/goals/' + id, updateGoalRequest);
  }

  deleteGoal(id: string): Observable<GoalEdit>{
    return this.http.delete<GoalEdit>(this.baseApiUrl + '/api/goals/' + id);
  }
}
