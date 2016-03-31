var MEDIATOR = {
    modules: {},
    callbacks: [],
    create: function (module) {
        (this.modules)[module.id] = module;
    },
    start: function (id) {
        var module = (this.modules)[id];
        
        module.init();
    },
    sub: function (callback) {
        (this.callbacks).push(callback);
    },
    pub: function () {
        for (var index = 0, len = this.callbacks.length; index < len; index = index + 1) {
            (this.callbacks[index])();
        }
    }
};

var module1 = {
    id: 0, 
    init: function () {
        MEDIATOR.sub(function () {
            console.log('Hello, Module!');
        });
    }
};

var module2 = {
    id: 1, 
    init: function () {
        MEDIATOR.pub();
    }
};

MEDIATOR.create(module1);
MEDIATOR.create(module2);

MEDIATOR.start(0);
MEDIATOR.start(1);