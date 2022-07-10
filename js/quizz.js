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
let selection = paysTrouve[0];
if (localStorage.getItem("type") == "1") {
  const flag = document.getElementById("flag");
  flag.src = selection.getDrapeau();
  const element = document.getElementsByClassName("case")[0];
  element.classList.add("selectable");
}

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

        const index = pays.indexOf(paysTrouve[i]);
        const element = document.getElementsByClassName("case")[index];
        element.classList.remove("unselectable");
        element.classList.remove("transparent");

        paysTrouve.splice(i, 1);
        win();
        return;
      }
    }
  } else if (localStorage.getItem("type") == "1") {
    if (compare(reponse, selection.name)) {
      const i = paysTrouve.indexOf(selection);
      avancement++;
      document.getElementById("avancement").innerHTML =
        avancement + "/" + pays.length;
      document.getElementById("input_answer").value = "";
      document.getElementById("last_country").innerHTML =
        "Dernier pays trouvé: " + paysTrouve[i].name;

      const index = pays.indexOf(paysTrouve[i]);
      const element = document.getElementsByClassName("case")[index];
      element.classList.remove("unselectable");
      element.classList.remove("transparent");
      element.classList.remove("selectable");

      paysTrouve.splice(i, 1);
      nextSelection(i);
      win();
      return;
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

        const index = pays.indexOf(paysTrouve[i]);
        const element = document.getElementsByClassName("case")[index];
        element.classList.remove("unselectable");
        element.classList.remove("transparent");

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
    for (let i = 0; i < pays.length; i++) {
      if (reponse.toLowerCase() == pays[i].name.toLowerCase()) {
        document.getElementById("registered_answer").style.display = "block";
        return;
      }
    }
    document.getElementById("bad_answer").style.display = "block";
  } else if (localStorage.getItem("type") == "1") {
    document.getElementById("bad_answer").style.display = "block";
  } else if (localStorage.getItem("type") == "2") {
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
    document.querySelector("section").innerHTML =
      '<img src="img/win.gif" style="width: 25%; heigth: auto;">';
    document.querySelector("body").style.height = "100%";
    document.querySelector("html").style.height = "100%";
    document.querySelector("section").style.height = "100%";
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
  if (localStorage.getItem("type") == "1") {
    if (event.keyCode === 40 || event.keyCode === 39) {
      nextSelection(paysTrouve.indexOf(selection) + 1);
    }
    if (event.keyCode === 38 || event.keyCode === 37) {
      previousSelection(paysTrouve.indexOf(selection) - 1);
    }
  }
});

function nextSelection(i) {
  const index = pays.indexOf(paysTrouve[i - 1]);
  const element = document.getElementsByClassName("case")[index];
  element.classList.remove("selectable");
  if (i == paysTrouve.length) {
    selection = paysTrouve[0];
  } else {
    selection = paysTrouve[i];
  }
  const j = pays.indexOf(selection);
  const element2 = document.getElementsByClassName("case")[j];
  element2.classList.add("selectable");
  document.getElementById("flag").src = selection.getDrapeau();
}

function previousSelection(i) {
  const index = pays.indexOf(paysTrouve[i + 1]);
  const element = document.getElementsByClassName("case")[index];
  element.classList.remove("selectable");
  if (i == -1) {
    selection = paysTrouve[paysTrouve.length - 1];
  } else {
    selection = paysTrouve[i];
  }
  const j = pays.indexOf(selection);
  const element2 = document.getElementsByClassName("case")[j];
  element2.classList.add("selectable");
  document.getElementById("flag").src = selection.getDrapeau();
}
