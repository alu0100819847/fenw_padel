let services = {
  "init"    : () => {
    $('#services').click(services.getServices);
    services.urlHandler();
  },
  "html":
      '<div class="row justify-content-md-center">'+
        '<div class="col-sm-8 col-md-5 content">'+
          '<div class="content_info actividades">'+
            '<h3> Actividades </h3>'+
          '</div>'+
          '<div class="content_info">'+
            '<img class="imagen" src="./img/3.jpg"/>'+
          '</div>'+

        '</div>'+
        '<div class="col-sm-8 col-md-5 content">'+
          '<div class="content_info instalaciones">'+
            '<h3> Instalaciones </h3>'+
          '</div>'+
          '<div class="content_info">'+
            '<img class="imagen" src="./img/4.jpg"/>'+
          '</div>'+
        '</div>'+
        '<div class="col-sm-8 col-md-5 content">'+
          '<div class="content_info torneos">'+
            '<h3> Torneos </h3>'+
          '</div>'+
          '<div class="content_info">'+
            '<img class="imagen" src="./img/5.jpeg"/>'+
          '</div>'+
        '</div>'+
        '<div class="col-sm-8 col-md-5 content">'+
          '<div class="content_info reservas">'+
            '<h3> Reservas </h3>'+
          '</div>'+
          '<div class="content_info">'+
            '<img class="imagen" src="./img/6.jpg"/>'+
          '</div>'+
        '</div>'+
      '</div>',
  "getServices": () => {
    $('#main').html(services.html);
  },
  "urlHandler": () =>{
    if(window.location.href.split('#')[1] == services.url){
      services.getServices();
    }
  },
  "url": "Services"
}
$(()=>{
  services.init();
})
