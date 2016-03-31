// You can reuse properties with prototoypes

function Person(name) {
    this.name = name || 'Joe Doe';
}

Person.prototype.getName = function () {
    return this.name;
};

var person1 = new Person;
var person2 = new Person;

person1.name = 'Sue Doe';
person2.name = 'Dew Doe';

// Reuse the getName property

person1.getName();
person2.getName();