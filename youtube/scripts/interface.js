window.onload = function() {
    let alredyStart=false;
    let state={
    close:false,
    panel:false,
    tab:false
}
    let add=$("#add");
    let tabs=$(".tabs");
    let pan=$(".pan_play");

 add.click(e=>{
    add.toggleClass("close"); //change img
    
    
    if(state.close==false){

        state.close=true;

        // if(state.panel==true){
            state.panel=false;
            pan.animate({left: "-100%",}, 500, function() {});
        // }
           
        tabs.animate({ bottom: "+=90",}, 500, function() {});
    }else{
        if(alredyStart!=false){ //if no tab was selected

            pan.animate({left: "0px",}, 500, function() {}); 


            }
        state.close=false;

        tabs.animate({bottom: "-=90",}, 500, function() {});
    }
   console.log(state.close);


    });

 $("#tab_youtube").click(e=>{
    alredyStart=alredyStart==false?true:true; 
    if(state.close==true){
    
    state.close=false;
    add.toggleClass("close");
    tabs.animate({bottom: "-=90",}, 500, function() {});

    state.panel=true;
    pan.animate({left: "0px",}, 500, function() {});  
    
    }
      
    }); 
 
};
