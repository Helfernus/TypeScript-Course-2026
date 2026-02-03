function add(a, b) {
    return a + b;
}
// Void Type
function log(message) {
    console.log(message);
}
// Never Type
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
//Functions as Types
function performJob(someCallBackFunction) {
    //...Do something
    someCallBackFunction();
}
function performBetterJob(someCallBackFunction) {
    //...Do something
    someCallBackFunction('Job Done!');
}
performBetterJob(log);
var user = {
    name: 'Juan',
    age: 29,
    greet: function (msg) {
        console.log('Hello there!', user.name, msg);
    },
};
user.greet('How are you today!');
