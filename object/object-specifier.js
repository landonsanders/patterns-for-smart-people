// You can specify the argument of a function with a specifier: an object

var specifier = {
    social: 'http://www.social.com/joedoe',
    web: 'http://www.joedoe.com',
    blog: 'http://joedoe.blog.com'
};


function doAbout(config) {
    var social = config.social,
        web = config.web,
        blog = config.blog;
        
    console.log('Find me on social: ' + social + '!');
    console.log('Find me on the web: ' + web + '!');
    console.log('Find my blog: ' + blog + '!');
}

doAbout(specifier);