document.addEventListener('DOMContentLoaded', function() {
  // Function scope

  let count = 0;
  const colors = ['tomato', 'azure', 'green', 'orange', 'purple', 'chartreuse', 'gold', 'fuschia'];

  const container = document.querySelector('#container');

  container.addEventListener('click', function(e) {
    if(e.target.classList.contains('circle')) {
      e.target.remove();
    }
  });

  const boxMaker = document.querySelector('#box-maker');

  boxMaker.addEventListener('click', function() {
      const x = Math.ceil(Math.random() * 400),
          y = Math.ceil(Math.random() * 200),
          c = Math.ceil(Math.random() * 7);

      const circle = document.createElement('div');

      circle.className = 'circle';

      circle.style.top = y + 'px';
      circle.style.left = x + 'px';
      circle.style.backgroundColor = colors[c];

      circle.innerHTML = count++;

      // WE WON! It worked!!
      // One consideration: We can potentially have infinite amount of listeners
      // That's expensive for the browser.
      // circle.addEventListener('click', function(e) {
      //   console.log(e);
      //   e.target.remove();
      // });

      container.append(circle);

      console.log('link was clicked');
  });

  // ⚠️ This didn't work because when the page initially loads, we have no circles there.
  // We need to find another solution that'll add the event listeners to the circles
  // once the circles are added to the page.
  // const circles = document.querySelectorAll('.circle');
  //
  // circles.forEach(function(circle) {
  //   circle.addEventListener('click', function(e) {
  //     console.log("circle is clicked");
  //     console.log(e);
  //
  //     e.remove();
  //   })
  // });
});
