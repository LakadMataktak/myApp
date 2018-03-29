import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { OrderlistPage } from '../pages/orderlist/orderlist';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ViewDetailPage } from '../pages/view-detail/view-detail';
import { AuthProvider } from '../providers/auth/auth';
import { PopoverComponent } from '../components/popover/popover';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    OrderlistPage,
    ViewDetailPage,
    PopoverComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    TabsPage,
    OrderlistPage,
    ViewDetailPage,
    PopoverComponent
  ],
  providers: [ HttpClientModule, HttpClient, Camera, AuthProvider,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
