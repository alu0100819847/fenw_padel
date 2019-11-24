let a;
let login ={
  "init"    : () => {
    $('#logForm').click(login.setForm);
    login.urlHandler();
    login.loged();
  },
  "getForm" : '<div class="row justify-content-md-center ">'+
              '<div class="formDiv">'+
              '<div class="title">'+
              '<h1> Login</h1>'+
              '<br/>'+
              '</div>'+
              '<form class="myForm" id="loginForm" action="false">' +
              '<div class="form-group">'+
              '<label for="userLog">User</label>'+
              '<input type="text" class="form-control" name="userLog" id="userLog" placeholder="User">'+
              '<small id="userLogHelp" class="form-text text-muted"></small>'+
              '<div class="form-group">'+
              '<label for="passwordLog">Password</label>'+
              '<input type="password" class="form-control" name="passwordLog" id="passwordLog" placeholder="Pasword">'+
              '<small id="passwordLogHelp" class="form-text text-muted"></small>'+
              '<br/><br/>'+
              '<button id="logButton" type="submit" class="btn btn-primary">Submit</button>'+
              '</form>'+
              '</div>'+
              '</div>',
  "setForm" : () => {
    $('#main').html(login.getForm);
    $('#logButton').click(login.logUserVal);
  },
  "loged"   : () => {
    if(sessionStorage.getItem('key')){
      $('#reserva').removeClass('disabled');
      $('#logForm').hide();
      $('#regForm').hide();
      $('#logOut').show();
      $('#logOut').click(login.logout);
      return sessionStorage.getItem('key');
    } else {
      $('#reserva').addClass('disabled');
      $('#logForm').show();
      $('#regForm').show();
      $('#logOut').hide();
      return false;
    }
  },
  "logout" : () => {
    sessionStorage.removeItem('key')
    login.loged();
    index.getIndex();
  },
  "logUser" : () => {
    $.ajax({
      url: "http://fenw.etsisi.upm.es:10000/users/login",
      data:{"username": $("#userLog").val(),
            "password": $("#passwordLog").val()},
      type: "GET"
    })
    .done((response, status, data)=>{
      sessionStorage.setItem('key', data.getResponseHeader("authorization"));
      login.loged();
      index.getIndex();
    })
    .fail((err)=>{
      console.log(err);
    })
    .always((data)=>{
      console.log(data);
    })
  },
  "logUserVal": () =>{
    $("#loginForm").validate({
        rules: {
            userLog: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            passwordLog: {
                required: true,
                minlength: 5,
                maxlength: 20
            }
       },
        messages: {
            userLog: {
                required: "Introduzca el usuario.",
                minlength: "Minimo 5 caracteres.",
                maxlength: "Maximo 20 caracteres."
            },
            passwordLog: {
              required: "Introduzca la contraseña.",
              minlength: "Minimo 5 caracteres.",
              maxlength: "Maximo 20 caracteres."
            }
       },
       submitHandler: function(form){
         login.logUser();
       },
        highlight: function(element, errorClass) {
            $(element).fadeOut(function() {
                $(element).fadeIn();
            });
        },
        errorElement: "div",
        errorClass: "alert alert-danger",
    });
  },
  "urlHandler": () =>{
    if(!login.loged()){
      if(window.location.href.split('#')[1] == login.url){
        login.setForm();
      }
    }

  },
  "url" : "Login"
}
$(()=>{
  login.init();
})
