import {Routes} from '@angular/router';
import { UserDetailsComponent } from "./user/user-details/user-details.component";
import { PlanComponent } from "./user/plan/plan.component";



export const DEMO_APP_ROUTES: Routes = [
    {
        path: 'app-user-details',
        component: UserDetailsComponent,

    },
    {
        path:'app-plan',
        component:PlanComponent
    }

];
