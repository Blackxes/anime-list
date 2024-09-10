/**
 * @Author Alexander Bassov Tue Sep 10 2024
 * @Email blackxes.dev@gmail.com
 */

import { Component, ElementRef, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "ui-button",
  standalone: true,
  template: "<button><ng-content /></button>",
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  public constructor(private element: ElementRef<HTMLButtonElement>) {
    element.nativeElement.classList.add(
      // Base
      "p-2",
      "block",
      "w-fit",
      "rounded",
      // Beautify
      "bg-blue-200",
      // Hovers
      "hover:bg-blue-300",
      "hover:cursor-pointer"
    );
  }
}
