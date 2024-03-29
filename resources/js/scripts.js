$(document).ready(
    function(){

        // sticky nav

        $(".about_section").waypoint(
            function(direction){
                if(direction == "down"){
                    $("nav").addClass("sticky");
                }
                else{
                    $("nav").removeClass("sticky");
                }
            },{
            offset: "100px"
            } 
        )

        // sroll smoothly

        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 1000);
            event.preventDefault();
        });

        // mobile navigation

        $(".mobile-nav-icon").click(
            function(){
                $(".main_nav").slideToggle(200);
                if($(".mobile-nav-icon").hasClass("fa-bars")){
                    $(".mobile-nav-icon").addClass("fa-times");
                    $(".mobile-nav-icon").removeClass("fa-bars");
                }
                else{
                    $(".mobile-nav-icon").removeClass("fa-times");
                    $(".mobile-nav-icon").addClass("fa-bars");
                }
            }
        );
    }
)