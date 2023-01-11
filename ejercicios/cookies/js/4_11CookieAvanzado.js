window.addEventListener("load", fullLoad);

function fullLoad() {
  const buttonSeeAll = document.getElementById("seeAll");
  const buttonCreate = document.getElementById("create");
  const buttonModify = document.getElementById("modify");
  const buttonRead = document.getElementById("read");
  const buttonDelete = document.getElementById("delete");

  buttonSeeAll.addEventListener("click", () => {
    let cookies = document.cookie.split("; ");
    let res = "";
    for (let i = 0; i < cookies.length; i++) {
      res += i + 1 + " - " + cookies[i] + "\n";
    }
    alert(res);
  });
  buttonCreate.addEventListener("click", () => {
    let name = prompt("¿Cómo quieres llamar a tu cookie?");
    let value = prompt("¿Cuál va a ser el valor de tu cookie?");
    let expiration;
    do {
      expiration = Number(prompt("¿Cuántos días quieres que dure tu cookie?"));
      if (isNaN(expiration)) alert("Introduce un número valido de días");
    } while (isNaN(expiration));
    setCookie(name, value, expiration);
  });
  buttonRead.addEventListener("click", () => {
    let name = prompt("¿Cómo se llama tu cookie?");
    let cookie = getCookie(name);
    if (cookie != null) {
      alert("El valor de " + name + " es " + cookie);
    } else {
      alert("La cookie no existe");
    }
  });
  buttonDelete.addEventListener("click", () => {
    let name = prompt("¿Cómo se llama tu cookie?");
    let cookie = getCookie(name);
    if (cookie != null) {
      deleteCookie(name);
      alert("Cookie borrada");
    } else {
      alert("La cookie no existe");
    }
  });
}

function setCookie(name, value, expiration) {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + expiration);
  document.cookie =
    name +
    "=" +
    value +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/;";
}

function getCookie(name) {
  let res = "";
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let cookieI = cookies[i].split("=");
    if (cookieI[0] == name) {
      res = cookieI[1];
      break;
    }
  }
  if (res == "") {
    return null;
  }
  return res;
}

function deleteCookie(name) {
  if (getCookie(name) == null) {
    return false;
  }
  document.cookie =
    name + "= ; expires=" + new Date(0).toUTCString() + "; path=/;";
  return true;
}
