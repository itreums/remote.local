import VideoList from "../../apps/youtube/VideoList.js";
import RemoteYoutube from "../../apps/youtube/RemoteYoutube.js";
export default{
    name:"Youtube",
    components:{
        RemoteYoutube,
        VideoList
    },
    props: ['tabID']
    ,
    data(){
        return{
           
            videoActive:"no video playing",
            active:false,

            actionLink:{
                "who":"remote",
                "action":"toLink",
                "site":"youtube",
                "link":""
            },

            items:[],
            explorerVideo:[
                {
                    "link": "https://www.youtube.com/watch?v=kvqttQVV0-A",
                    "title": "Умер Юрий Шатунов",
                    "img": "https://i.ytimg.com/vi/kvqttQVV0-A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxVygrnX4GzGC2GsFMnWALurn3kQ"
                },
                {
                    "link": "https://www.youtube.com/watch?v=BHkLu2kKdL8",
                    "title": "ЖЕНА РЫДАЕТ И УСПОКАИВАЕТ ДЕТЕЙ. Когда состоятся похороны легенды – Юрия Шатунова",
                    "img": "https://i.ytimg.com/vi/BHkLu2kKdL8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0_MGdmfttFIn-daFV18lTUgBDPg"
                },
                {
                    "link": "https://www.youtube.com/watch?v=yJ-b-tEtPVw",
                    "title": "Юрий Шатунов убит? Юра Шатунов Ласковый Май что случилось?",
                    "img": "https://i.ytimg.com/vi/yJ-b-tEtPVw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwrNlhThrzsX7wZf_aDr7bpLnO3A"
                },
            ],

        }
    },
    
    methods:{
        getVideoList(){
            let command= {
                hash:this.$store.state.appData.device+this.$store.state.appData.hash,
                action:"injection",
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:"youtube",
                    tabID:150,
                    action:"parseYoutube"
                }     
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)
        },
        setActiveVideo(title,link){
            this.videoActive=title
            let command= {
                hash:this.$store.getters.getConnectionPath,             
                action:"toLink",
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:"youtube",
                    tabID:this.$store.getters.getTabId?.id,
                    action:"parseYoutube",
                    link:link
                }     
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)






            // this.actionLink.link=link
        },
        makeActiveTab(){
            this.$store.state.activeTab="youtube"
        }

    },
    mounted(){
        // this.getVideoList()
    },
    created(){
        this.makeActiveTab()

    },
    template:/*html*/`
        
            
        <div class="panel">
            <div class="d-flex wrap_panel_youtube">
                <div class="app_brums">Active</div>
                <div class="app_list_youtube_active_video" >
                    {{videoActive}}
                    
                </div>

                <div class="app_brums">Explorer</div>
                
                <video-list @act="setActiveVideo" :video="$store.state?.response"></video-list>
                

                <remote-youtube ></remote-youtube>

            </div>
    
        </div>
            
        
    `
}