import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { GamesComponent } from "./games/games.component";
import { GamesService } from "./games.service";
import { BetaComponent } from "./beta/beta.component";
import { DeveloperUploadComponent } from "./developer-upload/developer-upload.component";
import { AndroidGamesComponent } from "./android-games/android-games.component";
import { PcGamesComponent } from "./pc-games/pc-games.component";
import { XboxGamesComponent } from "./xbox-games/xbox-games.component";
import { UserUploadComponent } from "./user-upload/user-upload.component";
import { YourUploadComponent } from './your-upload/your-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    GamesComponent,
    BetaComponent,
    DeveloperUploadComponent,
    AndroidGamesComponent,
    PcGamesComponent,
    XboxGamesComponent,
    UserUploadComponent,
    YourUploadComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthService, AuthGuard, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
