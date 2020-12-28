var btn_presentation = document.getElementById("presentation");
var btn_realisations = document.getElementById("realisations");
var btn_portfolio_left = document.getElementById("responsive_portfolio_left");

var presentation = document.getElementById("portfolio_center_presentation");
var realisations = document.getElementById("portfolio_center_realisations");
var portfolio_left = document.getElementById("portfolio_left");
var portfolio_center_page = document.getElementById("portfolio_center_page");
realisations.style.display = "none";

window.addEventListener('resize', redimensionnement, false);
window.addEventListener('load', function()
{
  var btn_presentation = document.addEventListener("click", toggleDisplay);
  var btn_realisations = document.addEventListener("click", toggleDisplay);
  var btn_portfolio_left = document.addEventListener("click", toggleDisplayLeft);
});

function toggleDisplay(e)
{
  if(e.target == btn_realisations)
  {
    if(realisations.style.display == "none")
    {
      realisations.style.display = "";
      presentation.style.display = "none";
      btn_realisations.style.color = "darkcyan";
      btn_realisations.style.backgroundColor = "#202020";
      btn_presentation.style.color = "white";
      btn_presentation.style.backgroundColor = "#323232";
    }
  }
  else if(e.target == btn_presentation)
  {
    if(presentation.style.display == "none")
    {
      presentation.style.display = "";
      realisations.style.display = "none";
      btn_presentation.style.color = "darkcyan";
      btn_presentation.style.backgroundColor = "#202020";
      btn_realisations.style.color = "white";
      btn_realisations.style.backgroundColor = "#323232";
    }
  }
}

function toggleDisplayLeft(e)
{
  if(window.matchMedia("(max-width: 1024px)").matches)
  {
    if(portfolio_left.style.display == "none")
    {
      if(e.target == btn_portfolio_left)
      {
        portfolio_left.style.display = "block";
        btn_portfolio_left.innerHTML = "-";
        btn_portfolio_left.style.left = "60%";
        btn_portfolio_left.style.paddingLeft = "13px";
        btn_portfolio_left.style.paddingRight = "21px";
        portfolio_center_page.style.opacity = "0.2";
      }
    }
    else
    {
      portfolio_left.style.display = "none";
      btn_portfolio_left.innerHTML = "+";
      btn_portfolio_left.style.left = "0";
      btn_portfolio_left.style.paddingLeft = "10px";
      btn_portfolio_left.style.paddingRight = "10px";
      portfolio_center_page.style.opacity = "0.7";
    }
  }
}

function redimensionnement()
{
  if("matchMedia" in window)
  {
    if(window.matchMedia("(max-width: 1024px)").matches)
    {
      if(portfolio_left.style.display != "none")
      {
        portfolio_left.style.display = "none";
      }
    }
    else
    {
      if(portfolio_left.style.display == "none")
      {
        portfolio_left.style.display = "";
      }
    }
  }
}
