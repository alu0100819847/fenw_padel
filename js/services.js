let services = {
  "init"    : () => {
    $('#services').click(services.getServices);
    services.urlHandler();
  },
  "html": '<h1>SERVICIOS</h1>',
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
