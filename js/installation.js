let installation = {
  "init"    : () => {
    $('#install').click(installation.getInstallation);
    installation.urlHandler();
  },
  "html": '<div class="row install">'+
          '<div class="col-sm-12 col-md-9 col-lg-8 text-center">'+
          '<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4952.181829664625!2d-3.6296803520791947!3d40.38897622128382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21ca0be0f550171a!2sEscuela%20T%C3%A9cnica%20Superior%20de%20Ingenier%C3%ADa%20de%20Sistemas%20Inform%C3%A1ticos%20de%20la%20Universidad%20Polit%C3%A9cnica%20de%20Madrid!5e1!3m2!1ses!2ses!4v1573672795639!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'+
          '</div>'+
          '<div class="col-sm-12 col-md-3 col-lg-4 ">'+
          '<div class="installInfo torneos">'+
          '<h3> Instalaciones </h3>'+
          '</div>'+
          '<div class="installInfo">'+
          '<p>Disponemos de:</p>'+
          '<ul>'+
          '<li>4 pistas de cristal cubiertas.</li>'+
          '<li>3 pistas de cristal semicubiertas.</li>'+
          '<li>3 pistas de cemento exteriores.</li>'+
          '<li>2 pistas de tenis.</li>'+
          '<li>Vestuarios completos.</li>'+
          '<li>Cafeteria con terraza.</li>'+
          '</ul>'+
          '</div>'+
          '</div>',
  "getInstallation": () => {
    $('#main').html(installation.html);
  },
  "urlHandler": () =>{
    if(window.location.href.split('#')[1] == installation.url){
      installation.getInstallation();
    }
  },
  "url" : "Installation"
}
$(()=>{
  installation.init();
})
