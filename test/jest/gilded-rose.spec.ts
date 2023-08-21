import { Item, GildedRose } from '@/gilded-rose';
import AgedBrie from '@/components/aged-brie';

describe('Gilded Rose', () => {
  describe("aged brie", () => {
    test("should be initialized", () => {
      const agedBrie: AgedBrie = new AgedBrie(10, 30);
      expect(agedBrie.name).toEqual("Aged Brie");
      expect(agedBrie.sellIn).toEqual(10);
      expect(agedBrie.quality).toEqual(30);
    })

    test("quality increases as it gets older", () => {
      const agedBrie: AgedBrie = new AgedBrie(10, 30);
      agedBrie.update();
      expect(agedBrie.sellIn).toEqual(9);
      expect(agedBrie.quality).toEqual(31);
    })

    test("quality increases twice as fast when sellIn date is <0", () => {
      const agedBrie: AgedBrie = new AgedBrie(2, 0);
      agedBrie.update();
      agedBrie.update();
      agedBrie.update();
      expect(agedBrie.sellIn).toEqual(-1);
      expect(agedBrie.quality).toEqual(4);
    })

    test("does not go over 50 in quality under normal circumstances", () => {
      const agedBrie: AgedBrie = new AgedBrie(10, 49);
      agedBrie.update();
      agedBrie.update();
      expect(agedBrie.quality).toEqual(50);
    })

    test("does not go over 50 in quality when gaining double in quality", () => {
      const agedBrie: AgedBrie = new AgedBrie(-1, 49);
      agedBrie.update();
      expect(agedBrie.quality).toEqual(50);
    })
  })
});
