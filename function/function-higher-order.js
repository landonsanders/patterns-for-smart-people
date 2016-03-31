function count() {
    var value = 0;
    
    return function () {
        var tmp = value;
        value = value + 1;
        return tmp;
    }
}

var next = count();

