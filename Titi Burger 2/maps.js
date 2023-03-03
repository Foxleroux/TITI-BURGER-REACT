window.addEventListener("load", function () {
  var popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.padding = "20px";
  popup.style.background = "rgba(255, 255, 255, 0.8)";
  popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  popup.style.opacity = 0.9;
  popup.innerHTML =
    '<img src="https://media.discordapp.net/attachments/1075437459921453297/1075773858986082334/Brown_illustrated_Burger_Food_Restaurant_Logo.png" width="200"><p>Bienvenue dans notre restaurant ! N\'hésitez pas à nous suivre sur nos réseaux !</p>';
  document.body.appendChild(popup);
  setTimeout(function () {
    popup.parentNode.removeChild(popup);
  }, 7000);
});



