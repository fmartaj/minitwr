$(document).ready(function(){
        /*    //ACTION DU BOUTON: AJOUTER UN PEEP
            $("#peep").on('click', function(event) {
                var textToAdd = $("textarea").val(); //contains our peep
                var d = new Date();
                var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
                var mediaToAdd = "<div class='panel-body'><div class='media'><a href='#' class='pull-left'><img src='/images/icon.png', height='64px', width='64px', class='media-object img-circle'  alt='User Picture'></a><div class='media-body'><h4 class='media-heading'>John Doe <small><i>@doe</i></small></h4><p>"+textToAdd+"</p><small class='pull-right'><i>"+months[d.getMonth()]+" "+d.getDate()+", "+d.getFullYear()+"</i></small></div></div></div>";
                
                $(".panel-heading").after(mediaToAdd);
                $(".panel-body").hover(function(){ //add hover effect
                    $(this).addClass('highlighted');
                },function(){
                    $(this).removeClass('highlighted');
                });
                //we add 1 to the tweet count
                var tweets = document.getElementById("peepnb").innerHTML ;
                document.getElementById("peepnb").innerHTML = parseInt(tweets) + 1 ;
                //now we reset things:
                $("#charsleft").removeClass("text-danger");
                $("textarea").val('');
                document.getElementById("charsleft").innerHTML = '140 characters left';
                document.getElementById("peep").disabled = true;
                return false;
        });  */
            
            //EFFET CHIC SI LA SOURIS PASSE SUR LES PEEPS :) 
           $(".panel-body").hover(function(){
                    $(this).addClass('highlighted');
                },function(){
                    $(this).removeClass('highlighted');
                });
                
            
            $("th").hover(function(){
                    $(this).addClass('thighlight');
                },function(){
                    $(this).removeClass('thighlight');
                });
                
           });
          
           
        //COMPTEUR DE CARACTÈRES
            function charCount() {
                var phrase = document.getElementById("comment").value;
                document.getElementById("charsleft").innerHTML = (140-phrase.length)+' characters left';
                document.getElementById("peep").disabled = false;
                
                if (phrase.length == 0) {
                    document.getElementById("peep").disabled = true;
                };
                
                if (phrase.length >= 120) {
                    $("#charsleft").addClass("text-danger");
                } else {
                    $("#charsleft").removeClass("text-danger");
                };
            };