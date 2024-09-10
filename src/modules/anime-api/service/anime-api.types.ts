/**
 * @Author Alexander Bassov Tue Sep 10 2024
 * @Email blackxes.dev@gmail.com
 */

export interface IAnimeApi {
  getAnime: (query: SearchQuery) => Anime;
  getAnimes: () => Anime[];
}

export interface Anime {
  id: string;
  title: string;
  genre: string[];
}

export interface SearchQuery {}
