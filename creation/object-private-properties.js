// You can create an object with private properties

var counter = (function () {
    
    var count = 0;
    
    function incr() {
        var tmp = count;
        count = count + 1;
        return tmp;
    }
    
    return {
        next: function () {
            return incr();
        }
    };
}());