define(function (require) {
    'use strict';

    var View = require('js/app/test-view');
    describe('Test View', function () {
        it('should run', function () {
            expect(require).toBeDefined();
        });

        it('should render', function () {
            var view = new View();

            view.render();

            expect(view.$el.html()).toContain('<button>');
        });

        it('should respond to clicks', function () {
            var view = new View();
            view.render();

            spyOn(view, 'onButtonClicked').andCallThrough();
            spyOn(console, 'log');

            view.ui.button.click();

            expect(console.log).toHaveBeenCalledWith('clicked');
            expect(view.onButtonClicked).toHaveBeenCalled();
        });
    });
});
