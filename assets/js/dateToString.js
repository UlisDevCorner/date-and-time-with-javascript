/* Date Object */

/*** to String ***/
//-----------------

// String
document.querySelector('.date-object-string').innerHTML = new Date().toString();

// Date String
document.querySelector('.date-object-date-string').innerHTML = new Date().toDateString();

// UTC String
document.querySelector('.date-object-utc-string').innerHTML = new Date().toUTCString();

// Time String
document.querySelector('.date-object-time-string').innerHTML = new Date().toTimeString();

// ISO String
document.querySelector('.date-object-iso-string').innerHTML = new Date().toISOString();

// ISO String slice
document.querySelector('.date-object-iso-string-slice').innerHTML = new Date().toISOString().slice(0, 16);

// ISO String slice & replace
document.querySelector('.date-object-iso-string-slice-replace')
        .innerHTML = new Date().toISOString().slice(0, 16).replace(/T/, ' - ');
