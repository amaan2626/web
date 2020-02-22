var form=document.querySelector("form");
form.onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    e.preventDefault();
  }
}
var step=document.querySelectorAll(".step");
count=0
form.addEventListener("keyup",function(a){

	if(a.key=="Enter"){
		if(count==2){
			form.submit()
		}
		step[count].classList.toggle("hidden");
		step[(count+1)%3].classList.toggle("hidden");
		count=(count+1)%3;
		setTimeout(function(){
		step[count].children[1].select()
		},1000)

	}
})
