export default{
    name:"TikTok",
    data(){
        return{
            
        }
    },
    methods:{
        play(){
            let command={
                // linkID:"app-xx3",
                // action:"injection",     
                // request:{
                //     windowID:this.$store.state.window.windowID,
                //     site:"music",
                //     tabID:80,
                //     action:"play",
                }
                this.$store.dispatch('sendMessageToServer',command)
            },
            doAction(action,siteAction){
                let command= {
                    hash:this.$store.getters.getConnectionPath,             
                    action:action,
                    request:{
                        windowID:this.$store.state.extWindow.windowID,
                        name:"tiktok",
                        tabID:this.$store.getters.getTabId?.id,
                        action:siteAction,
                        link:false,
                        search:false,          
                    }     
                }
                console.log(command)
                this.$store.dispatch('sendMessageToServer',command)
            }
            
    },

    created(){
        // if(this.$store.state.auth===false){
        //     this.$router.push("/auth")
            
        // }
    },
    template:/*html*/`

    <div class="panel">
        <div class="panel_tiktok">
            <div class="cable">
                <img src="../apps/tiktok/img/cable_gray.png" alt="">
            </div>
            <div class="remote_tiktok">
                <div class="remote_tiktok_wrap_btn">
                    <div class="btn_row">
                        <button class="remote_tiktok_btn remote_tiktok_btn__red"
                        @click="play"><i class="fa-solid fa-play"></i></button>
                    </div>
                    <div class="btn_row">
                        <button class="remote_tiktok_btn remote_tiktok_btn__white"                 
                        @click="doAction('injection','next')"><i class="fa-solid fa-backward-step"></i></button>
                        <div class="tiktok_name">
                            TT-{{$store.getters.getTabId?.id}}
                        </div>
                        <button class="remote_tiktok_btn remote_tiktok_btn__blue" 
                        @click="doAction('injection','prev')"><i class="fa-solid fa-forward-step"></i></button>
                    </div>
                    <div class="btn_row">
                        <button class="remote_tiktok_btn remote_tiktok_btn__dark" 
                        @click="doAction('injection','autoplay')"><i class="fa-solid fa-repeat"></i></button>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    `
}