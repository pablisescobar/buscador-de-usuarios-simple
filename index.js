function searchUser(event) {
  const value = document.getElementById("user");
  const input = value.value;
  const user_v = document.getElementById("user-verification");
  const enter = event.keyCode;

  if (enter == 13 && input.length == 0) {
    user_v.innerHTML = "No estas buscando a ningun usuario";
  } else {
    user_v.innerHTML = `El Nombre del usuario es ${value.value}`;
  }
  console.log(value.value);
}

function clickUser() {
  const value = document.getElementById("user");
  const input = value.value;
  const user_v = document.getElementById("user-verification");

  if (input.length == 0) {
    user_v.innerHTML = "No estas buscando a ningun usuario";
  } else {
    user_v.innerHTML = `El Nombre del usuario es ${value.value}`;
  }
  console.log(value.value);
}
