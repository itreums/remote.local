export default{
    name:"Main",
    data(){
        return{
            isActive:true,
            statusText:"",
            version:"REMOTE CONTROL v1.0.2",
            textto:"",
            index:0,
            speed:300,
  
            channels:[
                {
                    img:"../youtube/img/youtube_icon.png",
                    name:"youtube",
                    siteAction:"parseYoutube"
                },
                {
                    img:"../youtube/img/tiktok_icon.png",
                    name:"tiktok",
                    siteAction:false
                },
                {
                    img:"../youtube/img/yandex_music_icon.png",
                    name:"yandexmusic",
                    siteAction:"parseYandexMusic"

                },         
            ],
            
        }
    },
    methods:{
        createChannel(channel){       
            let command={
                hash:this.$store.state.appData.device+this.$store.state.appData.hash,
                action:"createTab",
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:channel.name,
                    tabID:false,
                    action:channel.siteAction
                }            
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)
            this.$router.push({ name: channel.name})
        },
        changeChannel(tab){
            let command= {
                hash:this.$store.state.appData.device+this.$store.state.appData.hash,
                action:"updateTab",
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:tab.name,
                    tabID:tab.id,
                    action:this.channels.find(channel=>channel.name==tab.name)?.siteAction
                }     
            }
            console.log(command)
            this.$store.dispatch('sendMessageToServer',command)
            this.$router.push({name:tab?.name,params: {tabID: tab.id}})
        },       
        closeChannel(tab){
            let command= {
                hash:this.$store.state.appData.device+this.$store.state.appData.hash,
                action:"closeTab",
                request:{
                    windowID:this.$store.state.extWindow.windowID,
                    name:tab.name,
                    tabID:tab.id,
                    action:false
                }     
            }
            this.$store.dispatch('sendMessageToServer',command)
        },

        typeWriter() {              
            if (this.index < this.$store.state.statusText.length) {
              this.textto += this.$store.state.statusText.charAt(this.index);
              this.index++;         
            }else{
                this.index=0
                this.textto=""
            }
            setTimeout(this.typeWriter, this.speed);
        },
        hasOpenChannels(){
            if(this.$store.state.listChannels.length!=0){
                this.isActive=false
            }
        },  
        checkTabs(){
            if(this.$store.state.extWindow!=false){
                this.isActive=false
            }
        }
    },
    watch:{
        '$store.state.statusText':function (newStatus,oldStatus){
            this.index=0
            this.textto=""
            this.text=newStatus
        },
        '$store.state.extWindow':function (newStatus,oldStatus){
            this.isActive=false
        },

    },
    mounted(){
        this.checkTabs()
    },
    created(){ 
        this.hasOpenChannels(),
        this.typeWriter()  
    },
    template:/*html*/`
    <div class="panel">
        <div class="wrap_status">
            <div class="status">{{version}}</div>
            <div class="active_remote_signal">
                <div class="tv">
                    <img src="../youtube/img/nosignal.png" alt="">
                    <div class="cover_tv"></div>
                </div>
                <div class="active_remote_wrap">
                    <div class="active_remote">
                        {{textto}}
                    </div>
                </div>
            </div>
        </div>

        
        <div class="wrap_remote"
            
            :class="{ remote_active: isActive}"
        >
            <div class="">
                <div class="info_remote_tabs">Tabs</div>
                <div class="open_remote">
                    <div class="open_remote_bar">
                        <button class="bar_btn bar_btn_white"
                        @click="()=>{isActive=!isActive}"
                        >
                            <i class="fa-solid fa-desktop"></i>
                
                        </button>
                    </div>
                    <div class="opened_tabs" >
                        
                            <div class="tab" v-for="tab in $store.state.extWindow?.tabs">
                                <div class="plankChannel" @click="changeChannel(tab)">
                                    <img src="tab.img" alt="">
                                    <div class="tab_info">
                                        {{tab.name}}
                                    </div>
                                </div>
                                <button @click="closeChannel(tab)">
                                    <i class="fa-solid fa-circle-xmark"></i>
                                </button>
                            </div>
                        
                    </div>
                </div>
            </div>

            <div class="">
                <div class="info_remote_channel">Channels</div>
                <div class="channel_remote">
                
                    
                    <div class="channel_remote_bar">
                        <button class="bar_btn bar_btn_black"
                        
                        @click="()=>{isActive=!isActive}"
                        >
                            <i class="fa-solid fa-calculator"></i>
                    
                        </button>
                    </div>
                

                
                    <div class="channel_remote_button">
                        <button v-for="channel in channels"
                            class="button_remote"
                            @click="createChannel(channel)"
                        >
                            <img :src="channel.img" alt="">
                        </button>
                    
                    </div>
                
                </div>
            </div>
        
        </div>

        
    
    
    
    
    </div>
    `
}