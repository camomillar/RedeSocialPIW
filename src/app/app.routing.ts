import { Routes, RouterModule } from '@angular/router'

import { LinhaDoTempoComponent } from './linha-do-tempo/linha-do-tempo.component';
import { PostinputComponent } from './postinput/postinput.component';

const APP_ROUTES: Routes =[
    {path:"", redirectTo:"/linhadotempo",pathMatch:"full"},
    {path:"linhadotempo", component:LinhaDoTempoComponent},
    {path:"postar", component:PostinputComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);