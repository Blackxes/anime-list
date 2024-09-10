/**
 * @Author Alexander Bassov Tue Sep 10 2024
 * @Email blackxes.dev@gmail.com
 */

import { Component } from "@angular/core";
import { ButtonComponent } from "@shared/ui";

@Component({
  selector: "test-retrieve-animes",
  standalone: true,
  templateUrl: "./retrieve-animes-test.component.html",
  imports: [ButtonComponent],
})
export class TestRetrieveAnimesComponent {
  displayText() {
    console.log("Display some stuff");
  }
}
