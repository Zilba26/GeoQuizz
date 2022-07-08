function retour() {
  window.location.href = "index.html";
}

function getType(nb) {
  switch (nb) {
    case "0":
      return "Pays ";
    case "1":
      return "Drapeaux ";
    case "2":
      return "Capitales ";
    default:
      return "error";
  }
}

function getEndroit(nb) {
  switch (nb) {
    case "0":
      return "du monde";
    case "1":
      return "d'Europe";
    case "2":
      return "d'Asie";
    case "3":
      return "d'Afrique";
    case "4":
      return "d'Amérique";
    case "5":
      return "d'Oceanie";
    default:
      return "error";
  }
}

function getAnswers(endroit) {
  switch (endroit) {
    case "0":
      return PAYS;
    case "1":
      return PAYS_EUROPE;
    case "2":
      return PAYS_ASIE;
    case "3":
      return PAYS_AFRIQUE;
    case "4":
      return PAYS_AMERIQUE;
    case "5":
      return PAYS_OCEANIE;
    default:
      return "error";
  }
}

document.title =
  getType(localStorage.getItem("type")) +
  getEndroit(localStorage.getItem("endroit"));
paysTrouve = getAnswers(localStorage.getItem("endroit"));
const pays = [].concat(paysTrouve);
document.getElementById("avancement").innerHTML = "0/" + paysTrouve.length;
let avancement = 0;

function autoValidation() {
  document.getElementById("registered_answer").style.display = "none";
  document.getElementById("bad_answer").style.display = "none";
  const reponse = document.getElementById("input_answer").value;
  if (localStorage.getItem("type") == "0") {
    for (let i = 0; i < paysTrouve.length; i++) {
      if (compare(reponse, paysTrouve[i].name)) {
        avancement++;
        document.getElementById("avancement").innerHTML =
          avancement + "/" + pays.length;
        document.getElementById("input_answer").value = "";
        document.getElementById("last_country").innerHTML =
          "Dernier pays trouvé: " + paysTrouve[i].name;
        paysTrouve.splice(i, 1);
        win();
        return;
      }
    }
  } else if (localStorage.getItem("type") == "2") {
    for (let i = 0; i < paysTrouve.length; i++) {
      if (compare(reponse, paysTrouve[i].capitale)) {
        avancement++;
        document.getElementById("avancement").innerHTML =
          avancement + "/" + pays.length;
        document.getElementById("input_answer").value = "";
        document.getElementById("last_country").innerHTML =
          "Derniere capitale trouvé: " +
          paysTrouve[i].capitale +
          " (" +
          paysTrouve[i].name +
          ")";
        paysTrouve.splice(i, 1);
        win();
        return;
      }
    }
  }
}

function validation() {
  document.getElementById("registered_answer").style.display = "none";
  document.getElementById("bad_answer").style.display = "none";
  const reponse = document.getElementById("input_answer").value;
  if (localStorage.getItem("type") == "0") {
    for (let i = 0; i < paysTrouve.length; i++) {
      if (reponse.toLowerCase() == paysTrouve[i].name.toLowerCase()) {
        avancement++;
        document.getElementById("avancement").innerHTML =
          avancement + "/" + pays.length;
        document.getElementById("input_answer").value = "";
        document.getElementById("last_country").innerHTML =
          "Dernier pays trouvé: " + paysTrouve[i].name;
        paysTrouve.splice(i, 1);
        return;
      }
    }
    for (let i = 0; i < pays.length; i++) {
      if (reponse.toLowerCase() == pays[i].name.toLowerCase()) {
        document.getElementById("registered_answer").style.display = "block";
        return;
      }
    }
    document.getElementById("bad_answer").style.display = "block";
  } else if (localStorage.getItem("type") == "2") {
    for (let i = 0; i < paysTrouve.length; i++) {
      if (reponse.toLowerCase() == paysTrouve[i].capitale.toLowerCase()) {
        avancement++;
        document.getElementById("avancement").innerHTML =
          avancement + "/" + pays.length;
        document.getElementById("input_answer").value = "";
        document.getElementById("last_country").innerHTML =
          "Derniere capitale trouvé: " +
          paysTrouve[i].capitale +
          " (" +
          paysTrouve[i].name +
          ")";
        paysTrouve.splice(i, 1);
        return;
      }
    }
    for (let i = 0; i < pays.length; i++) {
      if (reponse.toLowerCase() == pays[i].capitale.toLowerCase()) {
        document.getElementById("registered_answer").style.display = "block";
        return;
      }
    }
    document.getElementById("bad_answer").style.display = "block";
  }
}

function win() {
  if (paysTrouve.length == 0) {
    document.querySelector("section div").innerHTML =
      '<img src="img/win.gif" style="width: 100%; heigth: auto;">';
  }
}

function compare(value, paysName) {
  value = value.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");
  paysName = paysName.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "");
  value = value.replaceAll("-", " ");
  paysName = paysName.replaceAll("-", " ");
  value = value.toLowerCase();
  paysName = paysName.toLowerCase();
  if (paysName.startsWith("chi")) {
    console.log(paysName);
    console.log(value);
  }
  return value == paysName;
}

const input_answer = document.getElementById("input_answer");
input_answer.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    validation();
  }
});
