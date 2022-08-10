export default{
    name:"App",
    components:{
     
    },
    data(){
        return{
            
        }
    },
    
    methods:{
        
        closingCode(){
           console.log("aim close")
           preventDefault()
           return null;
        }
    },
    watch:{
       
    },
    mounted(){
        
       
    },
    destroyed(){
        
    },
    created(){
        this.$store.dispatch('getUserData')
        this.$store.dispatch('startEventConnection')

        window.onbeforeunload=(event) => {
            // Отмените событие, как указано в стандарте.
            // this.closingCode()
            console.log(event)
            event.preventDefault();
            // Chrome требует установки возвратного значения.
            event.returnValue = '';
          };
       
    },
    template: /*html*/`
    
    <router-view  v-slot="{ Component , route ,store}">
        <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path"></component>
        </transition>
    </router-view>

    <div class="menu_bar">
            <button @click="()=>$router.push('/profile')">
                <i class="fa-solid fa-circle-user"></i>
            </button>
            <button @click="()=>$router.push('/')">
                <i class="fa-solid fa-calculator"></i>
            </button>
            <button @click="()=>$router.push('/shop')">
                <i class="fa-solid fa-bars"></i>
            </button>
            
    </div>


    `
}