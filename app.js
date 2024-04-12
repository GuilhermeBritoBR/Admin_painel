function admin_painel_create() {
  const code = document.getElementById("create");
  document.getElementById("space-add").innerHTML = code.value;
  console.log(code.value);
}
