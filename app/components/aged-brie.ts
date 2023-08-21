import { Item } from "@/gilded-rose";
import { requiredMethods } from "@/gilded-rose";

class AgedBrie extends Item implements requiredMethods {
  constructor(sellIn: Number, quality: Number) {
    super("Aged Brie", sellIn, quality);
  }

  update(): void {
    this.sellIn -= 1;
    this.sellIn < 0 ? (this.quality += 2) : (this.quality += 1);
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export default AgedBrie;
