require({
    baseUrl: '',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        backbone: 'bower_components/backbone/backbone',
        marionette: 'bower_components/marionette/lib/core/backbone.marionette',
        'backbone.babysitter': 'bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': 'bower_components/backbone.wreqr/lib/backbone.wreqr',
        underscore: 'bower_components/underscore/underscore'
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: '$'
        }
    }
});

require(['js/app/test-view', 'marionette'], function (View, Marionette) {

    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
        mainRegion: '#main'
    });

    app.addInitializer(function () {
        var view = new View();

        this.mainRegion.show(view);
    });

    app.start();
});
