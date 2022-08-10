export default{
    name:"Shop",
    methods:{
        openAppInfo(){

        }
    },
    created(){
        // if(this.$store.state.auth===false){
        //     this.$router.push("/auth")
            
        // }
    },
    template:/*html*/`

    <div class="panel">
        <div class="app_info_wrap">
            <div class="app_info">
                <div class="app_info_btn_row">
                    <button>
                        <i class="fa-solid fa-circle-xmark"></i>
                    </button>
                    
                </div>
                <div class="app_info_app">
                    <div class="app_info_app_img">
                        <img src="" alt="">
                    </div>
                    <div class="app_info_app_info">
                        <div class="app_info_name">
                            Yandex Music
                        </div>
                        <div class="app_info_type">
                            music
                        </div>
                    </div>
                </div>
                <div class="app_info_btn_add_row">
                    <div class="app_info_warning">
                        this app is added in your remote
                    </div>
                    <div class="app_info_btn_add">
                        <button>Remove</button>
                    </div>
                </div>
                <div class="app_info_about">
                    Yandex Music is a Russian music streaming service developed by Yandex. Users select musical compositions, albums, collections of musical tracks to stream to their device on demand and receive personalized recommendations. The service is also available as web browser. Service is available in Armenia, Azerbaijan, Belarus, Georgia, Israel, Kazakhstan, Kyrgyzstan, Moldova, Russia, Tajikistan, Turkmenistan and Uzbekistan. Subscription can only be paid from supported countries above, but the service is then available in all other countries
                </div>
            </div>
        </div>
        <div class="panel_shop">
            <div class="shop_realised">
                <div class="shop_title">
                    Realised
                </div>
                <div class="shop_realised_apps">
                    <div class="reliased_app">
                        <div class="reliased_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="reliased_app_name">
                            Youtube
                        </div>
                    </div>
                    <div class="reliased_app">
                        <div class="reliased_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="reliased_app_name">
                            Youtube
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop_onbuild">
                <div class="shop_title">
                    On build
                </div>
                <div class="shop_onbuild_apps">
                    <div class="onbuild_app">
                        <div class="onbuild_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="onbuild_app_name">
                            Youtube
                        </div>
                    </div>
                    <div class="onbuild_app">
                        <div class="onbuild_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="onbuild_app_name">
                            Youtube
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop_voited">
                <div class="shop_title">
                    which will be next
                </div>
                <div class="voited_apps_list">
                    <div class="voited_app">
                        <div class="voited_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="voited_app_name">
                            kion
                        </div>
                        <div class="voited_app_vote">
                            22
                        </div>
                        <div class="voited_app_btn">
                            <button class="voited_app_btn_vote">voit</button>
                        </div>
                    </div>
                    <div class="voited_app">
                        <div class="voited_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="voited_app_name">
                            kion
                        </div>
                        <div class="voited_app_vote">
                            22
                        </div>
                        <div class="voited_app_btn">
                            <button class="voited_app_btn_vote">voit</button>
                        </div>
                    </div>
                    <div class="voited_app">
                        <div class="voited_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="voited_app_name">
                            kion
                        </div>
                        <div class="voited_app_vote">
                            22
                        </div>
                        <div class="voited_app_btn">
                            <button class="voited_app_btn_vote">voit</button>
                        </div>
                    </div>
                    <div class="voited_app">
                        <div class="voited_app_img">
                            <img src="" alt="">
                        </div>
                        <div class="voited_app_name">
                            kion
                        </div>
                        <div class="voited_app_vote">
                            22
                        </div>
                        <div class="voited_app_btn">
                            <button class="voited_app_btn_vote">voit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop_suggest">
                <div class="shop_title">
                    Suggest you app
                </div>
                <div class="suggest_row">
                    <input type="text"
                        placeholder="enter site name"
                    >
                    <button class="suggest_submit">submit</button>
                </div>
            </div>
        </div>
    </div>
    `
}