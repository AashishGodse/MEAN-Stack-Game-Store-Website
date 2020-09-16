import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { GamesComponent } from "./games/games.component";
import { BetaComponent } from "./beta/beta.component";
import { DeveloperUploadComponent } from "./developer-upload/developer-upload.component";
import { AndroidGamesComponent } from "./android-games/android-games.component";
import { PcGamesComponent } from "./pc-games/pc-games.component";
import { XboxGamesComponent } from "./xbox-games/xbox-games.component";
import { UserUploadComponent } from "./user-upload/user-upload.component";
import { YourUploadComponent } from "./your-upload/your-upload.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "games",
    component: GamesComponent
  },
  {
    path: "home",
    component: HomeComponent
  },

  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "developer-upload",
    component: DeveloperUploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "android-games",
    component: AndroidGamesComponent
  },
  {
    path: "pc-games",
    component: PcGamesComponent
  },
  {
    path: "xbox-games",
    component: XboxGamesComponent
  },
  {
    path: "beta",
    component: BetaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "user-upload",
    component: UserUploadComponent
  },
  {
    path: "your-upload",
    component: YourUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
