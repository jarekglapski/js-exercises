// Write if...else statement corresponding to the following switch construction:

var browser = 'IE';

    switch (browser) {
    case 'IE':
        console.log('Please, download Chrome or Firefox');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log('This browser is supported!');
        break;
    default:
        console.log('We are not able to identify your browser');
}

if(browser == 'IE') {
    console.log('Please, download Chrome or Firefox');

} else {
    if(['Chrome','Firefox','Safari','Opera'].indexOf(browser) > -1 ) {
        console.log('This browser is supported!');
    }
    else {
        console.log('We are not able to identify your browser');
    }
}