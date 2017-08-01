  var linkEnter = document.querySelector(".btn-enter");
  var linkMap = document.querySelectorAll(".open-map");
  var popupEnter = document.querySelector(".modal-content");
  var popupMap = document.querySelector(".modal-content-map");
  var popupClose = document.querySelectorAll(".modal-content-close");
  var login = popupEnter.querySelector("[name=login]");
  var password = popupEnter.querySelector("[name=password]");
  var form = popupEnter.querySelector("form");
  var storageLogin = localStorage.getItem("login");

  linkEnter.addEventListener("click", function(event){
    event.preventDefault();
    popupEnter.classList.add("modal-content-show");
    login.focus();

    if(storageLogin){
      login.value = storageLogin;
    }
  });

  form.addEventListener("submit", function(event){
    if(!login.value || !password.value){
      event.preventDefault();
      alert("Необходимо ввести логин и пароль");
    } else{
      localStorrage.setItem("login", login.value);
    }
  });

  for (var i = 0; i < linkMap.length; i++){
    linkMap[i].addEventListener("click", function(event){
      event.preventDefault();
      popupMap.classList.add("modal-content-show");
    });
  }

  for (var i = 0; i < popupClose.length; i++){
    popupClose[i].addEventListener("click", function(event){
      event.preventDefault();
      popupEnter.classList.remove("modal-content-show");
      popupMap.classList.remove("modal-content-show");
    });
  }
