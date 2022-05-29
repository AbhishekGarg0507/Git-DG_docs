var car_div_options =document.getElementById("Options_cate_page1");
car_div_options.style.display="none";
function show_cat_op(ele) {
    var srcElement = document.getElementById(ele);
    if (srcElement != null) {
        if (srcElement.style.display == "none") {
             srcElement.style.display = 'grid';
        }
        else {
            srcElement.style.display = 'none';     
        }
        return false;
    }
}
function cal_fun(){
           document.getElementById("Search_id").value="";
             $('.close_btn_hide').hide();

        }

   
if ($("body").data("title") === "index_body") {
    
     
     
     
    
      var myIn_dex1 = 0;
            var myIn_dex = 0;
            var Slid_Con_index=1;
            
            if(screen.width<769){
                Show_L_CarS(Slid_Con_index);
                carousel_LcarS();
                
            }
            else{
                Show_L_CarB(Slid_Con_index);
                carousel_LcarB();
            }
            function Slid_con_fuc(n){
                 if(screen.width<769){
                    Show_L_CarS(Slid_Con_index+=n);
                }
                else{
                    Show_L_CarB(Slid_Con_index+=n);
                }
                
            }
            function Show_L_CarB(n){
                  var i;
                  var box4 = document.getElementsByClassName("about_cars_info1");
                  if (n > box4.length) {Slid_Con_index = 1}
                  if (n < 1) {Slid_Con_index = box4.length}
                  for (i = 0; i < box4.length; i++) {
                     box4[i].style.display = "none";  
                  }
                  box4[Slid_Con_index-1].style.display = "grid";
                
            } 
            function Show_L_CarS(n){
                    var couter=n/4;
                    var bDiv_index1;
                    var j;
                    var y = document.getElementsByClassName("about_cars_info1");
                    if (couter === parseInt(couter, 10)){
                         bDiv_index1=(Math.trunc(couter));
                    }

                    else{
                        bDiv_index1= (Math.trunc(couter))+1;
                        
                    }
                if(bDiv_index1>y.length){bDiv_index1 = 1}
                if(bDiv_index1 < 1){bDiv_index1 = y.length}
                   for(j=0;j<y.length;j++){
                        y[j].style.display = "none";


                    }
                    y[bDiv_index1-1].style.display = "grid";
                
                  var i;
                  var x = document.getElementsByClassName("gap_L_carShow");
                  if (n > x.length) {Slid_Con_index = 1}
                  if (n < 1) {Slid_Con_index = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[Slid_Con_index-1].style.display = "grid";  
                
                
            }
            
            // this is the auto play for car lesee //  
            function carousel_LcarB() {
                    
                  var i;
                  var box4 = document.getElementsByClassName("about_cars_info1");
                  for (i = 0; i < box4.length; i++) {
                    box4[i].style.display = "none";  
                  }
                  myIn_dex1++;
                    
                  if (myIn_dex1 > box4.length) {myIn_dex1 = 1}    
                  box4[myIn_dex1-1].style.display = "grid";  
                  setTimeout(carousel_LcarB, 2000); 
            }
            function carousel_LcarS(){
                    
               
                
            }
            
            
            ///ver dangers
          
             var slideIndex = 1;
            
            if(screen.width<769){
                showDivs(slideIndex);
            }
            else{
                showDivs_pc(slideIndex);
            }
             

            function plusDivs(n) {
                if(screen.width<769){
                    showDivs(slideIndex += n);
                    
                }
                else{
                    showDivs_pc(slideIndex += n);
                    
                }
                
            }


            function showDivs(n) {
               
                    var couter=n/5;
                    var bDiv_index;
                    var j;
                    var y = document.getElementsByClassName("boxes_carType");
                    if (couter === parseInt(couter, 10)){
                         bDiv_index=(Math.trunc(couter));
                    }

                    else{
                        bDiv_index= (Math.trunc(couter))+1;
                        
                    }
                if(bDiv_index>y.length){bDiv_index = 1}
                if(bDiv_index < 1){bDiv_index = y.length}
                   for(j=0;j<y.length;j++){
                        y[j].style.display = "none";


                    }
                    y[bDiv_index-1].style.display = "grid";
                
                  var i;
                  var x = document.getElementsByClassName("gap1");
                  if (n > x.length) {slideIndex = 1}
                  if (n < 1) {slideIndex = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slideIndex-1].style.display = "grid";  
                
        
            }
            function showDivs_pc(n) {
                  var i;
                  var x = document.getElementsByClassName("boxes_carType");
                  if (n > x.length) {slideIndex = 1}
                  if (n < 1) {slideIndex = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slideIndex-1].style.display = "grid";  
                
        
            }
            if(screen.width < 769){
                var slideIndex_ee = 1;
                showDivs_ee(slideIndex_ee);

                function plusDivs_ee(n) {
                  showDivs_ee(slideIndex_ee += n);
                }

                function showDivs_ee(n) {
                  var i;
                  var x = document.getElementsByClassName("border_gap");
                  if (n > x.length) {slideIndex_ee = 1}
                  if (n < 1) {slideIndex_ee = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slideIndex_ee-1].style.display = "block";  
                }
                
                //gap_car_info
                var slideinfo = 1;
                showDivs_carinfo(slideinfo);

                function gap_Car_info(n) {
                  showDivs_carinfo(slideinfo += n);
                }

                function showDivs_carinfo(n) {
                  var i;
                  var x = document.getElementsByClassName("gap_Car_info");
                  if (n > x.length) {slideinfo = 1}
                  if (n < 1) {slideinfo = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slideinfo-1].style.display = "grid";  
                }
                
                //gap_Car_info1
                var slideinfo1 = 1;
                showDivs_carinfo1(slideinfo1);

                function gap_Car_info1(n) {
                  showDivs_carinfo1(slideinfo1 += n);
                }

                function showDivs_carinfo1(n) {
                  var i;
                  var x = document.getElementsByClassName("gap_Car_info1");
                  if (n > x.length) {slideinfo1 = 1}
                  if (n < 1) {slideinfo1 = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slideinfo1-1].style.display = "grid";  
                }
                
                
                //gap_brands
                var slidebrands = 1;
                showDivs_brands(slidebrands);

                function gap_brands(n) {
                  showDivs_brands(slidebrands += n);
                }

                function showDivs_brands(n) {
                  var i;
                  var x = document.getElementsByClassName("gap_brands");
                  if (n > x.length) {slidebrands = 1}
                  if (n < 1) {slidebrands = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slidebrands-1].style.display = "grid";  
                }
                //gap_brands1
                var slidebrands1 = 1;
                showDivs_brands1(slidebrands1);

                function gap_brands1(n) {
                  showDivs_brands1(slidebrands1 += n);
                }

                function showDivs_brands1(n) {
                  var i;
                  var x = document.getElementsByClassName("gap_brands1");
                  if (n > x.length) {slidebrands1 = 1}
                  if (n < 1) {slidebrands1 = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slidebrands1-1].style.display = "grid";  
                }
                //gap_brands Auto
                var myIndexbrand = 0;
                var myIndexbrand1 = 0;
                carouselbrand();
                carouselbrand1();
                
                function carouselbrand() {
                  var i;
                  var x = document.getElementsByClassName("gap_brands");
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                  }
                  myIndexbrand++;
                  if (myIndexbrand > x.length) {myIndexbrand = 1}    
                  x[myIndexbrand-1].style.display = "block";  
                  setTimeout(carouselbrand, 2000); 
                }
                function carouselbrand1() {
                  var i;
                  var x = document.getElementsByClassName("gap_brands1");
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                  }
                  myIndexbrand1++;
                  if (myIndexbrand1 > x.length) {myIndexbrand1 = 1}    
                  x[myIndexbrand1-1].style.display = "block";  
                  setTimeout(carouselbrand1, 2000); 
                }
                
                //
                
                var myIndex = 0;
                var myIndex1 = 0;
                carousel();
                carousel1();
                
                function carousel() {
                  var i;
                  var x = document.getElementsByClassName("gap_Car_info1");
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                  }
                  myIndex++;
                  if (myIndex > x.length) {myIndex = 1}    
                  x[myIndex-1].style.display = "block";  
                  setTimeout(carousel, 2000); 
                }
                function carousel1() {
                  var i;
                  var x = document.getElementsByClassName("gap_Car_info");
                  for (i = 0; i < x.length; i++) {
                    x[i].style.display = "none";  
                  }
                  myIndex1++;
                  if (myIndex1 > x.length) {myIndex1 = 1}    
                  x[myIndex1-1].style.display = "block";  
                  setTimeout(carousel1, 2000); 
                }
                
                
                
            }
            var slideTest = 1;
                showDivs_Test(slideTest);

                function Testimonials(n) {
                  showDivs_Test(slideTest += n);
                }

                function showDivs_Test(n) {
                  var i;
                  var x = document.getElementsByClassName("Testimonials_info");
                  if (n > x.length) {slideTest = 1}
                  if (n < 1) {slideTest = x.length}
                  for (i = 0; i < x.length; i++) {
                     x[i].style.display = "none";  
                  }
                  x[slideTest-1].style.display = "grid";  
                }
            
            // compunent_SHOW OPTION_IN MOBIL:
        
        


  
    
   
       
    
}


if ($("body").data("title") === "Search_Result"){



var car_div =document.getElementById("divMsg");
                var icon = document.getElementById("thisID");
                var icon2 = document.getElementById("plus_icon");
                car_div.style.display="none";
                icon.style.display="none";
                function showHideDiv(ele) {
                var srcElement = document.getElementById(ele);

                if (srcElement != null) {
                    if (srcElement.style.display == "none") {
                        srcElement.style.display = 'grid';
                        icon.style.display = 'block';
                        icon2.style.display= 'none';
                    }
                    else {
                        srcElement.style.display = 'none';
                        icon.style.display = 'none';
                        icon2.style.display= 'block';
                    }
                    return false;
                }

             }

            var car_div1 =document.getElementById("Transmission_checkbox");
            var xicon = document.getElementById("thisID1");
            var p_icon = document.getElementById("plus_icon1");
            car_div1.style.display="none";
            xicon.style.display="none";
            function showHideDiv1(ele) {
         	var srcElement = document.getElementById(ele);
            
         	if (srcElement != null) {
         		if (srcElement.style.display == "none") {
         			srcElement.style.display = 'grid';
                    xicon.style.display = 'block';
                    p_icon.style.display= 'none';
         		}
         		else {
         			srcElement.style.display = 'none';
                    xicon.style.display = 'none';
                    p_icon.style.display= 'block';
         		}
         		return false;
         	}
             
         }
             var car_div2 =document.getElementById("Life_Style_filter");
            var xicon1 = document.getElementById("thisID2");
            var p_icon1 = document.getElementById("plus_icon2");
            car_div2.style.display="none";
            xicon1.style.display="none";
            function showHideDiv2(ele) {
         	var srcElement = document.getElementById(ele);
            
         	if (srcElement != null) {
         		if (srcElement.style.display == "none") {
         			srcElement.style.display = 'grid';
                    xicon1.style.display = 'block';
                    p_icon1.style.display= 'none';
         		}
         		else {
         			srcElement.style.display = 'none';
                    xicon1.style.display = 'none';
                    p_icon1.style.display= 'block';
         		}
         		return false;
         	}
             
         }

        

//for filter
        var filter_div =document.getElementById("search_option");
          if(screen.width < 769){
                filter_div.style.display="none";
          }
            function chack_screen(ele){
                if(screen.width < 769){
                    Show_div_filter(ele);
                }
                
                
            }
         
            function Show_div_filter(ele) {
         	var srcElement = document.getElementById(ele);
            
         	if (srcElement != null) {
         		if (srcElement.style.display == "none") {
         			srcElement.style.display = 'grid';
                   
         		}
         		else {
         			srcElement.style.display = 'none';
                  
         		}
                
         		return false;
         	}
             
         }
    
    
    $('#contorl_txt').keyup(function() {
  
          // If value is not empty
        if ($(this).val().length == 0) {
            // Hide the element
            $('.cross_btn_hide').hide();
            
        } else {
            // Otherwise show it
            $('.cross_btn_hide').show();
        }
        }).keyup();
    
    function cal_funSer(){
           document.getElementById("contorl_txt").value="";
             $('.cross_btn_hide').hide();

        }
}
if ($("body").data("title")=== "about_us_page" || "index_body" || "Search_Result" || "Car_Details" || "Admin_dashbord" || "Car_Forlease"){
    $('#Search_id').keyup(function() {
  
          // If value is not empty
        if ($(this).val().length == 0) {
            // Hide the element
            $('.close_btn_hide').hide();
            
        } else {
            // Otherwise show it
            $('.close_btn_hide').show();
        }
        }).keyup();
    
        
}

if ($("body").data("title") === "Car_Details"){
    var CAR_SS_Index = 1;
            show_car_SS(CAR_SS_Index);
            function CAR_DIVE_detals(n){

                show_car_SS(CAR_SS_Index += n);
            }
            function show_car_SS(n){
                var j;
                var z= document.getElementsByClassName("CarSs_div");
                if(n > z.length){CAR_SS_Index=1}
                if(n< 1){CAR_SS_Index = z.length}
                for(j = 0; j < z.length; j++){
                     z[j].style.display = "none";  
                }
                z[CAR_SS_Index-1].style.display = "grid";

            }
            var car_Curentslid =1;
            car_CurrentSlid_show(car_Curentslid);
            function IMG_get_index(n){
                car_Curentslid=n;
                car_CurrentSlid_show(car_Curentslid);
                
            }
              
            function car_CurrentSlid_show(n){
                var i;
                var x = document.getElementsByClassName("D_car_img");
                for(i=0 ; i< x.length ;i++){
                    x[i].style.display = "none"; 
                }
                x[car_Curentslid-1].style.display = "grid";
                
                
            }
    
}
if ($("body").data("title") === "Admin_dashbord"){
    if(screen.width < 769){
        var slideIndex = 1;
        showDivs(slideIndex);

        function plusDivs(n) {
          showDivs(slideIndex += n);
        }

        function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("Overview_main_info");
          if (n > x.length) {slideIndex = 1}
          if (n < 1) {slideIndex = x.length}
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          x[slideIndex-1].style.display = "grid";  
        }
        
        
        var car_div =document.getElementById("divMsg");
                var icon = document.getElementById("button_Up");button_Down
                var icon2 = document.getElementById("button_Down");
                car_div.style.display="none";
                icon.style.display="none";
                function showHideDiv(ele) {
                var srcElement = document.getElementById(ele);

                if (srcElement != null) {
                    if (srcElement.style.display == "none") {
                        srcElement.style.display = 'grid';
                        icon.style.display = 'block';
                        icon2.style.display= 'none';
                    }
                    else {
                        srcElement.style.display = 'none';
                        icon.style.display = 'none';
                        icon2.style.display= 'block';
                    }
                    return false;
                }

             }
    }
}
if ($("body").data("title") === "Car_forsele" || "Car_Forlease" || "Filter_Options" || "ADD_Car" || "ADD_Car_lease"){
    if(screen.width< 769){
                var car_div =document.getElementById("divMsg");
                var icon = document.getElementById("button_Up");
                var icon2 = document.getElementById("button_Down");
                car_div.style.display="none";
                icon.style.display="none";
                function showHideDiv(ele) {
                var srcElement = document.getElementById(ele);

                if (srcElement != null) {
                    if (srcElement.style.display == "none") {
                        srcElement.style.display = 'grid';
                        icon.style.display = 'block';
                        icon2.style.display= 'none';
                    }
                    else {
                        srcElement.style.display = 'none';
                        icon.style.display = 'none';
                        icon2.style.display= 'block';
                    }
                    return false;
                     
                }

             }
        
    }
    
    
}
if ($("body").data("title") === "ADD_Car_lease"){
    
         document.getElementById('keywords').addEventListener('change', function () {
            var style = this.value == 1 ? 'grid' : 'none';
            document.getElementById('only_forLease').style.display = style;
        });
    
}
if ($("body").data("title") === "ADD_Car_lease" || "Filter_Options"){
        
       function readURL(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#palce_img2').css('background-image', 'url(' + getImagePath + ')');
            }
         function img11(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img11').css('background-image', 'url(' + getImagePath + ')');
            }
    function img12(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img12').css('background-image', 'url(' + getImagePath + ')');
            }
        function img10(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img10').css('background-image', 'url(' + getImagePath + ')');
            }
         function img9(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img9').css('background-image', 'url(' + getImagePath + ')');
            }
        function img8(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img8').css('background-image', 'url(' + getImagePath + ')');
            }
        function img7(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img7').css('background-image', 'url(' + getImagePath + ')');
            }
        function img6(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img6').css('background-image', 'url(' + getImagePath + ')');
            }
        function img5(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img5').css('background-image', 'url(' + getImagePath + ')');
            }
        function img4(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img4').css('background-image', 'url(' + getImagePath + ')');
            }
        function img3(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img3').css('background-image', 'url(' + getImagePath + ')');
            }
        function img2(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img2').css('background-image', 'url(' + getImagePath + ')');
            }
        function img1(event){
             var getImagePath = URL.createObjectURL(event.target.files[0]);
             $('#img1').css('background-image', 'url(' + getImagePath + ')');
            }
    }

if ($("body").data("title") === "admin_profile" ){
    function img5(event){
         var getImagePath = URL.createObjectURL(event.target.files[0]);
         $('#Admin_IMG_UPLOAD').css('background-image', 'url(' + getImagePath + ')');
        }
    
}


        
        
          
        
        