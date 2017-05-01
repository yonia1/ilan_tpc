import { WorkOut } from './workout';

export class WeeklyPlan {
  weekly_total: number;
  target_time: string;
  race_distance: string;
  race_date: string;
  workouts: WorkOut[];
}
