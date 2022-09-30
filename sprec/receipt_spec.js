describe("Receipt", function () {

    describe("clear:", function () {
        it("clears all text from the generated-receipt div element and its children", function () {
            var receipt = Receipt();
            var div_element = $('#generated-receipt');
            div_element.append('some text that should disappear')

            receipt.clear();

            expect($('#generated-receipt').text()).toEqual('');
        });
    });

    describe("print:", function() {
        var receipt;

        beforeEach(function () {
            $('#generated-receipt').remove();
            $('body').append('<div id="generated-receipt"/>');
            receipt = Receipt();
        });

        it("prints an itemised receipt and shows total sales tax incurred", function () {
            receipt.add_item('book', 12.49);
            receipt.add_item('music CD', 14.99);
            receipt.add_item('chocolate bar', 0.85);
            receipt.print();

            expect($('#generated-item-list')).toContainHtml('1 book 12.49<br>');
            expect($('#generated-item-list')).toContainHtml('1 music CD 16.49<br>');
            expect($('#generated-item-list')).toContainHtml('1 chocolate bar 0.85<br>');
            expect($('#generated-tax')).toHaveText('Sales Taxes: 1.50');
            expect($('#generated-total')).toHaveText('Total: 29.83');
        });

        it("prints an itemised receipt and shows total import duty incurred", function () {
            receipt.add_imported_item('box of chocolates', 10.00);
            receipt.add_imported_item('bottle of perfume', 47.50);
            receipt.print();

            expect($('#generated-item-list')).toContainHtml('1 imported box of chocolates 10.50<br>');
            expect($('#generated-item-list')).toContainHtml('1 imported bottle of perfume 54.63<br>');
            expect($('#generated-tax')).toHaveText('Sales Taxes: 7.63');
            expect($('#generated-total')).toHaveText('Total: 65.13');
        });

    });

});