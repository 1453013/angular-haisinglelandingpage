import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
//import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from "./app.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {PageHeaderComponent} from "./page-header/page-header.component";
import {PageDownloadComponent} from "./page-download/page-download.component";
import {PageFeaturesComponent} from "./page-features/page-features.component";
import {PageCtaComponent} from "./page-cta/page-cta.component";
import {PageContactComponent} from "./page-contact/page-contact.component";
import {PageFooterComponent} from "./page-footer/page-footer.component";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PageHeaderComponent,
    PageDownloadComponent,
    PageFeaturesComponent,
    PageCtaComponent,
    PageContactComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
