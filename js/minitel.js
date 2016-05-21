var minitelBoot = false;

function command(e, cmd, opt=""){
  e.preventDefault();
  console.log(cmd);
  switch(cmd){
    case "getMinitel":
      console.log("Minitel is booting");
      if(minitelBoot){
        $("#left-pane").removeClass("left-logo-upleft");
        minitelBoot = false;
      }else{
        $("#left-pane").addClass("left-logo-upleft");
        minitelBoot = true;
      }
      break;
  }
};

$(function(){
  var rotmail = $("a.rot-email").attr("href","znvygb:zvavgry@rzfr.se".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
});
