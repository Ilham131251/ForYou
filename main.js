var musik = "";

AOS.init({
  once: true,
});

var audio = document.querySelector(".lagu");
if(musik){
  audio.src = musik;
}

function mulai(){
  audio.play();
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function(){
    document.querySelector(".open").style.display = "none";
  },1000);
}

function wa(isi){
  window.open("https://api.whatsapp.com/send?text= Makasih ya udah inget ulang tahun aku, di hari spesial ini aku pengen " + isi);
}
async function tanya(){
  var{
    value: kado
  } = await swal.fire({
    title: "Di hari ulang tahun ini kamu pengen apa??",
    input: "text",
    showCancelButton: false,
  });
  if(kado){
    await swal.fire("Kirim jawabannya ke wa aku yaa!!");
    wa(kado);
  } else{
    await swal.fire("Jangan dikosongin dong!!!");
    tanya();
  }
}
