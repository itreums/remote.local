export default{
    name:"YandexMusic",
    data(){
        return{
            tabID:false,
            searchVal:""
        }
        
    },
    methods:{
        play(){
            let command={
                hash:this.$store.getters.getConnectionPath,
                action:"injection",     
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:"yandexmusic",
                    tabID:this.$store.getters.getTabId?.id,
                    action:"play",
                }
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)
        },
        doAction(action,siteAction,link){
            let command= {
                hash:this.$store.getters.getConnectionPath,             
                action:action,
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:"yandexmusic",
                    tabID:this.$store.getters.getTabId?.id,
                    action:siteAction,
                    link:"https://music.yandex.ru/search?text="+this.searchVal+"&type=tracks",
                    search:this.searchVal,
                    data_b:link
                }     
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)
        },
        makeActiveTab(){
            this.$store.state.activeTab="yandexmusic"
        }
        

    },
    created(){
        this.makeActiveTab()
        
    },
    template:/*html*/`

    <div class="panel">
        <div class="panel_yandex">
           <div class="panel_yandex_label">           
               YM-{{$store.getters.getIdTab?.id}}
           </div>
            
            <div class="wrap_track_list">
                <div class="track_list">

                    <template v-for="item in $store.state?.responseYandex">
                        <div class="d-flex track" @click="doAction('injection','playTrack',item.link)">
                            <img :src="item.img" alt="">
                            <div class="track_info">
                                <div class="track_info_track">{{item.track.substr(0, 19)}}</div>
                                <div class="track_info_artist">{{item.artist.substr(0, 19)}}</div>
                            </div>
                            
                        </div>
                        

                    </template>
                </div>
            </div>
            <div class="yandex_remote">
                <div class="yandex_remote_search_group">
                    <input
                        v-model="searchVal"
                        type="text"
                        placeholder="Search track or artist..."
                    >
                    <button @click="doAction('toLink','parseYandexMusic')"
                        class="yandex_remote_btn__red_mini yandex_remote_btn_mini"
                    >
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div class="yandex_btn_group">
                    <button class="yandex_remote_btn__black" @click="doAction('injection','back',false)">
                        <i class="fa-solid fa-backward-step"></i>
                    </button>
                    <button class="yandex_remote_btn__black" @click="play">
                        <i class="fa-solid fa-play"></i>
                    </button>
                    <button class="yandex_remote_btn__black" @click="doAction('injection','next',false)">
                        <i class="fa-solid fa-forward-step"></i>
                    </button>
                </div>
                
                
                
            </div>
        </div>
    </div>
    `
}