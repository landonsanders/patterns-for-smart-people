// Publish and Subscribe lets loosely-coupled objects communicate

var PubSub = {
    callbacks: [],
    publish: function () {
        for (var index = 0, len = this.callbacks.length; index < len; index = index + 1) {
            (this.callbacks[index])();
        }
    },
    subscribe: function (callback) {
     (this.callbacks).push(callback);
    }
};