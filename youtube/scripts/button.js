let URLServer="http://youtube.f"
// let URLServer="http://192.168.1.37"

let pan=document.getElementsByClassName("pan_play")[0];

let eventSource;
start();
function start(param,value) { // когда нажата кнопка "Старт"
  if (!window.EventSource) {
    // Internet Explorer или устаревшие браузеры
    alert("Ваш браузер не поддерживает EventSource.");
    return;
  }
  let site=new URL(URLServer)
  let url=new URL("youtube/conn.php",site);
//   url.searchParams.set(param, value);
  eventSource = new EventSource(url);

  eventSource.onopen = function(e) {
    pan.style.backgroundColor="green";
    // log("Событие: open");
  };

  eventSource.onerror = function(e) {
    // log("Событие: error");
    if (this.readyState == EventSource.CONNECTING) {
      // log(`Переподключение (readyState=${this.readyState})...`);
      pan.style.backgroundColor="yellow";
    } else {
      // log("Произошла ошибка.");
      pan.style.backgroundColor="red";
    }
  };



  eventSource.addEventListener('href',function(e) {
    console.log("Событие: cсылки: " + e.data);
    let resp=JSON.parse(e.data);
    if(resp.site=="youtube"){
      let string=resp.href;
      let titles=resp.title;
      let imgs=resp.img;
      let html="";

      
      console.log(string);
      for(let i=0;i<string.length;i++){
        html+='<div class="d-flex img-yt"><img class=""  src="'+imgs[i]+'" alt=""><button type="btn" class="btn-yt" onclick="action(this)" value={"who":"remote","action":"toLink","site":"youtube","link":"'+string[i]+'"} href="#">'+titles[i].substr(0, 40)+"..."+'</br><span class="d-channel">name</br>43k</span></button></div>';
      }
      document.getElementById("links").innerText="";
     document.getElementById("links").insertAdjacentHTML('afterbegin',html);
      action("");
     
      
    }
  });











  eventSource.addEventListener('status', function(e) {
    log("Событие: bye, данные: " + e.data);
    console.log(JSON.parse(e.data));
  });
  eventSource.addEventListener('add', function(e) {
    log("Событие: bye, данные: " + e.data);
    // console.log(JSON.parse(e.data));
    console.log(JSON.parse(e.data));
  });
  eventSource.onmessage = function(e) {
      //WAIT ANSWER
    log("Событие: message, данные: " + e.data);
    
  };
}

function stop() { // когда нажата кнопка "Стоп"
  eventSource.close();
  log("Соединение закрыто");
}

function log(msg) {
  logElem.innerHTML += msg + "<br>";
  document.documentElement.scrollTop = 99999999;
}



function action(e){
    console.log(e.value);
    let action="";
    if(e==""){
        action=e;console.log("e==''")
    }else{
        action=JSON.parse(e.value)
    }
    console.log(action);
    // action=e.value;
    
    let url=new URL(URLServer+"/youtube/toJson.php");
    
    return fetch(url, {
        method: 'post',
        headers: {"Content-type": "application/json;charset=utf-8"},  
        body: JSON.stringify(action)})
    .then(resp=>resp.json())
    .catch(error=>console.log('Request failed', error));
}