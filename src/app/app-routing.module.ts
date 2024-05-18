import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/services/auth.guard';

const routes: Routes = [
      { path: 'main', 
      loadChildren: () => import('./pages/main/main.module')
      .then(m => m.MainModule) },
      
      { path: 'survey', 
      loadChildren: () => import('./pages/survey/survey.module')
      .then(m => m.SurveyModule), canActivate: [authGuard] },      

      { path: 'opinion', 
      loadChildren: () => import('./pages/opinion/opinion.module')
      .then(m => m.OpinionModule), canActivate: [authGuard] },

      { path: 'contact', 
      loadChildren: () => import('./pages/contact/contact.module')
      .then(m => m.ContactModule), canActivate: [authGuard] },

      { path: 'not-found', 
      loadChildren: () => import('./pages/not-found/not-found.module')
      .then(m => m.NotFoundModule) },

      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },

      {
        path: '**',
        redirectTo: '/not-found'
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
