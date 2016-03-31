// You can reuse code by extending object

function extend(object, properties) {
    
    for (var property in properties) {
        
        object[property] = properties[property];
    }
    
    return object;
}

var E = {
    callbacks: [],
    on: function (callback) {
        (this.callbacks).push(callback);
    },
    trigger: function () {
        for (var index = 0, len = this.callbacks.length; index < len; index = index + 1) {
            (this.callbacks[index])();
        }
    }
};

var events = extend({}, E);