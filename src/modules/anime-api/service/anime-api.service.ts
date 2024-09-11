/**
 * @Author Alexander Bassov Tue Sep 10 2024
 * @Email blackxes.dev@gmail.com
 */

import { Injectable } from "@angular/core";
import { AnilistApiV2Driver } from "../drivers/anilist-apiv2-driver.service";
import { IAnimeDriver, ISearchResult } from "./anime-api.types";

@Injectable({
  providedIn: "root",
  useFactory: () => {
    return new AnimeApiService(new AnilistApiV2Driver());
  },
})
export class AnimeApiService implements IAnimeDriver {
  constructor(private driver: IAnimeDriver) {
    if (!driver) {
      throw new Error("Not a valid anime api driver!");
    }
  }

  public searchAnimes(queryString: string): Promise<ISearchResult> {
    return this.driver.searchAnimes(queryString);
  }
}
