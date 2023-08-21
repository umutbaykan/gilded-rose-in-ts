import { Item } from "@/gilded-rose copy";
import { requiredMethods } from "@/gilded-rose";

class Standard extends Item implements requiredMethods {
  constructor(name: String, sellIn: Number, quality: Number) {
    super(name, sellIn, quality);
  }

  update(): void {
    this.sellIn -= 1;
    this.sellIn < 0 ? (this.quality -= 2) : (this.quality -= 1);
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export default Standard;
