document.addEventListener('DOMContentLoaded', function () {

  let robotLinks = document.querySelectorAll('.robots__robot a.robot-name');

/*  robotLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      axios.get(link.href, { headers: { 'X-Requested-With' : 'XMLHttpRequest' } })
        .then(response => {
          let data = response.data;
          let pTag = document.createElement('p');
          pTag.innerText = data.name;
          let robotBox = document.querySelector('.robots__box__details');
          robotBox.innerHTML = '';
          robotBox.appendChild(pTag);
        })
        .catch(error => {
          console.error(error);
        });
    })
  })*/

  robotLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      let html = axios.get(link.href);
      document.querySelector('#robot-details-container').innerHTML = html;
    })
  })  

  let newRobotLink = document.querySelector('#new-robot-link');

  newRobotLink.addEventListener('click', e => {
    e.preventDefault();
    let html = axios.get('/robots/new')
    document.querySelector('#robot-form-container').innerHTML = html;
  })

  let robotForm = document.querySelector('.robot-form');

  robotForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let url = robotForm.action;
    let csrf = robotForm.querySelector('input[name=csrfmiddlewaretoken]').value;
    axios({
      method: 'post',
      url: url, 
      data: {
        name: robotForm.querySelector('#robot-name').value,
        model_number: robotForm.querySelector('#robot-model-number').value,
        address: robotForm.querySelector('#robot-address').value
      },
      headers: {"X-CSRFToken": csrf}
    })
    .then(function (response) {
      console.log(response)
    })
  })

});
