define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var _ = require('underscore');

    var View = Marionette.ItemView.extend({
        template: _.template('<button>Hello</button><div>Yay</div>'),
        ui: {
            button: 'button'
        },
        events: {
            'click @ui.button': function () {
                var x = (true) ? true : false;
                if (x) {
                    this.triggerMethod('button:clicked');
                } else {
                    this.triggerMethod('something:else');
                }
            }
        },

        onButtonClicked: function () {
            console.log('clicked');
        }
    });

    return View;
});
