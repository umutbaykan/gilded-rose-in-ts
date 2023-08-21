import { Item } from "@/gilded-rose copy";
import { requiredMethods } from "@/gilded-rose";

class Sulfuras extends Item implements requiredMethods {
  constructor(sellIn: number) {
    super("Sulfuras, Hand of Ragnaros", sellIn, 80);
  }

  update(): void {
    this.sellIn -= 1;
  }
}

export default Sulfuras;
