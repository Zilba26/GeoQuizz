function setPaysTab(pays) {
  a = 0;
  let tab = '<table id="answers"><tr class="row"><th>Pays</th><th>Pays</th><th>Pays</th><th>Pays</th></tr>';
  for (let i = 0; i < Math.ceil(pays.length / 4); i++) {
    tab += '<tr class="row">';
    for (let j = 0; j < 4; j++) {
      try {
        tab +=
          '<td class="case unselectable transparent">' + pays[a].name + "</td>";
        a++;
      } catch {
        
      }
    }
    tab += "</tr>";
  }
  tab += "</table>";
  return tab;
}

function setDrapeauTab(pays) {
  a = 0;
  let tab = '<table id="answers" style="width: max-content"><tr class="row"><th>Drapeaux</th><th>Pays</th><th>Drapeaux</th><th>Pays</th><th>Drapeaux</th><th>Pays</th><th>Drapeaux</th><th>Pays</th></tr>';
  for (let i = 0; i < Math.ceil(pays.length / 4); i++) {
    tab += '<tr class="row">';
    for (let j = 0; j < 4; j++) {
      try {
        tab += '<td class="caseDrapeau"><img src="' + pays[a].getDrapeau() + '"/></td>';
        tab +=
          '<td class="case unselectable transparent" onclick="setSelection(' + (4*i+j) + ')" style="white-space: nowrap;cursor: pointer;">' + pays[a].name + "</td>";
        a++;
      } catch {
        
      }
    }
    tab += "</tr>";
  }
  tab += "</table>";
  return tab;
}

function setCapitaleTab(pays) {
  a = 0;
  let tab = '<table id="answers"><tr class="row"><th>Pays</th><th>Capitales</th><th>Pays</th><th>Capitales</th><th>Pays</th><th>Capitales</th><th>Pays</th><th>Capitales</th></tr>';
  for (let i = 0; i < Math.ceil(pays.length / 4); i++) {
    tab += '<tr class="row">';
    for (let j = 0; j < 4; j++) {
      try {
        tab += '<td class="casePays">' + pays[a].name + "</td>";
        tab +=
          '<td class="case unselectable transparent">' + pays[a].capitale + "</td>";
        a++;
      } catch {
        
      }
    }
    tab += "</tr>";
  }
  tab += "</table>";
  return tab;
}

function setRegionsTab(regions) {
  a = 0;
  let tab = '<table id="answers"><tr class="row"><th>Regions</th><th>Regions</th><th>Regions</th><th>Regions</th></tr>';
  for (let i = 0; i < Math.ceil(regions.length / 4); i++) {
    tab += '<tr class="row">';
    for (let j = 0; j < 4; j++) {
      if (regions[a] != undefined) {
        tab += '<td class="case  unselectable transparent">' + regions[a] + "</td>";
        a++;
      }
    }
    tab += "</tr>";
  }
  tab += "</table>";
  return tab;
}

function setDepartementsTab (departements){
  a = 0;
  let tab = '<table id="answers"><tr class="row"><th>Departements</th><th>Departements</th><th>Departements</th><th>Departements</th></tr>';
  for (let i = 0; i < Math.ceil(departements.length / 4); i++) {
    tab += '<tr class="row">';
    for (let j = 0; j < 4; j++) {
      try {
        tab += '<td class="case unselectable transparent">' + departements[a].name + " (" + departements[a].numero + ")</td>";
        a++;
      } catch {
        
      }
    }
    tab += "</tr>";
  }
  tab += "</table>";
  return tab;
}

function setNumerosdepartementsTab(departements) {
  a = 0;
  let tab = '<table id="answers"><tr class="row"><th>Numeros</th><th>Departements</th><th>Numeros</th><th>Departements</th><th>Numeros</th><th>Departements</th><th>Numeros</th><th>Departements</th></tr>';
  for (let i = 0; i < Math.ceil(departements.length / 4); i++) {
    tab += '<tr class="row">';
    for (let j = 0; j < 4; j++) {
      try {
        tab += '<td class="caseNumero">' + departements[a].numero + "</td>";
        tab += '<td class="case unselectable transparent" onclick="setSelection(' + (4*i+j) + ')" style="white-space: nowrap;cursor: pointer;">' + departements[a].name + "</td>";
        a++;
      } catch {
        
      }
    }
    tab += "</tr>";
  }
  tab += "</table>";
  return tab;
}

const PAYS_MONDE_TAB = setPaysTab(PAYS);
const PAYS_EUROPE_TAB = setPaysTab(PAYS_EUROPE);
const PAYS_ASIE_TAB = setPaysTab(PAYS_ASIE);
const PAYS_AFRIQUE_TAB = setPaysTab(PAYS_AFRIQUE);
const PAYS_AMERIQUE_TAB = setPaysTab(PAYS_AMERIQUE);
const PAYS_OCEANIE_TAB = setPaysTab(PAYS_OCEANIE);

const DRAPEAUX_MONDE_TAB = setDrapeauTab(PAYS);
const DRAPEAUX_EUROPE_TAB = setDrapeauTab(PAYS_EUROPE);
const DRAPEAUX_ASIE_TAB = setDrapeauTab(PAYS_ASIE);
const DRAPEAUX_AFRIQUE_TAB = setDrapeauTab(PAYS_AFRIQUE);
const DRAPEAUX_AMERIQUE_TAB = setDrapeauTab(PAYS_AMERIQUE);
const DRAPEAUX_OCEANIE_TAB = setDrapeauTab(PAYS_OCEANIE);
 
const CAPITALES_MONDE_TAB = setCapitaleTab(PAYS);
const CAPITALES_EUROPE_TAB = setCapitaleTab(PAYS_EUROPE);
const CAPITALES_ASIE_TAB = setCapitaleTab(PAYS_ASIE);
const CAPITALES_AFRIQUE_TAB = setCapitaleTab(PAYS_AFRIQUE);
const CAPITALES_AMERIQUE_TAB = setCapitaleTab(PAYS_AMERIQUE);
const CAPITALES_OCEANIE_TAB = setCapitaleTab(PAYS_OCEANIE);

const REGIONS_TAB = setRegionsTab(REGIONS_LIST);
const DEPARTEMENTS_TAB = setDepartementsTab(DEPARTEMENTS);
const NUMEROS_DEPARTEMENTS_TAB = setNumerosdepartementsTab(DEPARTEMENTS);