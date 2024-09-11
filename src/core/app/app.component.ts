import { JsonPipe } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AnimeApiService, TestRetrieveAnimesComponent } from "@api/anime";
import { debounceTime, Subject } from "rxjs";
import { ISearchResult } from "../../modules/anime-api/service/anime-api.types";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [TestRetrieveAnimesComponent, FormsModule, JsonPipe],
})
export class AppComponent {
  public title = "Komische Animeliste";
  public searchQuery = signal<string>("");
  public result = signal<ISearchResult | undefined>(undefined);
  private searchSubject = new Subject<string>();

  constructor(private apiservice: AnimeApiService) {
    this.searchSubject
      .pipe(debounceTime(2000))
      .subscribe((searchString: string) => this.query(searchString));
  }

  public async query(queryString: string) {
    const result = await this.apiservice.searchAnimes(queryString);

    this.result.set(result);
  }

  public onSearch() {
    this.searchSubject.next(this.searchQuery());
  }
}
