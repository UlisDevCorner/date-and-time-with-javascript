/*** Date.toLocale...String() Method ***/
//---------------------------------------

// Year
document.querySelector('.date-local-string-year').innerHTML = new Date().toLocaleString(undefined, { year: 'numeric' });

// Full Date
document.querySelector('.date-local-string-full-date').innerHTML = new Date().toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
);

// Full Date, Replace
document.querySelector('.date-local-string-full-date-replace').innerHTML = new Date().toLocaleString(undefined, {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }
).replace(/,/, ' - ');

// Full Date with Buddhist calendar in English
document.querySelector('.date-local-string-buddhist-undefined').innerHTML = new Date().toLocaleString(undefined, {
    calendar: 'buddhist',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
);

// Full Date with Buddhist calendar in Thai
document.querySelector('.date-local-string-buddhist-thai').innerHTML = new Date().toLocaleString('th-TH', {
    calendar: 'buddhist',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
);

// Full Date with Buddhist calendar in Thai
document.querySelector('.date-local-string-buddhist-all-thai').innerHTML = new Date().toLocaleString('th-TH', {
    calendar: 'buddhist',
    numberingSystem: 'thai',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
);

// Full Date with Time in Time Zone
document.querySelector('.date-local-string-full-date-time-time-zone').innerHTML = new Date().toLocaleString(undefined, {
    timeZone: 'America/New_York',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
);
