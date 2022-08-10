class User {  
    active=false
    guest=false;
    constructor(name,color,code){
        this.name=name;
        this.color=color;
        this.code=code;
        this.este=new Date().getTime()+1000*60*60*24
    }
    get time(){
        return Math.floor((this.este-new Date().getTime())/1000/60/60) 
    }
    get name(){
        return this._name;
    }
    get color(){
        return this._color;
    }
    set name(value) {
        this._name = value;
    }
    set color(value) {
        this._color = value;
    }
    set code(value) {
        this._code = value;
    }
    addList(){
        this.addEventListener("click",)
    }
    removeList(){
        this
    }
    get div(){
        let clas=""
        if (localStorage.getItem("active")==this.name){
            clas="selected_tab";
            $("#open-tab-users").html(`<div style="background:${this.color}" class="d-flex user-icon_color3 justify-content-center align-items-center p-1">
                <div class="header">
                    ${this.name.charAt(0).toUpperCase()}
                </div>           
            </div> `)
        }
        return `
        <div id="user_${this.name}" style="background:${this.color}" class="wrap-user-tab tab_green m-auto rounded-3 mb-3 ">
            <div id="${this.name}" class="${clas} user-tab d-flex bar justify-content-between align-items-center p-3">
                <div class="d-flex user-icon_form color_hi justify-content-center align-items-center p-1">
                    <div class="header">
                        ${this.name.charAt(0).toUpperCase()}
                    </div>           
                </div> 
                <div class="wrap-header">
                    <div class="header">${this.name}</div>
                    <div class="title">estimate in ${this.time} h</div>
                </div>
                <div class="icon">
                    <i id="close_tab_add_${this.name}" class="fas fa-times-circle del-user"></i>     
                </div>
            </div>
        </div>`
    }
    get icon(){
        return `
        <div class="d-flex user-icon_color3 justify-content-center align-items-center p-1">
            <div class="header">
                ${this.name.charAt(0).toUpperCase()}
            </div>           
        </div> `
    }
}
let users=[];



let info=$("#tab-info"),
    conn1=$("#tab-connect-1"),
    conn2=$("#tab-connect-2"),
    active=$("#tab-active"),
    user_tab=$("#wrap-tab-user"),
    panel=$("#tab-panel")

let m_info=[
    info=$("#tab-info"),
    conn1=$("#tab-connect-1"),
    conn2=$("#tab-connect-2"),
    active=$("#tab-active"),
    user_tab=$("#wrap-tab-user"),
    panel=$("#tab-panel")
]

firstLoad();

//проверка пользователя
function firstLoad(){
    let act_user=localStorage.getItem("active")
    if(act_user==null){
      
        info.toggleClass("d-none")
    }else{

        panel.toggleClass("d-none")
        let user=JSON.parse(localStorage.getItem(act_user))
      
        $("#open-tab-users").html(`<div style="background:${user._color}" class="d-flex user-icon_color3 justify-content-center align-items-center p-1">
                <div class="header">
                    ${user._name.charAt(0).toUpperCase()}
                </div>           
            </div> `)
    }

}

for(let i=0;i<$(".colorsPick").length;i++){
    
    document.querySelectorAll(".colorsPick")[i].addEventListener("click",pickColor)
    $(".colorsPick")[i].click(pickColor)
}
$("#close-tab-info").click(()=>{
    info.toggleClass("d-none")
    let act_user=localStorage.getItem("active")
    if(act_user==null){
        conn1.toggleClass("d-none")
    }else{
        panel.toggleClass("d-none")
    }
})


$("#add-new-user").click(()=>{//add new user button
    
    closeActiveTab()
    conn1.toggleClass("d-none")
  
   
})
$("#nextTo2").click(()=>{// button next step to add new user

    if($("#name_device").val()!=""){
        conn1.toggleClass("d-none")
        conn2.toggleClass("d-none")
    }else{
        $("#name_device").effect( "shake" ,{ direction: "left", times: 2, distance: 10}, 100)
    }
})

$("#backTo1").click(()=>{//кнопка вернуться назад добавить нового пользователя
    conn1.toggleClass("d-none")
    conn2.toggleClass("d-none") 
})

$("#addTo").click(()=>{//кнопка завершить добавление пользователя
    
    if($("#verify_code").val()!=""){
        
        conn2.toggleClass("d-none")
        panel.toggleClass("d-none")
        
        user=new User($("#name_device").val(),$("#ico-col").css("backgroundColor"),$("#verify_code").val())
        $("#open-tab-users").html(`<div id="" style="background:${user.color}" class="d-flex user-icon_color3 justify-content-center align-items-center p-1">
            <div class="header">
                ${user.name.charAt(0).toUpperCase()}
            </div>           
        </div> `)
        localStorage.setItem(user.name, JSON.stringify(user));
        localStorage.setItem("active", user.name);
        $("#verify_code").val("")
        $("#name_device").val("")
    }else{
        $("#verify_code").effect( "shake" ,{ direction: "left", times: 2, distance: 10}, 100)
    }  
    
})

$("#open-tab-info").click(()=>{
    closeActiveTab()
    info.toggleClass("d-none")
})

$("#open-tab-users").click(()=>{
    closeActiveTab()    
    user_tab.toggleClass("d-none")
    if(localStorage.length-1>=4)$("#add-new-user").addClass("d-none")
    loadUsers()

})







function closeActiveTab(){
    for(let i =0;i<m_info.length;i++){
        if(!m_info[i].hasClass("d-none")){m_info[i].toggleClass("d-none")}
    }
}


function loadUsers(){
    $("#tab-user").html("")
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i); 
        if(key=="active")continue
            let p_user=JSON.parse(localStorage.getItem(key))
            users[i]=new User(p_user._name,p_user._color,p_user._code)
            
            $("#tab-user").prepend(users[i].div)

            // console.log(`${key}: ${localStorage.getItem(key)}`);

            $(`#close_tab_add_${users[i].name}`).click(delUser)

        $(`#${users[i].name}`).click(pickUser)
    }
    for(let i=0;i<$(".user-tab").length;i++){
        
    }
    console.log()  
}
function delUser(){

    $(event.currentTarget.id).off("click")
    $(this).parent().parent().parent().remove()
    
    event.stopPropagation();
    console.log($(this).context.id)
    if(localStorage.getItem("active")==$(this).parent().parent()[0].id){
        for(let i=0; i<localStorage.length; i++){
            let key = localStorage.key(i); 
            if(key==$(this).parent().parent()[0].id||key=="active")continue
            else {localStorage.setItem("active",key)
            $(`#${key}`).addClass("selected_tab")
            let us=JSON.parse(localStorage.getItem(key))
            console.log(us)
            $("#open-tab-users").html(`<div style="background:${us._color}" class="d-flex user-icon_color3 justify-content-center align-items-center p-1">
            <div class="header">
                ${us._name.charAt(0).toUpperCase()}
            </div>           
        </div> `)


            break}
        }
    }
    if(document.querySelector(".del-user")==null){
        $("#open-tab-users").html(`<i class="fas fa-question-circle"></i>`)
        localStorage.removeItem("active")
    }
    console.log(document.querySelector(".del-user")) 
    localStorage.removeItem($(this).parent().parent()[0].id)
    if(localStorage.length-1<=4)$("#add-new-user").removeClass("d-none")
}

function pickUser(e){
    $(".user-tab").removeClass("selected_tab");
    $(this).addClass("selected_tab");
    
    localStorage.setItem("active",$(this).context.id)
    if($(this).id!=document.getElementsByClassName("del-user")[0].id){
        $("#open-tab-users").html(`<div style="background:${$(this).parent().css("backgroundColor")}" class="d-flex user-icon_color3 justify-content-center align-items-center p-1">
    <div class="header">
        `+$($(this).find(".header")[0]).text()+`
    </div>           
</div> `)
    }
    closeActiveTab()
    panel.toggleClass("d-none")

}
function pickColor(e){
   
    $(".colorsPick").removeClass("isChoosed");
    $(this).addClass("isChoosed")
    $(".user-icon_color").css({backgroundColor:getComputedStyle(this).backgroundColor})
}

$("#name_device").on('input propertychange',function(){
    if($("#name_device").val().length==0){
        $(".name-icon").text("N")
    }else if($("#name_device").val().length==1){
        $(".name-icon").text($("#name_device").val()[0].toUpperCase())
        // $(".name-icon").text("h")
    }
})




$("#youtube-tab").click(openChanel)

function openChanel(){
    panel.toggleClass("d-none")
    $(".main-tab").toggleClass("d-none")
    $(".youtube-channel").toggleClass("d-none")
}





$("#exit-menu").click(()=>{
    closeActiveTab()
    $(".main-tab").toggleClass("d-none")
    panel.toggleClass("d-none")
})








$("#o_search").click(()=>openHidePan())
$("#close_search").click(()=>openHidePan())


function openHidePan(){
    console.log($("#search_pan"))
    $("#search_pan").toggleClass("d-none")
    $("#manybtn").toggleClass("d-none")

}

$("#toSearch").click(()=>search())


function search(){
    let val=$("#search_input").val()
    console.log(val)
    let a={
        value:'{"who":"remote","action":"search","site":"youtube","search":"'+val+'"}'
    }
    action(a)
}






function changeIsOpen(e){
    e.div.css({z_index:999})
    
    e.isOpen==true?e.div.css({right:"-200%"}):console.log()
    e.isOpen==true?e.div.css({left:"0"}):console.log()

    e.isOpen=(e.isOpen==true)?false:true;
    
    
    e.div.addClass("right")
    for(let prop in main_tab){
      
    }
    if(e.div.selector=="#tab-connect-1"&&e.isOpen==true){
        console.log(e.div.selector)
        for(let i=0;i<document.querySelectorAll(".colorsPick").length;i++){
            document.querySelectorAll(".colorsPick")[i].addEventListener("click",pickColor)
            console.log("add");
        }

    }else if(e.div.selector=="#tab-connect-1"&&e.isOpen==false){
        console.log("close")
        for(let i=0;i<document.querySelectorAll(".colorsPick").length;i++){
            document.querySelectorAll(".colorsPick")[i].removeEventListener("click",pickColor)
            console.log("remove");
        }
    }
    if(e.div.selector=="#tab-user"&&e.isOpen==true){
        console.log(e.div.selector)
        for(let i=0;i<document.querySelectorAll(".user-tab").length;i++){
            document.querySelectorAll(".user-tab")[i].addEventListener("click",pickUser)
            console.log("add");
        }

    }else if(e.div.selector=="#tab-user"&&e.isOpen==false){
        console.log("close")
        for(let i=0;i<document.querySelectorAll(".user-tab").length;i++){
            document.querySelectorAll(".user-tab")[i].removeEventListener("click",pickUser)
            console.log("remove");
        }
    }

}

















