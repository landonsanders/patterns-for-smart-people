// You can chain object method one after another with a dot

var person = {
    name: undefined,
    
    setName: function (name) {
        this.name = name;
        return this;
    },
    
    getName: function () {
        return this.name;
    }
};

var name = person.setName('Joe Doe').getName();