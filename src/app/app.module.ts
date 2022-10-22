import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AllArticlesComponent } from './pages/all-articles/all-articles.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { CarroselComponent } from './components/carrosel/carrosel.component';
import { TopicsComponent } from './components/topics/topics.component';
import { ArticlesHomeComponent } from './components/articles-home/articles-home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IntroHomeComponent } from './components/intro-home/intro-home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AllArticlesComponent,
    PortifolioComponent,
    CarroselComponent,
    TopicsComponent,
    ArticlesHomeComponent,
    PortfolioComponent,
    IntroHomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
