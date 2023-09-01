import { Item } from "@/gilded-rose copy";
import { requiredMethods } from "@/gilded-rose";

class BackstagePasses extends Item implements requiredMethods {
  constructor(name:string, sellIn: Number, quality: Number) {
    super(name, sellIn, quality);
  }

  update(): void {
    this.sellIn -= 1;
    if (this.sellIn > 0) {
      if (this.sellIn < 5) {
        this.quality += 3;
      } else if (this.sellIn < 10) {
        this.quality += 2;
      } else {
        this.quality += 1;
      }
      if (this.quality > 50) {
        this.quality = 50;
      }
    } else {
      this.quality = 0;
    } 
  }
}

export default BackstagePasses;