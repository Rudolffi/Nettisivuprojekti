'use strict';

//API-HAUN MUUTTUJAT
const apiurl = 'https://ryhmac.herokuapp.com/guests'; // APIn url
const kn_article = document.getElementById('kutsuttujen_nimet');
const typepwd = document.getElementById('typepwd'); // tekstikenttä, johon salasana syötetään
const pwdbtn = document.getElementById('pwdbtn'); // pwd nappi

//RADIONAPPIEN MUUTTUJAT
const rbs = document.querySelectorAll('input[name="attend"]'); // radionapit nipussa
const rbbtn = document.getElementById('rbbtn'); // radionappien enternappi
const rbdiv = document.getElementById('radionapit');
rbdiv.style.display = "none"; // rbt piiloon sivun latautuessa (tulevat myöhemmin näkyviin)

//SPOSTILOMAKKEEN MUUTTUJAT
const mailForm = document.getElementById('sposti'); //sähköpostilomake
const msgname = document.getElementById('msgfrom'); // sähköpostikenttä
const msgSub = document.getElementById('spostiOtsikko'); // sähköpostin otsikkokenttä
const msgSubStrt = 'RSVP! : ';  // listätään myöhemmin sähköpostin otsikkokenttään
mailForm.style.display = "none";  //sähköpostilomake piiloon sivun latautuessa (tulee myöhemmin näkyviin)

//TIETOJEN HAKU API:STA -SKRIPTI

function pwdSubmit(e) {
  console.log('painoitnappia');
  e.preventDefault();
  teeHaku(apiurl);
}
pwdbtn.addEventListener('click', pwdSubmit);

function teeHaku(apiurl) {
  // suoritetaan hakukysely, fetch hoitaa mahdolliset tietoliikenneongelmat.
  fetch(apiurl).then(function(response){
    return response.json();
  }).then(function(json) {
    naytaVastaus(json);	// siirrytään varsinaisen datan käsittelyyn.
  })}

function naytaVastaus(jsonData) {
kn_article.innerHTML=``;
  const salasana = typepwd.value;
  msgname.value = typepwd.value;

  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].password === salasana) {
      try {
        if(jsonData[i].a_fname != null && jsonData[i].a_lname != null){
          if(jsonData[i].lname === jsonData[i].a_lname){
            kn_article.innerHTML += `<h3>Hei ${jsonData[i].fname} & ${jsonData[i].a_fname} ${jsonData[i].lname}!</h3>`;
            jatka();
          }else{
            kn_article.innerHTML += `<h3>Hei ${jsonData[i].fname} ${jsonData[i].lname} & ${jsonData[i].a_fname} ${jsonData[i].a_lname}!</h3>`;
            jatka();
          }
        }else {
          kn_article.innerHTML += `<h3>Hei ${jsonData[i].fname} ${jsonData[i].lname}!</h3>`;
          jatka();
        }
      } catch (e) {
        kn_article.innerHTML += `<p>Tarkistaisitteko salasananne</p>`;
      } break;
    } else {
      continue;
    }
  }
}
function jatka(){
  typepwd.style.display = "none"; // piiloitetaan typepwd
  pwdbtn.style.display = "none";  // piiloitetaan pwdbtn
  rbdiv.style.display = "block";  // rd-napit näkyviin
}

// RADIONAPPEIN SKRIPTI

let valittuRd; // valittu radio

function rbSubmit(){
  for (const rb of rbs){
    if(rb.checked){
      valittuRd = rb.value;
      msgSub.value = msgSubStrt + valittuRd;
      console.log('radionappi: ' + valittuRd);
      break;
    }
  }
  rbdiv.style.display = "none"; // rdt piiloon
  mailForm.style.display = "block"; // sähköpostikentät esille
}

rbbtn.addEventListener('click', rbSubmit);
