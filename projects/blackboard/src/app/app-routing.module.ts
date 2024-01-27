import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SubscriptionPageComponent } from './pages/subscription-page/subscription-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'subscription', component: SubscriptionPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
