import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsletterPageComponent } from './pages/newsletter-page/newsletter-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'newsletter', component: NewsletterPageComponent },
    { path: 'contact', component: ContactPageComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
