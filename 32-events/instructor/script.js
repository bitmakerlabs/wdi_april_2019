document.addEventListener('DOMContentLoaded', function() {

  // 1. Let's add our first event handlers to this simple document
  const clickBait = document.querySelector('#click-bait');

  // 2. Add an event listener to clickBait and ...
  //    implement the callback with an anonymous function
  clickBait.addEventListener('click', function(event) {
    alert("I've been clicked!");

    event.preventDefault();
  });


  // 3. Select the `second-level` element
  const secondLevel = document.querySelector('#second-level');


  // 4. Add an event listener to secondLevel and ...
  //    implement the callback with a function definition
  const handleSecondLevelClick = function(e) {
    alert('second level clicked!');

    e.stopPropagation();
  }

  secondLevel.addEventListener('click', handleSecondLevelClick)



  // 5. Select the `first-level` element
  const firstLevel = document.querySelector('#first-level');

  // 6. Add an event listener to the firstLevel and ...
  //    implement the callback with a function declaration
  function handleFirstLevelClick () {
    alert('first level is clicked!!!');
  }

  firstLevel.addEventListener('click', handleFirstLevelClick);




  // 7. Check out the `event` object:
    // => Google MDN addEventListener
    // => https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

    // QQ: Our default behaviour of the link routes us to Google, can we stop the default behaviour?
    // (Check out preventDefault)

    // QQ: What default behaviours will you want to prevent typically? There are mainly 2:
    // (1: links ... 2. _ _ _ _ _? (rhymes with torms lol) )

    // QQ: Can we stop the event from bubbling up the DOM?
    // => https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

    // QQ: Does order of including our JavaScript matter?
    // DOMContentLoaded => https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

    // Refrence to all browser events: https://developer.mozilla.org/en-US/docs/Web/Events

    // Example from earlier: https://codepen.io/fightingtheboss/pen/BNajOr

});
