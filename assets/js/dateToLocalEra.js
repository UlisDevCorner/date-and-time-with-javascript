/*** Era ***/
//-----------

// Era with Date & Time
document.querySelector('.date-local-string-era').innerHTML = new Date().toLocaleString(undefined, {era: 'long'});

// Era with Time
document.querySelector('.date-local-string-era-time').innerHTML = new Date().toLocaleTimeString(undefined, {era: 'long'});

// Era, Only
document.querySelector('.date-local-string-era-only').innerHTML = new Date().toLocaleTimeString(undefined, {era: 'long'}).split(',')[0];
