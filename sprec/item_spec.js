describe("Item", function () {

    describe("tax:", function () {
        it("is 0 on all books", function () {
            var book = new Item('book', 1.99);

            expect(book.tax()).toEqual(0);
        });

        it("is 0 on all chocolate bars", function () {
            var chocolate_bar = new Item('chocolate bar', 1.99);

            expect(chocolate_bar.tax()).toEqual(0);
        });

        it("is 0 on all packets of headache pills", function () {
            var headache_pills = new Item('packet of headache pills', 4.60);

            expect(headache_pills.tax()).toEqual(0);
        });

        it("is 10% of shelf price on all music CDs", function () {
            var music_CD = new Item('music CD', 1.50);

            expect(music_CD.tax()).toEqual(0.15);
        });

        it("rounds up to the nearest 0.05", function () {
            var music_CD = new Item('music CD', 1.90);

            expect(music_CD.tax()).toEqual(0.2);
        });

    });
});