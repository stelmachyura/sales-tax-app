describe("ImportedItem", function () {

    describe("tax:", function () {
        it("includes 5% import duty on boxes of chocolates", function () {
            var chocolates = ImportedItem('box of chocolates', 10.00);
            expect(chocolates.tax()).toEqual(0.50);
        });

        it("includes 5% import duty on bottles of perfume in addition 10% sales tax", function () {
            var perfume = ImportedItem('bottle of perfume', 47.50);

            expect(perfume.tax()).toEqual(7.13);
        });
    });
});