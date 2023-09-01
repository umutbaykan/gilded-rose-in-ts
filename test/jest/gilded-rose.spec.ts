import { Item, GildedRose } from "@/gilded-rose";
import AgedBrie from "@/components/aged-brie";
import Standard from "@/components/standard";
import Sulfuras from "@/components/sulfuras";
import Conjured from "@/components/conjured";
import BackstagePasses from "@/components/backstage";

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

  describe("sulfuras", () => {
    test("should be initialized", () => {
      const sulfuras: Sulfuras = new Sulfuras(15);
      expect(sulfuras.name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(sulfuras.sellIn).toEqual(15);
      expect(sulfuras.quality).toEqual(80);
    });

    test("loses sellIn value but not quality once updated", () => {
      const sulfuras: Sulfuras = new Sulfuras(15);
      sulfuras.update();
      expect(sulfuras.sellIn).toEqual(14);
      expect(sulfuras.quality).toEqual(80);
    });

    test("quality is not altered once item is expired", () => {
      const sulfuras: Sulfuras = new Sulfuras(0);
      sulfuras.update();
      expect(sulfuras.sellIn).toEqual(-1);
      expect(sulfuras.quality).toEqual(80);
    });
  });

  describe("conjured", () => {
    test("should be initialized", () => {
      const conjured: Conjured = new Conjured("Conjured Mana Cake", 3, 6);
      expect(conjured.name).toEqual("Conjured Mana Cake");
      expect(conjured.sellIn).toEqual(3);
      expect(conjured.quality).toEqual(6);
    });

    test("quality drops by two on a regular day", () => {
      const conjured: Conjured = new Conjured("Conjured Mana Cake", 3, 6);
      conjured.update();
      expect(conjured.sellIn).toEqual(2);
      expect(conjured.quality).toEqual(4);
    });

    test("quality drops by four on an expired day", () => {
      const conjured: Conjured = new Conjured("Conjured Mana Cake", 0, 6);
      conjured.update();
      expect(conjured.sellIn).toEqual(-1);
      expect(conjured.quality).toEqual(2);
    });
  });

  describe("backstage passes", () => {
    test("should be initialized", () => {
      const backstage: BackstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20);
      expect(backstage.name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(backstage.sellIn).toEqual(15);
      expect(backstage.quality).toEqual(20);
    });

    test("quality increases by one when sellIn > 10", () => {
      const backstage: BackstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20);
      backstage.update();
      expect(backstage.sellIn).toEqual(14);
      expect(backstage.quality).toEqual(21);
    })

    test("quality increases by two when sellIn < 10", () => {
      const backstage: BackstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 9, 48);
      backstage.update();
      expect(backstage.sellIn).toEqual(8);
      expect(backstage.quality).toEqual(50);
    })

    test("quality increases by three when sellIn < 5", () => {
      const backstage: BackstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 4, 10);
      backstage.update();
      expect(backstage.sellIn).toEqual(3);
      expect(backstage.quality).toEqual(13);
    })

    test("quality drops to 0 if sellIn date has passed", () => {
      const backstage: BackstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 0, 10);
      backstage.update();
      expect(backstage.sellIn).toEqual(-1);
      expect(backstage.quality).toEqual(0);
    })

    test("quality does not go above 50", () => {
      const backstage: BackstagePasses = new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 9, 48);
      backstage.update();
      backstage.update();
      expect(backstage.sellIn).toEqual(7);
      expect(backstage.quality).toEqual(50);
    })
  })
});
