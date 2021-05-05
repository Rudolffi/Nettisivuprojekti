
// hakuosoitteen vakio-osa
const apiurl = 'https://ryhmac.herokuapp.com/guests';

// lopullinen hakukysely, joka lähetetään nettiin.
let apiKysely;

// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla. (hakunappi, hakukenttä, main-elementti)
const pwdbtn = document.getElementById('pwdbtn');
const pwdspace = document.getElementById('pwd');
const kn_article = document.getElementById('kutsuttujen_nimet');

const rsvpform = document.getElementById('form');

function pwdSubmit(event) {
  event.preventDefault();
  apiKysely = apiurl;

  kn_article.innerHTML= ``; //Tyhjennetään mainElementti ennen jokaista uutta tulostusta

  /*teeHaku(apiKysely);

   */
}
rsvpform.addEventListener('submit', pwdSubmit());

/*
pwdbtn.addEventListener('click', teeKysely);

pwdspace.addEventListener('onkeyup', function(event) {
  if(event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("pwdbtn").click();
  }
});
*/



console.log('nappia on painettu');

function teeKysely() {

  //Muodostetaan URL-lähde
  apiKysely = apiurl;

  kn_article.innerHTML= ``; //Tyhjennetään mainElementti ennen jokaista uutta tulostusta

  teeHaku(apiKysely);        // parametrina lähde
}

function teeHaku(apiKysely) {
  // suoritetaan hakukysely, fetch hoitaa mahdolliset tietoliikenneongelmat.
  fetch(apiKysely).then(function(response){
    return response.json();
  }).then(function(json) {
    naytaVastaus(json);				// siirrytään varsinaisen datan käsittelyyn.
  })};

function naytaVastaus(jsonData) {
  let salasana = pwdspace.value;
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].password === salasana) {
      try {
        kn_article.innerHTML= `<h3>Hei ${jsonData[i].fname} ${jsonData[i].lname} </h3>`;
      } catch (e) {
        console.log(jsonData[i].fname)
      } break;
    } else {
      continue;
    }
  }
  console.log(jsonData);
}

  /*try {
    console.log(jsonData.guests[i].fname)
  } catch (e){
    console.log(jsonData.guests[i].fname)
  }


  kn_article.innerHTML=`<p>${jsonData[i].guests.fname}</p>`;
try {
        kn_article.innerHTML += `<h2>${jsonData.guests[i].fname}</h2><br>`
      } catch (e) {
        kn_article.innerHTML += `<h2>ei löytynyt</h2><br>`
      }

      break;
    } else {
      kn_article.innerHTML = `<p>nyteitoimi</p>`;
    }

}*/
