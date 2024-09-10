import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./core/app/app.component";
import { appConfig } from "./core/app/app.config";

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
