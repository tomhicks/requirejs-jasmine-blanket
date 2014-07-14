define(function (require) {
    var Marionette = require('marionette');
    var _ = require('underscore');

    var View = Marionette.ItemView.extend({
        template: _.template('<button>Hello</button><div>Yay</div>'),
        ui: {
            button: 'button'
        },
        events: {
            'click @ui.button': function () {
                this.triggerMethod('button:clicked');
            }
        },

        onButtonClicked: function () {
            console.log('clicked');
        }
    });

    return View;
});
