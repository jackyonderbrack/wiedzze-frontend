import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConfigurationPageComponent } from './pages/configuration-page/configuration-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component'
import { AuthGuard } from './guards/auth.guard'
import { NewsPageComponent } from './pages/news-page/news-page.component'
import { CategoryPageComponent } from './pages/category-page/category-page.component'
import { MediaPageComponent } from './pages/media-page/media-page.component'
import { ThemesPageComponent } from './pages/themes-page/themes-page/themes-page.component'
import { TemplatesPageComponent } from './pages/templates-page/templates-page/templates-page.component'
import { AppearancePageComponent } from './pages/appearance-page/appearance-page/appearance-page.component'
import { SettingsPageComponent } from './pages/settings-page/settings-page/settings-page.component'
import { AccountPageComponent } from './pages/account-page/account-page/account-page.component'

const routes: Routes = [
  { path: 'configuration', component: ConfigurationPageComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'news', pathMatch: 'full' },
      { path: 'news', component: NewsPageComponent },
      { path: 'categories', component: CategoryPageComponent },
      { path: 'media', component: MediaPageComponent },
      { path: 'themes', component: ThemesPageComponent },
      { path: 'templates', component: TemplatesPageComponent },
      { path: 'appearance', component: AppearancePageComponent },
      { path: 'account', component: AccountPageComponent },
      { path: 'settings', component: SettingsPageComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
