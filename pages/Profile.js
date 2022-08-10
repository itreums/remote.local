export default{
    name:"Profile",
    methods:{
        deleteLink(){
            localStorage.removeItem('appData')
            this.$store.state.appData=false
            this.$router.push({name:"auth"})
        }
    },
    template:/*html*/`
    <div class="panel">
        
        <div class="panel_profile">
            <div class="profile_bar d-flex">
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
            <div class="profile_list">
                <div class="profile_badge d-flex">
                    <div class="profile_bage_info">
                        <div class="name">
                            name: {{this.$store.state.appData.name}}
                        </div>
                        <div class="linkId">
                            linID: {{this.$store.state.appData.linkID}}
                        </div>
                    </div>
                    <div class="profile_bage_btn_bar">
                        <button @click="deleteLink"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

}