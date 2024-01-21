import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardPageRoutingModule } from './pages/dashboard-page/dashboard-page-routing.module';
import { NewsFormComponent } from './pages/dashboard-page/components/news-form/news-form.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HeaderComponent,
        FooterComponent,
        DashboardPageRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
