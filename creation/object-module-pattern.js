// You can create an object with a module

var person = (function (person) {
    
    var me = person || 'Joe Doe';
    
    function getMe() {
        return me;
    }
    
    return {
        get: function () {
            return getMe;
        }
    };
})('Jane Doe');