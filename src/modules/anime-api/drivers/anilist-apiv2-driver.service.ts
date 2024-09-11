/**
 * @Author Alexander Bassov Wed Sep 11 2024
 * @Email blackxes.dev@gmail.com
 */

import { Anilist, MediaStatus, MediaTitle, SearchAnime } from "@tdanks2000/anilist-wrapper";
import {
  IAnimeDriver,
  IAnimeSearchResult,
  IMediaStatus,
  IMediaTitle,
  ISearchResult,
} from "../service/anime-api.types";

export class AnilistApiV2Driver implements IAnimeDriver {
  private anilist: Anilist;

  constructor() {
    this.anilist = new Anilist();
  }

  private getMappedTitle(title: MediaTitle): IMediaTitle {
    return {
      native: title.native,
      english: title.english ?? undefined,
      romanji: title.romaji,
    };
  }

  private getMappedStatus(status: (typeof MediaStatus)[keyof typeof MediaStatus]): IMediaStatus {
    if (status == "FINISHED") return "finished";
    else if (status == "RELEASING") return "airing";
    else if (status == "NOT_YET_RELEASED") return "not_yet_released";
    else if (status == "CANCELLED") return "cancelled";
    else if (status == "HIATUS") return "halted";

    throw new Error("Unknown status " + status);
  }

  private getMappedAnimeResults(animes: SearchAnime[]): IAnimeSearchResult[] {
    return animes.map<IAnimeSearchResult>((v) => ({
      genres: v.genres,
      imagePaths: {
        large: v.coverImage.extraLarge,
        regular: v.coverImage.large,
        small: v.coverImage.medium,
      },
      status: this.getMappedStatus(v.status),
      title: this.getMappedTitle(v.title),
    }));
  }

  public async searchAnimes(query: string): Promise<ISearchResult> {
    const result = await this.anilist.search.anime(query);
    const { media, pageInfo } = result.data.Page;

    return {
      items: this.getMappedAnimeResults(media),
      pageInfo,
      query,
    };
  }
}
