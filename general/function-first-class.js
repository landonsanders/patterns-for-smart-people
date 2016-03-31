function call(value) {
    var fn = value;
    fn();
}


// Functions are first-class: they are values.

call(function () {
    console.log('Hello, World!');
});