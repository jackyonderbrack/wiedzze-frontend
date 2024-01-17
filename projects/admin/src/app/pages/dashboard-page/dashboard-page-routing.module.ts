import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { MediaPageComponent } from './pages/media-page/media-page.component';
import { DashboardPageComponent } from './dashboard-page.component';
const dashboardRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardPageComponent,
        children: [
            { path: 'news', component: NewsPageComponent },
            { path: 'categories', component: CategoryPageComponent },
            { path: 'media', component: MediaPageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
