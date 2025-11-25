import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TextInputFieldComponent } from './components/text-input-field/text-input-field.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { BusinessHourItemComponent } from './components/business-hour-item/business-hour-item.component';
import { ConfigurationListComponent } from './components/configuration-list/configuration-list.component';
import { PriceModelItemComponent } from './components/price-model-item/price-model-item.component';
import { HomeComponent } from './pages/home/home.component';
import { PanelComponent } from './components/panel/panel.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HistoryComponent } from './pages/history/history.component';
import { AdminConfigurationComponent } from './pages/admin-configuration/admin-configuration.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TextInputFieldComponent,
    MenuOptionComponent,
    BusinessHourItemComponent,
    ConfigurationListComponent,
    PriceModelItemComponent,
    HomeComponent,
    PanelComponent,
    AdminLoginComponent,
    HistoryComponent,
    AdminConfigurationComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
