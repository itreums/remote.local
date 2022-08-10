
const { createStore } = Vuex
export default createStore({
    state(){
        return{

           
            host:"http://192.168.1.38",
            urlApp:"/server/toJson.php",
            saveToBase:"/server/saveToBase.php",
            eventSourcePath:"/server/eventSourse.php",
            server:"/server/conn.php",
            registerApp:"/server/connectApp.php",
            eventSource:false,
            response:[],
            responseYandex:[],
            status:true,
            statusText:"",
            listChannels:[],
            
            appData:false,
            extWindow:false, 
            activeTab:false       

        }
        
    },
    getters:{
        getIdTab (state) {
            return state.extWindow.tabs?.find(tab => tab?.name==state.activeTab)
            // return state.host
        },
        getConnectionPath(state){
            return state.appData.device+state.appData.hash
        },
        getTabId(state){
            return state.extWindow.tabs?.find(tab=> tab?.active==true)
        }
    },
    mutations:{

        changeStatusText(state,payload){
            state.statusText=payload
        },
        addChannelToList(state,channel){
            state.listChannels.push(channel)
        },
        removeChannelFromList(state,channelName){
            for(let i=0;i<state.listChannels.length;i++){
                if(state.listChannels[i].channel==channelName){
                    state.listChannels.splice(i, 1)
                }
            }
        },
        addResponse(state,response){
            state.response=response
            // if(state.window==false){
                // state.extWindow=response.window
                // localStorage.setItem('window',response.window)
            // }
        },
        addResponseYandex(state,response){
            state.responseYandex=response
            // if(state.window==false){
                // state.extWindow=response.window
                // localStorage.setItem('window',response.window)
            // }
        },
        getWindowFromStorage(state,window){
            state.extWindow = parseInt(localStorage.getItem('window'));
        },
        getLinkIDFromStorage(state){
            state.linkID = localStorage.getItem('linkID')
        },
        /////////////////////////

        setAppData(state,appData){
            state.appData=appData
        },
        setWindow(state,window){
            state.extWindow=window
        }



    },
    actions:{
        startEventConnection({state,commit,dispatch}){
            if(state.appData){

                if (!window.EventSource) {
                    alert("Ваш браузер не поддерживает EventSource.");
                    return;
                }

                let url=new URL(state.host+state.server);
                // let url=new URL(state.host+state.eventSourcePath);
                state.eventSource = new EventSource(url);

                state.eventSource.onopen = (e)=> {
                    commit('changeStatusText',"Welcome to remote control")
                };
                
                state.eventSource.onerror = (e) =>{
                    if (this.readyState == EventSource.CONNECTING) {
                        // console.log(`Переподключение (readyState=${this.readyState})...`);  
                        commit('changeStatusText',"Reconnecting...")
                    } else {
                        commit('changeStatusText',"Alert!")     
                    }
                };
                // state.eventSource.message = (e)=>{
                //     console.log("message", e)
                // }
                state.eventSource.addEventListener('test', event => {
                    console.log(`${event.data} test`);
                  });
                state.eventSource.addEventListener('ext_'+state.appData.hash,(event)=> {

                    let data=JSON.parse(event.data)
                    console.log(data)

                    if(data.action=="checkWindow"){
                        commit("setWindow",data.response)

                    }else if(data.action=="injection"){
                        if(data.response.name=="youtube"){
                            commit("addResponse",data.response.items)
                        }else if(data.response.name=="yandexmusic"){
                            commit("addResponseYandex",data.response.items)
                        }



                    }
                    // commit('addResponse',JSON.parse(e.data))
                    dispatch('sendMessageToServer',{
                        hash:state.appData.device+state.appData.hash,
                        silence:true
                    })

                })
                dispatch('sendMessageToServer',{
                    
                    hash:state.appData.device+state.appData.hash,
                    action:"checkWindow",
                    request:{
                        window:state.extWindow,
                        name:false,
                        tabID:false,
                        action:false
                        
                    }   
                     
                })
                console.log({
                    
                    hash:state.appData.device+state.appData.hash,
                    action:"checkWindow",
                    request:{
                        window:state.extWindow
                        
                    }}) 
            }   
            
        },

        async sendMessageToServer({state},action){
            let url=new URL(state.host+state.saveToBase);
            // let url=new URL(state.host+state.urlApp);
            return fetch(url, {
                method: 'post',
                headers: {"Content-type": "application/json;charset=utf-8"},  
                body: JSON.stringify(action)
            })
            .then(resp=>resp.json())
            .catch(error=>console.log('Request failed', error));
        },
        async registerApp({state},action){
            let url=new URL(state.host+state.registerApp);
            return fetch(url, {
                method: 'post',
                headers: {"Content-type": "application/json;charset=utf-8"},  
                body: JSON.stringify(action)
            })
            .then(resp=>resp.json())
            .catch(error=>console.log('Request failed', error));
        },
        setUserData({state,commit,dispatch},appData){
            commit('setAppData',appData)     
        },
        getUserData({state,commit,dispatch}){
            let appData=JSON.parse(localStorage.getItem('appData'))
            commit('setAppData',appData)
            // dispatch('startEventConnection');      
        },
        getWindow({state,commit}){
            commit('setWindow',JSON.parse(localStorage.getItem('window')))
        },
    },
    modules:{

    }
})