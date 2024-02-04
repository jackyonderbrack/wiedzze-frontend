import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { AuthGuard } from './guards/auth.guard'
import { NewsPageComponent } from './pages/news-page/news-page.component'
import { CategoryPageComponent } from './pages/category-page/category-page.component'
import { MediaPageComponent } from './pages/media-page/media-page.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'configuration', component: ConfigurationPageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'news', component: NewsPageComponent },
      { path: 'categories', component: CategoryPageComponent },
      { path: 'media', component: MediaPageComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
