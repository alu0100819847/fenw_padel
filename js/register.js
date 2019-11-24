let register ={
  "init"    : () => {
    $('#regForm').click(register.setForm);
    register.urlHandler();
  },
  "getForm" : '<div class="row justify-content-md-center ">'+
                '<div class="formDiv">'+
                  '<div class="title">'+
                    '<h1> Register</h1>'+
                    '<br/>'+
                  '</div>'+
                  '<form class="myForm" action="false">' +
                    '<div class="form-group">'+
                      '<label for="userReg">User</label>'+
                      '<input type="text" class="form-control" id="userReg" name="userReg" placeholder="User">'+
                      '<small id="userRegHelp" class="form-text text-muted"></small>'+
                    '</div>'+
                    '<div class="form-group">'+
                      '<label for="emailReg">Email</label>'+
                      '<input type="email" class="form-control" id="emailReg" name="emailReg" placeholder="xxxx@xxx.xx">'+
                      '<small id="emailRegHelp" class="form-text text-muted"></small>'+
                    '</div>'+
                    '<div class="form-group">'+
                      '<label for="passwordReg">Password</label>'+
                      '<input type="password" class="form-control" id="passwordReg" name="passwordReg" placeholder="Pasword">'+
                      '<small id="passwordRegHelp" class="form-text text-muted"></small>'+
                    '</div>'+
                    '<div class="form-group">'+
                      '<label for="rePasswordReg">Re Password</label>'+
                      '<input type="password" class="form-control" id="rePasswordReg" name="rePasswordReg" placeholder="Pasword">'+
                      '<small id="rePasswordRegHelp" class="form-text text-muted"></small>'+
                    '</div>'+
                    '<label for="reBirthDateReg">Nacimiento</label>'+
                    '<div class="input-group date form-group" data-provide="datepicker">'+
                      '<br/>'+
                      '<input data-provide="datepicker" class="form-control" id="reBirthDateReg" name="reBirthDateReg" placeholder="mm/dd/aaaa">'+
                      '<div class="input-group-addon">'+
                        '<span class="glyphicon glyphicon-th"></span>'+
                      '</div>' +
                    '</div>' +
                  '<br/><br/>'+
                  '<button id="regButton" type="submit" class="btn btn-primary">Submit</button>'+
                '</form>'+
              '</div>'+
            '</div>',
  "setForm" : () => {
    $('#main').html(register.getForm);
    $('.datepicker').datepicker();
    $('#regButton').click(register.regUserVal);
  },
  "token"   : () => {
    if(sessionStorage.getItem('key')){
      return sessionStorage.getItem('key');
    } else {
      console.log("no hay");
      return "no hay";
    }
  },
  "regUser" : () => {
    /*
    $.ajax({
      url: "http://fenw.etsisi.upm.es:10000/users",
      data:{"username": $("#userReg").val(),
            "email"   : $("#emailReg").val(),
            "password": $("#passwordReg").val(),
            "birthdate": new Date($("#reBirthDateReg").val()).getTime()},
      type: "POST"
    })
    rePasswordReg
    .done((data)=>{
      console.log(data);
      sessionStorage.setItem('key', data);
      $('#reserva').removeClass('disabled');
    })
    .fail((err)=>{
      console.log(err);
    })
    .always((data)=>{
      console.log(data);
    })*/
    console.log($("#reBirthDateReg").val());
  },
  "regUserVal": () =>{
    $("#loginForm").validate({
        rules: {
            userReg: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            emailReg: {
                required: true,
                email: true
            },
            passwordReg: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            rePasswordReg: {
                required: true,
                equalTo: "#passwordReg"
            },
            reBirthDateReg: {
                required: true
            }
       },
        messages: {
            userReg: {
              required: "Introduzca el usuario.",
              minlength: "Minimo 5 caracteres.",
              maxlength: "Maximo 20 caracteres."
            },
            emailReg: {
              required: "Introduzca un email valido."
            },
            passwordReg: {
              required: "Introduzca la contraseña.",
              minlength: "Minimo 5 caracteres.",
              maxlength: "Maximo 20 caracteres."
            },
            rePasswordReg: {
              required: "La contraseña debe coincidir"
          },
          reBirthDateReg: {
            required: "Introduzca el la fecha de nacimiento."
          }


       },
       submitHandler: function(form){
         //login.logUser();
         console.log("valida")
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
      if(window.location.href.split('#')[1] == register.url){
        register.setForm();
      }
    }
  },
  "url" : "Register"
}
$(()=>{
  register.init();
})
