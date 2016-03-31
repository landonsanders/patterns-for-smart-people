var CORE = {
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
        CORE.sub(function () {
            console.log('Hello, Module!');
        });
    }
};

var module2 = {
    id: 1, 
    init: function () {
        CORE.pub();
    }
};

CORE.create(module1);
CORE.create(module2);

CORE.start(0);
CORE.start(1);