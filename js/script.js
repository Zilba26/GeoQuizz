function startQuizz() {
  let boutons = document.getElementsByName("select");
  let type;
  for (let i = 0; i < boutons.length; i++) {
    if (boutons[i].checked) {
      type = i;
      localStorage.setItem("type", type);
    }
  }

  let boutons2 = document.getElementsByName("select-2");
  let endroit;
  for (let i = 0; i < boutons2.length; i++) {
    if (boutons2[i].checked) {
      endroit = i;
      localStorage.setItem("endroit", endroit);
    }
  }

  window.location.href = "quizz.html";
}

function startQuizz2() {
  let boutons = document.getElementsByName("select-3");
  let type;
  for (let i = 0; i < boutons.length; i++) {
    if (boutons[i].checked) {
      type = i + 3;
      localStorage.setItem("type", type);
    }
  }
  localStorage.removeItem("endroit");
  window.location.href = "quizz.html";
}