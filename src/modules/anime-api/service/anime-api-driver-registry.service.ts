/**
 * @Author Alexander Bassov Wed Sep 11 2024
 * @Email blackxes.dev@gmail.com
 */

import { Injectable, signal } from "@angular/core";
import { IAnimeDriver } from "./anime-api.types";

@Injectable()
export class AnimeApiDriverRegistry {
  private registry = signal<IAnimeDriver[]>([]);

  public has(driver: IAnimeDriver) {
    return this.registry().includes(driver);
  }

  public register(driver: IAnimeDriver) {
    return !this.has(driver) && !void this.registry.update((v) => [...v, driver]);
  }

  public unregister(driver: IAnimeDriver) {
    return this.has(driver) && !void this.registry.update((v) => v.filter((d) => d !== driver));
  }
}
