import AgedBrie from "./components/aged-brie";
import BackstagePasses from "./components/backstage";
import Conjured from "./components/conjured";
import Standard from "./components/standard";
import Sulfuras from "./components/sulfuras";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export interface requiredMethods {
  update(): void;
}

type availableItems = Conjured | Sulfuras | Standard | BackstagePasses | AgedBrie


export class GildedRose {
  items: Array<availableItems>;

  constructor(items:availableItems[]) {
    this.items = items;
  }

  updateQuality() {
    for (let i=0; i<this.items.length; i++) {
      this.items[i].update()
    }
  }
}
