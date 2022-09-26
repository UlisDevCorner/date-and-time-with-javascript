/*** toLocal... Methods ***/
//--------------------------

// toLocalString
document.querySelector('.date-time-format-default').innerHTML = new Intl.DateTimeFormat().format(new Date());

// toLocalDateString
document.querySelector('.date-time-format-date-style-full').innerHTML = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date());

// toLocalTimeString
document.querySelector('.date-time-format-time-style-full').innerHTML = new Intl.DateTimeFormat('en-US', { timeStyle: 'full' }).format(new Date());
