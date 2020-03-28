import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

(function( ) {
  'use strict';
  console.log('Classsy classy sassy');
  window.addEventListener('load', () => {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    console.log('Classsy classy sassy');
    const items = [...document.getElementsByClassName("classy-org-activity_item-info-date")];
    console.log(items);
    items.forEach((i) =>{
      try {
        const created = new Date(i.getAttribute('created'));
        i.innerText = timeAgo.format(created);
      } catch (e) {
        console.log(e);
      }
    });
  });
})();
