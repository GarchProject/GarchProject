$(document).ready(function () {
  $(".more-icon").click(function () {
    $(".list-container").css("right", 0);
  });
  $(".close-button").click(function () {
    $(".list-container").css("right", -400)
  });
  $(".list-item").click(function () {
    $(".list-container").css("right", -400)
  });
});

let nowUrl = window.location.href;

function copyUrl(){
  	navigator.clipboard.writeText(nowUrl).then(res=>{
	  alert("주소가 복사되었습니다!");
	})
}
