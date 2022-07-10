let PAYS_EUROPE_TAB ='<table id="answers"><tr class="row"><th>Pays</th><th>Pays</th><th>Pays</th><th>Pays</th></tr>';

a = 0;
for (let i = 0 ; i < Math.ceil(PAYS_EUROPE.length / 4) ; i++) {
    PAYS_EUROPE_TAB += '<tr class="row">';
    for (let j = 0 ; j < 4 ; j++) {
        try{
            PAYS_EUROPE_TAB += '<td class="case unselectable transparent">' + PAYS_EUROPE[a].name + '</td>';
            a++;
        } catch {
            PAYS_EUROPE_TAB += '<td class="case"></td>';
        }
        
    }
    PAYS_EUROPE_TAB += '</tr>';
}
PAYS_EUROPE_TAB += '</table>';
/* <table id="answers">
  <tr class="row">
    <th>Pays</th>
    <th>Pays</th>
    <th>Pays</th>
    <th>Pays</th>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Papouasie-Nouvelle-Guinée</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
  <tr class="row">
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
    <td class="case">Test</td>
  </tr>
</table>;
 */