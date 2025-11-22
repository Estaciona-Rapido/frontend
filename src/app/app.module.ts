import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TextInputFieldComponent } from './components/text-input-field/text-input-field.component';
import { MenuOptionComponent } from './components/menu-option/menu-option.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { BusinessHourItemComponent } from './components/business-hour-item/business-hour-item.component';
import { ConfigurationListComponent } from './components/configuration-list/configuration-list.component';
import { PriceModelItemComponent } from './components/price-model-item/price-model-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TextInputFieldComponent,
    MenuOptionComponent,
    UserHeaderComponent,
    AdminHeaderComponent,
    BusinessHourItemComponent,
    ConfigurationListComponent,
    PriceModelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
