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
    case "3":
      return "Régions de France";
    case "4":
      return "Départements de France";
    case "5":
      return "Numéros des départements français";
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
      return "";
  }
}

function getAnswers(endroit, type) {
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
      switch (type) {
        case "3": return REGIONS_LIST;
        case "4": return DEPARTEMENTS;
        case "5": return DEPARTEMENTS;
        default: return "error";
      }
  }
}

document.title =
  getType(localStorage.getItem("type")) +
  getEndroit(localStorage.getItem("endroit"));

let reponsesTrouves = getAnswers(localStorage.getItem("endroit"), localStorage.getItem("type"));
const reponses = [].concat(reponsesTrouves);
document.getElementById("avancement").innerHTML = "0/" + reponsesTrouves.length;
let avancement = 0;
let selection = reponsesTrouves[0];
if (localStorage.getItem("type") == "1") {
  const flag = document.getElementById("flag");
  flag.src = selection.getDrapeau();
  const element = document.getElementsByClassName("case")[0];
  element.classList.add("selectable");
}
if (localStorage.getItem("type") == "5") {
  const element = document.getElementsByClassName("case")[0];
  element.classList.add("selectable");
}


function autoValidation() {
  document.getElementById("registered_answer").style.display = "none";
  document.getElementById("bad_answer").style.display = "none";
  const reponse = document.getElementById("input_answer").value;
  switch (localStorage.getItem("type")) {
    case "0":
      for (let i = 0; i < reponsesTrouves.length; i++) {
        let alias = reponsesTrouves[i].options["alias"];
        if (compare(reponse, reponsesTrouves[i].name) || (alias != undefined && alias.some((elt) => compare(reponse, elt)))) {
          avancement++;
          document.getElementById("avancement").innerHTML =
            avancement + "/" + reponses.length;
          document.getElementById("input_answer").value = "";
          document.getElementById("last_country").innerHTML =
            "Dernier pays trouvé: " + reponsesTrouves[i].name;

          const index = reponses.indexOf(reponsesTrouves[i]);
          const element = document.getElementsByClassName("case")[index];
          element.classList.remove("unselectable");
          element.classList.remove("transparent");
          element.style.color = "green";

          reponsesTrouves.splice(i, 1);
          win();
          return;
        }
      }
      break;
    case "1":
      let alias = selection.options["alias"];
      if (compare(reponse, selection.name) || (alias != undefined && alias.some((elt) => compare(reponse, elt)))) {
        const i = reponsesTrouves.indexOf(selection);
        avancement++;
        document.getElementById("avancement").innerHTML =
          avancement + "/" + reponses.length;
        document.getElementById("input_answer").value = "";
        document.getElementById("last_country").innerHTML =
          "Dernier pays trouvé: " + reponsesTrouves[i].name;

        const index = reponses.indexOf(reponsesTrouves[i]);
        const element = document.getElementsByClassName("case")[index];
        element.classList.remove("unselectable");
        element.classList.remove("transparent");
        element.classList.remove("selectable");
        element.style.color = "green";

        nextSelection(i + 1);
        reponsesTrouves.splice(i, 1);
        win();
        return;
      }
      break;
    case "2":
      for (let i = 0; i < reponsesTrouves.length; i++) {
        if (compare(reponse, reponsesTrouves[i].capitale)) {
          avancement++;
          document.getElementById("avancement").innerHTML =
            avancement + "/" + reponses.length;
          document.getElementById("input_answer").value = "";
          document.getElementById("last_country").innerHTML =
            "Derniere capitale trouvé: " +
            reponsesTrouves[i].capitale +
            " (" +
            reponsesTrouves[i].name +
            ")";

          const index = reponses.indexOf(reponsesTrouves[i]);
          const element = document.getElementsByClassName("case")[index];
          element.classList.remove("unselectable");
          element.classList.remove("transparent");
          element.style.color = "green";

          reponsesTrouves.splice(i, 1);
          win();
          return;
        }
      }
      break;
    case "3":
      for (let i = 0; i < reponsesTrouves.length; i++) {
        if (compare(reponse, reponsesTrouves[i])) {
          avancement++;
          document.getElementById("avancement").innerHTML =
            avancement + "/" + reponse.length;
          document.getElementById("input_answer").value = "";
          document.getElementById("last_country").innerHTML =
            "Dernière région trouvé: " + reponsesTrouves[i];

          const index = reponses.indexOf(reponsesTrouves[i]);
          const element = document.getElementsByClassName("case")[index];
          element.classList.remove("unselectable");
          element.classList.remove("transparent");
          element.style.color = "green";

          reponsesTrouves.splice(i, 1);
          win();
          return;
        }
      }
      break;
    case "4":
      for (let i = 0; i < reponsesTrouves.length; i++) {
        if (compare(reponse, reponsesTrouves[i].name)) {
          avancement++;
          document.getElementById("avancement").innerHTML =
            avancement + "/" + reponses.length;
          document.getElementById("input_answer").value = "";
          document.getElementById("last_country").innerHTML =
            "Dernier département trouvé: " + reponsesTrouves[i].name;

          const index = reponses.indexOf(reponsesTrouves[i]);
          const element = document.getElementsByClassName("case")[index];
          element.classList.remove("unselectable");
          element.classList.remove("transparent");
          element.style.color = "green";

          reponsesTrouves.splice(i, 1);
          win();
          return;
        }
      }
      break;
    case "5":
      if (compare(reponse, selection.name)) {
        const i = reponsesTrouves.indexOf(selection);
        avancement++;
        document.getElementById("avancement").innerHTML =
          avancement + "/" + reponses.length;
        document.getElementById("input_answer").value = "";
        document.getElementById("last_country").innerHTML =
          "Dernier département trouvé: " + reponsesTrouves[i].name;

        const index = reponses.indexOf(reponsesTrouves[i]);
        const element = document.getElementsByClassName("case")[index];
        element.classList.remove("unselectable");
        element.classList.remove("transparent");
        element.classList.remove("selectable");
        element.style.color = "green";

        nextSelection(i + 1);
        reponsesTrouves.splice(i, 1);
        win();
        return;
      }
      break;
  }
}

function validation() {
  document.getElementById("registered_answer").style.display = "none";
  document.getElementById("bad_answer").style.display = "none";
  const reponse = document.getElementById("input_answer").value;
  switch (localStorage.getItem("type")) {
    case "0":
      for (let i = 0; i < reponses.length; i++) {
        if (compare(reponse, reponses[i].name)) {
          document.getElementById("registered_answer").style.display = "block";
          return;
        }
      }
      document.getElementById("bad_answer").style.display = "block";
      break;
    case "1":
      document.getElementById("bad_answer").style.display = "block";
      break;
    case "2":
      for (let i = 0; i < reponses.length; i++) {
        if (compare(reponse, reponses[i].capitale)) {
          document.getElementById("registered_answer").style.display = "block";
          return;
        }
      }
      document.getElementById("bad_answer").style.display = "block";
      break;
    case "3":
      for (let i = 0; i < reponses.length; i++) {
        if (compare(reponse, reponses[i])) {
          document.getElementById("registered_answer").style.display = "block";
          return;
        }
      }
      document.getElementById("bad_answer").style.display = "block";
      break;
    case "4":
      for (let i = 0; i < reponses.length; i++) {
        if (compare(reponse, reponses[i].name)) {
          document.getElementById("registered_answer").style.display = "block";
          return;
        }
      }
      document.getElementById("bad_answer").style.display = "block";
      break;
    case "5":
      document.getElementById("bad_answer").style.display = "block";
      break;
  }
}

function win() {
  if (reponsesTrouves.length == 0) {
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
  return value == paysName;
}

const input_answer = document.getElementById("input_answer");
input_answer.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    validation();
  }
  if (localStorage.getItem("type") == "1" || localStorage.getItem("type") == "5") {
    if (event.keyCode === 40) {
      nextSelection(reponsesTrouves.indexOf(selection) + 1);
    }
    if (event.keyCode === 38) {
      previousSelection(reponsesTrouves.indexOf(selection) - 1);
    }
  }
});

function nextSelection(i) {
  const index = reponses.indexOf(reponsesTrouves[i - 1]);
  const element = document.getElementsByClassName("case")[index];
  element.classList.remove("selectable");
  if (i == reponsesTrouves.length) {
    selection = reponsesTrouves[0];
  } else {
    selection = reponsesTrouves[i];
  }
  const j = reponses.indexOf(selection);
  const element2 = document.getElementsByClassName("case")[j];
  element2.classList.add("selectable");
  if (localStorage.getItem("type") == "1") {
    document.getElementById("flag").src = selection.getDrapeau();
  }
  document.getElementById("input_answer").value = "";
}

function previousSelection(i) {
  const index = reponses.indexOf(reponsesTrouves[i + 1]);
  const element = document.getElementsByClassName("case")[index];
  element.classList.remove("selectable");
  if (i == -1) {
    selection = reponsesTrouves[reponsesTrouves.length - 1];
  } else {
    selection = reponsesTrouves[i];
  }
  const j = reponses.indexOf(selection);
  const element2 = document.getElementsByClassName("case")[j];
  element2.classList.add("selectable");
  if (localStorage.getItem("type") == "1") {
    document.getElementById("flag").src = selection.getDrapeau();
  }
  document.getElementById("input_answer").value = "";
}

function setSelection(i) {
  const index = reponses.indexOf(selection);
  const element = document.getElementsByClassName("case")[index];
  element.classList.remove("selectable");
  selection = reponses[i];
  const j = reponses.indexOf(selection);
  const element2 = document.getElementsByClassName("case")[j];
  element2.classList.add("selectable");
  if (localStorage.getItem("type") == "1") {
    document.getElementById("flag").src = selection.getDrapeau();
  }
  document.getElementById("input_answer").value = "";
  document.getElementById("input_answer").focus();
}

function abandonner() {
  const selectable = document.getElementsByClassName("selectable");
  for (let i = 0; i < selectable.length; i++) {
    selectable[i].classList.remove("selectable");
  }
  const transparent = document.getElementsByClassName("transparent");
  for (let i = 0; i < transparent.length; i++) {
    transparent[i].classList.remove("unselectable");
    transparent[i].style.color = "red";
  }
  const button = document.getElementById("abandonner");
  button.innerHTML = '<i class="fa-solid fa-arrows-rotate"></i>';
  button.style.backgroundColor = "green";
  button.onclick = function () {
    window.location.href = "quizz.html";
  };
}

document.getElementById("input_answer").focus();