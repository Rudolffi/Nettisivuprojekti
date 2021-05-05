
// hakuosoitteen vakio-osa
const apiurl = 'https://ryhmac.herokuapp.com/guests';


// Etsitään HTML-sivulta tarvittavat komponentit id:n avulla. (hakunappi, hakukenttä, main-elementti)
const kn_article = document.getElementById('kutsuttujen_nimet');
const typepwd = document.getElementById('typepwd'); // tekstikenttä, johon salasana syötetään
const pwdbtn = document.getElementById('pwdbtn'); // pwd nappi

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
    naytaVastaus(json);				// siirrytään varsinaisen datan käsittelyyn.
  })};

function naytaVastaus(jsonData) {
kn_article.innerHTML=``;
  let salasana = typepwd.value;
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i].password === salasana) {
      try {
        if(jsonData[i].a_fname != null && jsonData[i].a_lname != null){
          if(jsonData[i].lname === jsonData[i].a_lname){
            kn_article.innerHTML += `<h3>Hei ${jsonData[i].fname} & ${jsonData[i].a_fname} ${jsonData[i].lname}!</h3>`;

          }else{
            kn_article.innerHTML += `<h3>Hei ${jsonData[i].fname} ${jsonData[i].lname} & ${jsonData[i].a_fname} ${jsonData[i].a_lname}!</h3>`;
          }
        }else {
          kn_article.innerHTML += `<h3>Hei ${jsonData[i].fname} ${jsonData[i].lname}!</h3>`;
        }
      } catch (e) {
        kn_article.innerHTML += `<p>Tarkistaisitteko salasananne</p>`;
      } break;
    } else {
      continue;
    }
  }
  typepwd.style.display = "none"; // piiloitetaan typepwd
  pwdbtn.style.display = "none"; // piiloitetaan pwdbtn
}


