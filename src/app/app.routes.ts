import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateProjectComponent } from './components/admin/create-project/create-project.component';
import { EditProjectComponent } from './components/admin/edit-project/edit-project.component';
import { CreateTeamComponent } from './components/admin/create-team/create-team.component';
import { EditTeamComponent } from './components/admin/edit-team/edit-team.component';
import { CreateModuleComponent } from './components/admin/create-module/create-module.component';
import { EditModuleComponent } from './components/admin/edit-module/edit-module.component';
import { CreateTaskComponent } from './components/admin/create-task/create-task.component';
import { EditTaskComponent } from './components/admin/edit-task/edit-task.component';



export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: 'signup',
    },
    {
        path:'createProject',
        component: CreateProjectComponent,
        title:'createProject',
    },
    {
        path:'',
        component: EditProjectComponent,
        title:'',
    },
    {
        path:'',
        component: CreateTeamComponent,
        title:'',
    },
    {
        path:'',
        component: EditTeamComponent,
        title:'',
    },
    {
        path:'',
        component: CreateModuleComponent,
        title:'',
    },
    {
        path:'',
        component: EditModuleComponent,
        title:'',
    },
    {
        path:'',
        component: CreateTaskComponent,
        title:'',
    },
    {
        path:'',
        component: EditTaskComponent,
        title:'',
    },
];
