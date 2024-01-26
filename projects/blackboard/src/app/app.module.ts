import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsletterPageComponent } from './pages/newsletter-page/newsletter-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListComponent } from './components/list/list.component';
import { TextComponent } from './components/text/text.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BannerComponent,
    SliderComponent,
    CategoriesComponent,
    HomePageComponent,
    NewsletterPageComponent,
    ContactPageComponent,
    NavigationComponent,
    ListComponent,
    TextComponent,
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
