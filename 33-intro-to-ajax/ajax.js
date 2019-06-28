window.addEventListener('DOMContentLoaded', () => {
     const getMonstersButton = document.getElementById('get_monsters');

     getMonstersButton.addEventListener('click', () => {
         console.log("CLICKED THE BUTTON");

         const request = axios.get("https://bitmaker-monsters-api.herokuapp.com/monsters").then((response) => {
            //  console.log('Inside the then() callback');
             console.log('RESPONSE', response)
             const dataElem = document.createElement('div');
             dataElem.innerHTML = response.data;
             document.body.appendChild(dataElem);
         })
     });

    //  ------------------------------------------- 
    // PART 2: POST NEW MONSTER DATA TO THE API
    //  -------------------------------------------

    const postMonsterBtn = document.getElementById('post_monster');

    postMonsterBtn.addEventListener('click', () => {
        console.log('clicked on the post monster button');

        axios.post('https://bitmaker-monsters-api.herokuapp.com/monsters.json', {
            monster: {
                name: 'Kawactus Leanord',
                home: "Toronto, Ont",
                creepiness: 0
            }
        }).then((response) => {
            console.log('SUCCESSFUL POST ')
            console.log("response post:: ", response)
        }).catch(error => {
            console.log('error', error)
        })
    });
});
