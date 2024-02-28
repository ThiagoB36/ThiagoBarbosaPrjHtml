function btn() {
  const email = document.querySelector("#foremail").value;
  const password = document.querySelector("#forsenha").value;

  const emailDefault = "teste@test.com";
  const passwordDefault = "1234";

  if (email == emailDefault && password == passwordDefault) {
    window.location.href = "./products.html";
  } else {
    console.log("nao pode entrar");
  }
}
