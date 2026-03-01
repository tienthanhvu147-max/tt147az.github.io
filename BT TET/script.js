function hoaRoi(){

for(let i=0;i<20;i++){

let hoa=document.createElement("div");

hoa.innerHTML="🌸";

hoa.classList.add("sakura");

hoa.style.left=Math.random()*100+"%";

hoa.style.animationDuration=5+Math.random()*5+"s";

document.body.appendChild(hoa);

}

}

hoaRoi();

let loc=[
"Chúc bạn phát tài",
"Chúc bạn phát lộc",
"Chúc bạn bình an",
"Chúc bạn thành công",
"Chúc bạn may mắn",
"Chúc bạn hạnh phúc",
"Chúc bạn giàu có",
"Chúc bạn khỏe mạnh",
"Chúc bạn vui vẻ",
"Chúc bạn thịnh vượng"
]

function rutLoc(){

let random=Math.floor(Math.random()*loc.length);

document.getElementById("ketqua").innerText=loc[random];

}
let daRut=false;

let danhSachLoc=[

"Bạn sẽ phát tài năm nay 💰",
"Bạn sẽ gặp nhiều may mắn 🍀",
"Bạn sẽ thành công trong học tập 📚",
"Gia đình bạn sẽ hạnh phúc ❤️",
"Bạn sẽ đạt mục tiêu lớn 🎯",
"Bạn sẽ có cơ hội mới ✨",
"Bạn sẽ gặp quý nhân 🤝",
"Bạn sẽ bình an cả năm 🕊️",
"Bạn sẽ tràn đầy năng lượng 🔥",
"Bạn sẽ có nhiều niềm vui 😄"

];

document.getElementById("tuiLoc").onclick=function(){

if(daRut) return;

daRut=true;

let random=Math.floor(Math.random()*danhSachLoc.length);

document.getElementById("noiDungLoc").innerText=danhSachLoc[random];

document.getElementById("popupLoc").style.display="block";

hieuUngChucMung();

}

function rutLai(){

daRut=false;

document.getElementById("popupLoc").style.display="none";

}

function hieuUngChucMung(){

for(let i=0;i<20;i++){

let el=document.createElement("div");

el.innerHTML="🎉";

el.className="chucmung";

el.style.left=Math.random()*100+"%";

el.style.top="60%";

document.body.appendChild(el);

setTimeout(()=>el.remove(),2000);

}

}
document.getElementById('btnGuiLoiChuc').addEventListener('click', function() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    Swal.fire({
        title: 'Gửi thành công!',
        text: 'Chân thành cảm ơn lời chúc ý nghĩa của bạn !',
        icon: 'success',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#c62828',
        background: '#fff',
        backdrop: `
            rgba(211, 47, 47, 0.4)
            url("./img/hoa-mai.png")
            left top
            no-repeat
        `
    });
});