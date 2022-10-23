import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { AllArticlesComponent } from "./pages/all-articles/all-articles.component";

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'all-articles', component: AllArticlesComponent }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}