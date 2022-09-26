/*** Time Zone Name ***/
//------------------

// Time Zone Name with Date & Time
document.querySelector('.date-local-string-time-zone-name').innerHTML = new Date().toLocaleString(undefined, {timeZoneName: 'long'});

// Time Zone Name with Date
document.querySelector('.date-local-string-time-zone-name-date').innerHTML = new Date().toLocaleDateString(undefined, {timeZoneName: 'long'});

// Time Zone Name, Only
document.querySelector('.date-local-string-time-zone-name-only').innerHTML = new Date().toLocaleDateString(undefined, {timeZoneName: 'long'}).split(',')[1];


