/**
 * @Author Alexander Bassov Tue Sep 10 2024
 * @Email blackxes.dev@gmail.com
 */

export interface IAnimeDriver {
  searchAnimes: (query: string) => Promise<ISearchResult>;
}

export interface Anime {
  id: string;
  title: string;
  genre: string[];
}

export interface SearchQuery {
  query: string;
}

export type IMediaStatus = "finished" | "airing" | "halted" | "cancelled" | "not_yet_released";
export interface IMediaTitle {
  romanji?: string;
  english?: string;
  native: string;
}

export interface IAnimeSearchResult {
  title: IMediaTitle;
  genres: string[];
  imagePaths: {
    small: string;
    regular: string;
    large: string;
  };
  status: IMediaStatus;
}

export interface ISearchResult {
  items: IAnimeSearchResult[];
  pageInfo: {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
  };
  query: string;
}
