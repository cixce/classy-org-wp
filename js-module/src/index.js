import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

(function( ) {
  'use strict';
  window.addEventListener('load', () => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    const items = [...document.getElementsByClassName("classy-org-activity_item-info-date")];
    for(let idx = 0; idx < items.length; ++idx) {
      const i = items[idx];
      try {
        const created = new Date(parseInt(i.getAttribute('created'), 10));
        i.innerText = timeAgo.format(created);
      } catch (e) {
        console.log(e);
      }
    }
  });
})();
