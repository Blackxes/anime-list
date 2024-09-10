import { JsonPipe } from "@angular/common";
import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TestRetrieveAnimesComponent } from "@api/anime";
import { Anilist, SearchAnime } from "@tdanks2000/anilist-wrapper";

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
  public result = signal<SearchAnime[] | undefined>(undefined);

  public async query() {
    const anilist = new Anilist();
    const result = await anilist.search.anime(this.searchQuery());
    const data = result.data.Page.media;

    this.result.set(data);
  }
}
