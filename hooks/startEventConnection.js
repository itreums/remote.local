import {ref, onMounted} from "Vue"

export function startEventConnection(){
    const host=ref("http://youtube.f")
    const path=ref("youtube/conn.php")
    const event=ref('href')
    const items=ref([])
    const connect=async()=>{


    }
    if (!window.EventSource) {
        // Internet Explorer или устаревшие браузеры
        alert("Ваш браузер не поддерживает EventSource.");
        return;
    }
    let site=new URL(host.value)
    let url=new URL(path.value,site);
    //   url.searchParams.set(param, value);
    this.eventSource = new EventSource(url);

    this.eventSource.addEventListener(event.value,(e)=> {

        console.log("Событие: cсылки: " + e.data);

        let resp=JSON.parse(e.data);

        if(resp.site=="youtube"){
            
            items.value=resp.items;
            let string=resp.items;
      
            console.log(string);

            this.loadExploerList("")
          
        }
    })
    onMounted(connect)
    return{
        items
    }
}