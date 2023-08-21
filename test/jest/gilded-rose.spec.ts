import { Item, GildedRose } from "@/gilded-rose";
import AgedBrie from "@/components/aged-brie";
import Standard from "@/components/standard";

describe("Gilded Rose", () => {
  describe("aged brie", () => {
    test("should be initialized", () => {
      const agedBrie: AgedBrie = new AgedBrie(10, 30);
      expect(agedBrie.name).toEqual("Aged Brie");
      expect(agedBrie.sellIn).toEqual(10);
      expect(agedBrie.quality).toEqual(30);
    });

    test("quality increases as it gets older", () => {
      const agedBrie: AgedBrie = new AgedBrie(10, 30);
      agedBrie.update();
      expect(agedBrie.sellIn).toEqual(9);
      expect(agedBrie.quality).toEqual(31);
    });

    test("quality increases twice as fast when sellIn date is <0", () => {
      const agedBrie: AgedBrie = new AgedBrie(2, 0);
      agedBrie.update();
      agedBrie.update();
      agedBrie.update();
      expect(agedBrie.sellIn).toEqual(-1);
      expect(agedBrie.quality).toEqual(4);
    });

    test("does not go over 50 in quality under normal circumstances", () => {
      const agedBrie: AgedBrie = new AgedBrie(10, 49);
      agedBrie.update();
      agedBrie.update();
      expect(agedBrie.quality).toEqual(50);
    });

    test("does not go over 50 in quality when gaining double in quality", () => {
      const agedBrie: AgedBrie = new AgedBrie(-1, 49);
      agedBrie.update();
      expect(agedBrie.quality).toEqual(50);
    });
  });

  describe("standard item", () => {
    test("should be initialized", () => {
      const standard: Standard = new Standard("Some Item", 15, 15);
      expect(standard.name).toEqual("Some Item");
      expect(standard.sellIn).toEqual(15);
      expect(standard.quality).toEqual(15);
    });

    test("loses one quality and one sellIn on a regular day", () => {
      const standard: Standard = new Standard("Some Item", 15, 15);
      standard.update();
      expect(standard.sellIn).toEqual(14);
      expect(standard.quality).toEqual(14);
    });

    test("loses two quality points once sellIn date has expired", () => {
      const standard: Standard = new Standard("Some Item", 1, 15);
      standard.update();
      standard.update();
      expect(standard.sellIn).toEqual(-1);
      expect(standard.quality).toEqual(12);
    });

    test("quality does not drop below 0", () => {
      const standard: Standard = new Standard("Some Item", 1, 0);
      standard.update();
      expect(standard.sellIn).toEqual(0);
      expect(standard.quality).toEqual(0);
    });
  });
});
