// Iterator abstracts out iteration

var people = ['Joe', 'Jane', 'Jack', 'Mack', 'Mare'];

var ITERATE = (function (iteratee) {
    var count = 0, 
        values = iteratee,
        len = iteratee.length;
    
    function iterate() {
        var tmp = count;
        count = count + 1;
            
        return values[tmp];
    }
    
    return {
        next: function () {
            var flag = this.hasNext(),
                result;
            
            if (flag) {
                result = iterate();
            } else {
                count = 0;
                
                result = iterate();
            }
            
            return result;
        },
        
        hasNext: function () {
            return (count < len)? true: false;
        }
    };
})(people);

