export default{
    name:"RemoteYoutube",
    props:{

    },
    data(){
        return{
            buttons:[
                {
                    text:"search",
                    icon:"fa-solid fa-diagram-next"
                },
                {   
                    text:"next",
                    icon:"fa-solid fa-house"
                },
                {   
                    text:"next",
                    icon:"fa-solid fa-compass"
                },
            ],
            buttons2:[
                {
                    name:"back",
                    icon:"fa-solid fa-backward-step",
                    action:"parse",       
                },
                {
                    name:"play",
                    icon:"fa-solid fa-play",
                    action:"play",    
                },
                {   
                    name:"next",
                    icon:"fa-solid fa-forward-step",
                    action:"next",
                },              
                {   
                    name:"fullScreen",
                    icon:"fa-solid fa-expand",      
                    action:"fullScreen",
                },
                {   
                    name:"setting",
                    icon:"fa-solid fa-gear",
                    click:()=>{this.settingPanel=!this.settingPanel}
                },
            ],
            buttons3:[
                {
                    text:"sound",
                    icon:"fa-solid fa-volume-off"
                },
                {   
                    text:"subtitle",
                    icon:"fa-solid fa-closed-captioning"
                },
                {   
                    text:"speed",
                    icon:"fa-solid fa-gauge"
                },
                {   
                    text:"quality",
                    icon:"fa-solid fa-sliders"
                },
            ],
            settingPanel:false,
            searchVal:""
        }
    },
    methods:{
        doAction(action,siteAction){
            let command= {
                hash:this.$store.getters.getConnectionPath,             
                action:action,
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:"youtube",
                    tabID:this.$store.getters.getTabId?.id,
                    action:siteAction,
                    link:"https://www.youtube.com/results?search_query="+this.searchVal,
                    search:this.searchVal
                }     
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)
        }
    },
    template:/*html*/`

    <div class="wrap_remote_panel">
        <div class="remote_panel">

                <div class="search_youtube d-flex">
                    <button class="bar_btn bar_btn_black youtube_btn">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </button>
                    <div class="wrap_input_search">
                        <input
                            v-model="searchVal"
                            type="text"
                            placeholder="type a word"
                        >
                    </div>
                    <button class="bar_btn bar_btn_black youtube_btn" @click="doAction('toLink','parseYoutube')">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div id="links">
                    <button v-for="btn in buttons"
                        class="bar_btn bar_btn_black mr-3"
                    >
                    <i :class="btn.icon"></i> 
                    </button>
                </div>
                <div class="control_panel">
                    <button v-for="btn in buttons2"
                        class="button_remote mr-3"
                        @click="doAction('injection',btn.action)"
                    >
                    <i :class=" btn.icon"></i>
                    
                    </button>
                </div>

                <div class="options_panel" v-show="settingPanel===true"
                    
                >
                    <button v-for="btn in buttons3"
                    class="bar_btn bar_btn_black youtube_btn"
                    >
                        <i :class=" btn.icon"></i>
                    
                    </button>
                </div>
                
        </div>
    </div>
    

    
    `

}