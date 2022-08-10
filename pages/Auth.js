export default{
    name:"Auth",
    data(){
        return{
            appData:{
                device:"app_",
                linkID:"",
                hash:"",
                name:""        
            },          
            validName:false
        }
    },
    methods:{       
        checkName(){
            if(this.appData.name==""){
                alert("not valid")
            }else{
                this.validName=true
            }  
        },
        async checkLogin(){
            let response=await this.$store.dispatch('registerApp',this.appData)
            if (response.status==false){
                alert("This LinkID no valid!")
            }else{
                this.appData.hash=response.hash
                localStorage.setItem("appData",JSON.stringify(this.appData))
                this.$store.dispatch("setUserData",this.appData)
                this.$store.dispatch('startEventConnection')
                this.$router.push("/")
            }           
        }

    },
    computed: {
 
    },
    created(){

    },
    template:/*html*/`
        <div class="panel">
            <div class="panel_auth">
                
                <div class="wrap_authPage">
                    <div class="app_preview">
                        <div class="logo">
                            <img src="../assets/img/logo.svg" alt="">
                        </div>
                        <div class="text_logo">
                            <b>Remote</b>Control
                        </div>
                    </div>


                    <div v-if="validName" class="auth_input">
                        <input
                            type="text"
                            placeholder="Enter your linkID"
                            v-model="appData.linkID"
                        >
                        <button @click="checkLogin()">Login</button>
                    </div>
                    <div v-else class="auth_input">
                        <input
                            type="text"
                            placeholder="Enter user name"
                            v-model="appData.name"
                        >
                        <button @click="checkName()">Next</button>
                    </div>
                </div>
            </div>
        </div>

    `
}