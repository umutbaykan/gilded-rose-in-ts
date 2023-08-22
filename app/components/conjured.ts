import { Item } from "@/gilded-rose copy";
import { requiredMethods } from "@/gilded-rose";

class Conjured extends Item implements requiredMethods {
  constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  update(): void {
    this.sellIn -= 1;
    this.sellIn < 0 ? (this.quality -= 4) : (this.quality -= 2);
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export default Conjured;
