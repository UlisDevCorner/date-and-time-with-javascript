/*** toLocal... Methods ***/
//--------------------------

// toLocalString
document.querySelector('.date-local-string').innerHTML = new Date().toLocaleString();

// toLocalDateString
document.querySelector('.date-local-date-string').innerHTML = new Date().toLocaleDateString();

// toLocalTimeString
document.querySelector('.date-local-time-string').innerHTML = new Date().toLocaleTimeString();
