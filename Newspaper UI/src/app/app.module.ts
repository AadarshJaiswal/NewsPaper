import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { LoginNavComponent } from './component/login-nav/login-nav.component';
import { UserlistComponent } from './component/userlist/userlist.component';
import { TableComponent } from './component/table/table.component';
import { AddVenderPopupComponent } from './component/add-vender-popup/add-vender-popup.component';
import { UpdateVendorpopupComponentComponent } from './component/update-vendorpopup-component/update-vendorpopup-component.component';
import Swal from 'sweetalert2';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {ReactiveFormsModule} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { VendorhomeComponent } from './component/vendorhome/vendorhome.component';
import { AddnewspaperPopupComponent } from './component/addnewspaper-popup/addnewspaper-popup.component';
import { UpdateNewspaperpopupComponent } from './component/update-newspaperpopup/update-newspaperpopup.component';
import { UserdashboardComponent } from './component/userdashboard/userdashboard.component';
import * as CryptoJS from 'crypto-js';  
import {CookieService} from 'ngx-cookie-service';
import { NewspaperlistComponent } from './component/newspaperlist/newspaperlist.component';
import { SubscribepopupComponent } from './component/subscribepopup/subscribepopup.component';
import { SubscriptionsComponent } from './component/subscriptions/subscriptions.component';
import { MysubscriptionsComponent } from './component/mysubscriptions/mysubscriptions.component';
import { MysubscriberlistComponent } from './component/mysubscriberlist/mysubscriberlist.component';

//  import {FormControl} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    DashboardComponent,
    LoginNavComponent,
    UserlistComponent,
    TableComponent,
    AddVenderPopupComponent,
    UpdateVendorpopupComponentComponent,
    VendorhomeComponent,
    AddnewspaperPopupComponent,
    UpdateNewspaperpopupComponent,
    UserdashboardComponent,
    NewspaperlistComponent,
    SubscribepopupComponent,
    SubscriptionsComponent,
    MysubscriptionsComponent,
    MysubscriberlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule,
    
    //  FormControl,
    //  NgModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
