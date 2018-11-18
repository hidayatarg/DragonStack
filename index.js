const Dragon = require('./dragon');

const fooey = new Dragon({ 
    birthdate: new Date(), 
    nickname: 'fooey'});

const baloo = new Dragon({
    nickname: 'baloo',
    birthdate: new Date()
});

setTimeout(()=>{
    const mimar = new Dragon();
    console.log('mimar', mimar);

},3000)

const gooby = new Dragon();


console.log('fooey', fooey);
console.log('baloo', baloo);
console.log('gooby', gooby);
