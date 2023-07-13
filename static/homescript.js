setTimeout(() => {
  document.getElementById("motivator").classList.remove("hidden");
  document.getElementById("motivator").classList.add("visible");
}, 1999);



var i = 0;
var txt = 'Welcome to Muscle Mania!'; /* The text */
var speed = 80; /* The speed/duration of the effect in milliseconds */
typeWriter();
function typeWriter() 
{
  if (i < txt.length) 
  {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


