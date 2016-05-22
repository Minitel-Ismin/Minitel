var minitelBoot = false;

function typeProject(project){
  $("#minitel p.miniteltyped").typed({
    strings: ['<p><span class="PS1"><span class="PS1user">root</span>@<span class="PS1server">minitel</span>:<span class="PS1path">/root</span># </span>cd Projects</p>'
    +'<p><span class="PS1"><span class="PS1user">root</span>@<span class="PS1server">minitel</span>:<span class="PS1path">/root/Projects</span># </span>explain '+project+'</p>'],
    typeSpeed: 2,
    contentType: 'html',
    callback: function(){
      var explProj = "#explain".concat(project);
      $(explProj).clone().appendTo("#minitel p.miniteltyped");
    }
  });
}

function checkMinitel(e){
  if(minitelBoot){
    $("#minitel p.miniteltyped").typed('reset');
    $("#minitel").empty();
    $("#minitel").append($("<p class='miniteltyped'></p>"));
  }else{
    command(e, "getMinitel");
  }
}

function command(e, cmd, opt=""){
  e.preventDefault();
  switch(cmd){
    case "getMinitel":
      if(minitelBoot){
        $("#left-pane").removeClass("left-logo-upleft");
        $("#minitel").addClass("minitel-out");
        $("#minitel p.miniteltyped").typed('reset');
        $("#minitel").empty();
        $("#minitel").append($("<p class='miniteltyped'></p>"));
        minitelBoot = false;
      }else{
        $("#left-pane").addClass("left-logo-upleft");
        $("#minitel").removeClass("minitel-out");
        minitelBoot = true;
      }
      break;
    case "getProject":
      checkMinitel(e);
      typeProject(opt);
      break;
    case "getHardware":
      checkMinitel(e);
      $("#minitel p.miniteltyped").typed({
        strings: ['<p><span class="PS1"><span class="PS1user">root</span>@<span class="PS1server">minitel</span>:<span class="PS1path">/root</span># </span>'+cmd+' '+ opt +'</p>'],
        typeSpeed: 2,
        contentType: 'html',
        callback: function(){
          $("#explainHardware").clone().appendTo("#minitel p.miniteltyped");
        }
      });
      break;
  }
};

$(function(){
  var rotmail = $("a.rot-email").attr("href","znvygb:zvavgry@rzfr.se".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));
});
