import ButtonYoutube from "../../ui/youtube/ButtonYoutube.js";

export default{
    name:"VideoList",
    components:{
        ButtonYoutube
    },
    props:{
        video:Array
    },
    methods:{
        setActiveVideo(title,link){
            this.$emit('act',title,link)
        }
    },
    template:/*html*/`
        <div class="app_list_youtube" >
                    
            <div class="listovelo">
                
                    <template v-for="item in video">
                        <div
                            class="app_list_youtube_video"
                            ref="list_video"
                        >
                            <div class="wrap_img_youtube">
                                <img :src="item.img" alt="">
                            </div>
                            <button-youtube
                                class="button_youtube"
                                @click="setActiveVideo(item.title,item.link)"

                                :key="item.title"
                            >{{item.title}}</button-youtube>
                        </div>
                    </template>
                
            </div>
        </div>
    `
}