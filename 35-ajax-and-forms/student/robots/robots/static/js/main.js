document.addEventListener('DOMContentLoaded', function () {

  let robotLinks = document.querySelectorAll('.robots__robot a.robot-name');

  robotLinks.forEach(link => {
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
  })

});
