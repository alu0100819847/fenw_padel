let index = {
  "init": () => {
    $('#index').click(index.getIndex);
    index.urlHandler();
  },
  "html"    : $("#main").html(),
  "getIndex": () => {
    $('#main').html(index.html);
  },
  "urlHandler": () =>{
    if(window.location.href.split('#')[1] == index.url){
      index.getIndex();
    }
  },
  "uri": ""
}
$(()=>{
  index.init();
})
