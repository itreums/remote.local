

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"> 
    <!-- <link rel="stylesheet" href="css/style.css"> -->
    <link rel="stylesheet" href="css/styleNew.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> -->
    <!-- <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css"> -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script> -->
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

    <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"> -->
    <script src="https://kit.fontawesome.com/75e42854e2.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">


    <style>
 
  </style>

    <title>Document</title>
</head>

<body>

<!-- main window -->
    <div class="main-tab main-tab_style container_fluid h-100 rounded-3 ">
        <div class="bar bar_top d-flex  justify-content-between align-items-center p-3 m-auto">
            <div id="open-tab-info" class="icon">           
                <i  class="fas fa-play"></i>           
            </div>
            <div class="header text-center">
                REMOTE CONTROL
            </div>
            <div id="open-tab-users" class="icon">              
                <i class="fas fa-question-circle"></i>           
            </div>
        </div>
    </div>

<!-- infoTab -->
    <div id="tab-info" class="tab position-fixed m-auto rounded-3 d-none">
        
        <div class="d-flex bar justify-content-between p-3">
            <div class="wrap-header">
                <div class="header">
                    REMOTE CONTROL        
                </div> 
                <div class="title">
                    Version 1.1.2
                </div>             
            </div>
            <div class="icon">         
                <i  id="close-tab-info" class="fas fa-times-circle"></i> 
            </div>
        </div>
        <div class="title p-3 pt-0">           
            Thanks for realese</br>
            <a href="#">rukukulu@mail.ru</a>
            xc
            Make DONATE on page 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestias recusandae! Atque ipsum voluptas exercitationem eveniet quaerat rerum ullam dolorum error illo ratione? Illo perferendis pariatur dolorum consectetur delectus minus!         
        </div>          
    </div>

<!-- connect -->
    <div id="tab-connect-1" class="tab position-fixed m-auto rounded-3 d-none">
        <div class="d-flex bar justify-content-between p-3">
            <div class="wrap-header">
                <div class="header">
                    CONNECT DEVICE        
                </div> 
                <div class="title">
                    1 / 2
                </div> 
            </div>                
            <div class="icon">         
                <i  id="close-tab-conn-1" class="fas fa-times-circle"></i> 
            </div>
            
        </div>

    
        <div class="user-icon d-flex  justify-content-center">
            <div id="ico-col" class="d-flex user-icon_color justify-content-center align-items-center p-1">
                <div class="header name-icon">
                    N
                </div>           
            </div>
        </div>
        
        <div class="user-form m-3">
            <label for="name_device" class="form-label info title">ENTER NAME FOR NEW DEVICE</label>
            <input type="text" class="form-control" id="name_device" placeholder="NewUser" value="">
        </div>
        <div class="color-form m-3">
            <label for="color" class="form-label title">CHOOSE A COLOR</label>
            <div id="colors" class="rangeColor d-flex justify-content-between">
                <div class="c_red colorsPick  isChoosed"></div>
                <div class="c_orange colorsPick  "></div>
                <div class="c_yellow colorsPick  "></div>
                <div class="c_green colorsPick  "></div>
                <div class="c_blue colorsPick "></div>
                <div class="c_cyan colorsPick  "></div>
                <div class="c_violet colorsPick "></div>                        
            </div>
            <div class="buttons d-flex mt-3">
                <button id="nextTo2" type="button" class="btn btn-dark btn_style  c_black">NEXT</button>
            </div>
        </div>
           
         
                
    </div>

<!-- connect 2 -->
    <div id="tab-connect-2"  class="tab position-fixed m-auto rounded-3 d-none">
        <div class="d-flex bar justify-content-between p-3">
            <div class="wrap-header">
                <div class="header">
                    CONNECT DEVICE        
                </div> 
                <div class="title">
                    2 / 2
                </div> 
            </div>                
            <div class="icon">         
                <i  id="close-tab-conn-2" class="fas fa-times-circle"></i> 
            </div>
            
        </div>

        
            
        <div class="device-form m-3">
            <label for="verify_code" class="form-label title">ENTER VERIFY CODE</label>
            <input type="text" class="form-control" id="verify_code" placeholder="Verify code" >
        
            <div class="title mt-3">
                You can find verified code open extention icon in your browser    
            </div>
            
            <div class="buttons d-flex mt-3 g-2 justify-content-center">
                <button id="backTo1" type="button" class="btn btn-dark btn_style c_black">BACK</button>
                <button id="addTo" type="button" class="btn btn-dark btn_style c_black">ADD</button>
            </div>
        </div>  
            
        
        
    </div>

<!-- cative tab -->
    <div id="tab-active"  class="tab position-fixed m-auto rounded-3 d-none">
        <div class="d-flex bar justify-content-between align-items-center p-3">
            <div class="youtube">
                <img src="img/youtube_icon.png" alt="">
            </div>
            <div class="header">ACTIVE TAB</div>
            <div class="icon">
                <i  id="close_tab_add_user" class="fas fa-times-circle del-tab"></i>   
            </div>
        </div>
    </div>

<!-- -------------------users-pane------------------------- -->
<div id="wrap-tab-user" class="position-fixed m-auto d-none">  
    <div id="tab-user"> 
    <!-- <div  class="wrap-user-tab  tab_green m-auto  rounded-3 mb-3">
        <div class="user-tab d-flex bar justify-content-between align-items-center p-3">
            <div class="d-flex user-icon_form justify-content-center align-items-center p-1">
                <div class="header">
                    N
                </div>           
            </div> 

            <div class="wrap-header">
                <div class="header">NewUser</div>
                <div class="title">estimate in 14 h</div>
            </div>
            

            <div class="icon">
                    <i id="close_tab_add_user" class="fas fa-times-circle del-user"></i>     
            </div>
        </div>
    </div> -->
    </div>
    <div class="wrap-btn d-flex justify-content-center mb-3">
        <button id="add-new-user" type="button"class="btn btn-dark  btn_style ">ADD</button>
    </div>  
</div>
<!-- -------------------end-users-pane---------------------------------------- -->

<!-- -------------------end-chanels-pane---------------------------------------- -->
<div id="tab-panel"  class="tab_pans m-auto d-none">
    <div class="row flex-row-reverse  row-cols-4 gx-0 gy-4">
        
        <div class="d-flex justify-content-center ">
            <div class="wrap-icon">
                <img src="img/youtube_icon.png" alt="">
            </div>             
        </div>
        <div class="d-flex justify-content-center">
            <button id="youtube-tab" class="wrap-icon"  onclick="action(this)" value={"who":"remote","action":"tab","site":"youtube"}>
                <img src="img/youtube_icon.png" alt="">
</button>
        </div>      
        <div class="d-flex justify-content-center">
            <div class="wrap-icon selected_tab">
                <img src="img/youtube_icon.png" alt="">
            </div>
        </div>
        <div class="d-flex   justify-content-center">
            <div class="wrap-icon">
                <img src="img/tiktok_icon.png" alt="">
            </div>
        </div>
        <div class="d-flex justify-content-center ">
            <div class="wrap-icon">
                <img src="img/insta_icon.png" alt="">
            </div>
        </div>
        
    </div>   
</div>


<!-- ---------------------------end-chanels-pane----------------------------------------- -->

<div class="youtube-channel h-100 d-flex justify-content-end position-fixed m-auto d-none">

    <div id="links"></div>

    <!-- <div class="tabs d-flex flex-row-reverse reverse tabs_close">
        <button id="tab_youtube" class="tab btn" onclick="action(this)" value={"who":"remote","action":"tab","site":"youtube"}></button>
        <button disabled id="tab_tiktok" class="tab btn"></button>
        <button disabled id="tab_insta" class="tab btn"></button>
    </div> -->
    <div id="search_pan" class="menu_pan d-none">
        <div class="pan_play d-flex justify-content-between">
            <button id="close_search" class="button btn add_btn play_btn btn" ><i class="fas fa-times-circle"></i></button>
            <input type="text" class="form-control" id="search_input" placeholder="Search" >
            <button id="toSearch" class="button btn add_btn play_btn btn" ><i class="fas fa-search"></i></button>
        </div>
    </div>



    <div id="manybtn" class="menu_pan ">
        <div class="pan_play d-flex justify-content-between">
            <button id="" class="button btn add_btn play_btn btn" ><i class="fas fa-closed-captioning"></i></button>
            <button id="next" class="button btn add_btn play_btn btn" ><i class="fas fa-tachometer-alt"></i></button>
            <button id="next" class="button btn add_btn play_btn btn" ><i class="fas fa-h-square"></i></button>
            <button id="next" class="button btn add_btn play_btn btn" ><i class="fas fa-bars"></i></button>
            <button id="next" class="button btn add_btn play_btn btn" ><i class="fas fa-ellipsis-h"></i></button>
            <button id="next" class="button btn add_btn play_btn btn" ><i class="fas fa-volume-up"></i></i></button>
            <button id="o_search" class="button btn add_btn play_btn btn" ><i class="fas fa-search"></i></button>
        </div>
    </div>
    <div class="menu_pan ">
        <div class="pan_play d-flex justify-content-between ">
            <button id="fullScreen" class="button btn add_btn play_btn btn" onclick="action(this)" value={"who":"remote","action":"fullScreen","site":"youtube"}><i class="fas fa-expand"></i></button>
            <button id="back" class="button btn add_btn play_btn btn" onclick="action(this)" value={"who":"remote","action":"parse","site":"youtube"}><i class="fas fa-step-backward"></i></button>
            <button id="play" class="button btn add_btn play_btn btn" onclick="action(this)" value={"who":"remote","action":"play","site":"youtube"}><i class="fas fa-play"></i></button>
            <button id="next" class="button btn add_btn play_btn btn" onclick="action(this)" value={"who":"remote","action":"next","site":"youtube"}><i class="fas fa-step-forward"></i></button>
             <button id="next" class="button btn add_btn play_btn btn" ><i class="fas fa-align-right"></i></button>
        </div>
    </div>
    <div class="menu_pan ">
        <div class="pan_play d-flex justify-content-center">
            
            <button id="exit-menu" class="button btn add_btn play_btn btn"><i class="fas fa-bars"></i></button>
            
        </div>
    </div>
</div>    




    
    

    <script src="scripts/cookie.js"></script>
    <script src="scripts/button.js"></script>
    <!-- <script src="scripts/interface.js"></script> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>