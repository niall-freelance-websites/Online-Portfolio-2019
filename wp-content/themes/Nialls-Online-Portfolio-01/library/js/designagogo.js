// stop console breaking other browsers
// remove all console references for production
if (typeof console === "undefined" || typeof console.log === "undefined") {  
    console = {};
    console.log = function(msg) {
        //alert(msg);
    };
}

// remap jQuery to $
(function($){})(window.jQuery);



/* 
=============================================================================
SET GLOBAL VARIABLES
============================================================================= 
*/

var firstload;
var viewport = updateViewportDimensions();
var overlay = $('div.signup-overlay'); 
var topicName = "All"; 

/* how long to wait before deciding the resize has stopped, in ms. 
Around 50-100 should work ok. */
var timeToWaitForLast = 100;

/* sections */
var currentSection;
var nextSection;

/* scrolling */
var canScroll;
var scrolled;   
var scrollPercent;


/*  
=============================================================================
CACHE $ ELEMENTS
============================================================================= 
*/
function cacheElements() {
  html = $("html");
  body = $("body");
  sayHello = $("#footer .overlay-trigger");
  scrollDownIcon = $("#scrolldown-icon");
  filters = $(".filters");
  filtersTitle = $(".filters-title");
  project = $(".project");
  logos = $(".logo");
  slide = $('.slide');
  toggleMobileMenu = $(".toggle-menu");
  linkInMobileMenu = $(".mobile .main-menu a");
}


/* 
=============================================================================
GET VIEWPORT DIMENSIONS 
BASED ON https://github.com/eddiemachado/bones/blob/master/library/js/scripts.js
returns object with viewport dimensions to match css in width and height properties
============================================================================= 
*/

function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y };
}

/* 
=============================================================================
DETERMINE WHETHER DESKTOP OR MOBILE VERSION TO BE USED
============================================================================= 
*/

function determineVersion(){
  //console.log("determineVersion");
  //console.log(viewport.width, viewport.height);
  if( viewport.width >= 1024 && viewport.height >= 600 ){
    displayDesktopVersion();
  } 
  else {
    displayMobileVersion(); 
  }  
}

/*  
=============================================================================
TURN OFF ANIMATION WHEN OVERLAYS ARE OPEN
============================================================================= 
*/

function toggleAllAnimation(){
  if(body.hasClass("page-id-5") == true){
    if (body.hasClass("contact-open") == true){
      swiper.stopAutoplay();
    }
    else{
      swiper.startAutoplay(); 
    }
  }  
}


/* 
=============================================================================
DESKTOP VERSION 
============================================================================= 
*/

function displayDesktopVersion() {
  console.log("displayDesktopVersion"); 
  html.removeClass("mobile");  
  html.addClass("desktop");
  //hide menu if open
  $(".nav-container").removeClass("open");
  body.removeClass("menu-open"); 
  $(".toggle-menu").removeClass("open");
  fadeInElements();
  $(".scrollDown a").html("Key or scroll down");
} 


/* 
=============================================================================
MOBILE VERSION 
============================================================================= 
*/

function displayMobileVersion() {
  console.log("displayMobileVersion");    
  html.removeClass("desktop"); 
  html.addClass("mobile");
  //$(".toggle-menu").removeClass("open");
  $(".scrollDown a").html("");
  if($("#all").hasClass("active")==true){
    filtersTitle.text("All Projects");
  }
  filters.removeClass("open");
  fadeInElements();
}

/* 
=============================================================================
FADE IN CONTENT ONCE ADJUSTMENTS HAVE BEEN MADE
============================================================================= 
*/

function fadeInElements(){
  //console.log("fadeInElements");
  //stops ugly jumping in mobile browsers on 100vh elements when scroll
  winInitHeight = viewport.height;
  if(firstload == true){
    //console.log(viewport.width, viewport.height);
    if(html.hasClass("touch")){
      body.css("min-height",winInitHeight);
      $("#wrapper").css("min-height",winInitHeight);
      $(".main").css("min-height",winInitHeight);
      $(".hero").css("height",winInitHeight);
    }
  };  
  body.removeClass('loading').addClass('loaded');
} 

/* 
=============================================================================
THROTTLE RESIZE TRIGGERED EVENTS
source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed
============================================================================= 
*/

var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();


$(window).resize(function () {
  waitForFinalEvent( function() {
    //update the viewport, in case the window size has changed
    viewport = updateViewportDimensions();
    //other functions to fire when window resizes go here
    firstload = false;
    determineVersion();
  }, 
  timeToWaitForLast,"your-function-identifier-string");
});


$(window).scroll(function () {
   waitForFinalEvent( function() {
   //console.log($(window).scrollTop());
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       //console.log("at bottom!");
       sayHello.addClass("highlight")
   }
   else{
       sayHello.removeClass("highlight")
   }
   if($(window).scrollTop() <= 10 ) {
     //console.log("not near top");
     scrollDownIcon.removeClass("fadeOut");     
   } 
   else{
     scrollDownIcon.addClass("fadeOut");
   }  
  }, 
  timeToWaitForLast,"your-function-identifier-string");
});


  /* 
  =============================================================================
  ROTATE AGENCY LOGOS ON HOMEPAGE
  ============================================================================= 
  */

  var positions = new Array ('pos1','pos2','pos4','pos3');
  numContainers = 4;
  var index = 5;
  var i = 0;
  var posIndex = 0;

  $(".logo:nth-child(1)").addClass("pos1");
  $(".logo:nth-child(2)").addClass("pos2");
  $(".logo:nth-child(3)").addClass("pos3");
  $(".logo:nth-child(4)").addClass("pos4");

  function rotateImage(){  
    //cycle through the 4 logo containers
    activePos = positions[posIndex]; 
    //console.log("activePos",activePos);
    if (posIndex == positions.length-1){
      //once completed a full cycle, shuffle the array so not always in the same order
      positions.sort(function() { return 0.5 - Math.random() });
      posIndex = 0;
    }
    else{
      posIndex++;
    }  
    //cycle through all logos. For the active logo add current position as defined above       
    logo = $(logos[index]); 
    logoID = "#"+logo.attr("id");
    //console.log("logoID",logoID); 
    if (index == logos.length-1){
      index = 0;
    }
    else{
      index++;
    }   
    $("."+activePos).removeClass(activePos); 
    $(logoID).addClass(activePos);  
    lastClass = $(logoID).attr('class').split(' ').pop();
  }


/*  
=============================================================================
SCROLL FUNCTIONS
============================================================================= 
*/    
function scrollComplete() {
  //console.log("scrollComplete()");  
  canScroll = true;     
}
      

function smoothScroll(target) { 
  canScroll = false;  
  $('html,body').stop().animate(
    { 
      scrollTop:$(target).offset().top 
    }, 
    {
      queue: false, // This skips the queue
      duration: 200,
      specialEasing: { top: "easeOut" },        
      complete: scrollComplete // Your callback goes here...
    }
  );
}


//scroll to next section as defined above
function scrollToNext(nextSection,key) {
  //console.log("scrollToNext() activated by " + key + "nextSection="+nextSection);     
  if(nextSection) { 
    smoothScroll($("#" + nextSection));           
    return false;       
  } 
  else {
    return false;
  }    
}

   /* =============================================================================
    SMOOTH SCROLLING TO ANCHOR ON SAME PAGE
  ============================================================================= */  

  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    if(target != ""){
      var $target = $(target);
      }
    if($target){
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 400, 'swing', function () {
            window.location.hash = target;
    });
    }
  });


/*  
=============================================================================
KEYBOARD NAVIGATION - PREVIOUS AND NEXT PROJECTS
============================================================================= 
*/  
function setupKeyboardNavigation(){

  allSections = $('.scroll-section');
  allSectionIDs = [];

  $(".scroll-section").each(function(){
    allSectionIDs.push(this.id);
  });  

  //console.log(allSectionIDs)
  var curr=0, node;

  $(document).keydown(function(e){
    //console.log("keypress");
    switch( e.keyCode ) {
    case 40://down arrow
      node = allSections[++curr];
      if (node) {
        smoothScroll(node);
      }
      else {
        curr = allSections.length-1;
        scrollToBottom();
      }
    break;
    case 34://page down arrow
      node = allSections[++curr];
      if (node) {
        smoothScroll(node);
      }
      else {
      curr = allSections.length-1;
      scrollToBottom();
      }
      break;                  
    case 38:// up arrow
      node = allSections[--curr];
      if (node && curr!=0) {
        smoothScroll(node);
      }
      else {
        curr = 0;
        scrollToTop();            
      }
      break; 
    case 33:// page up arrow
      node = allSections[--curr];
      if (node && curr!=0) {
        smoothScroll(node);
      }
      else {
        curr = 0;
        scrollToTop();            
      }
      break; 
      }
    });
  }

function scrollToTop(target) {
  //console.log("scrollToTop");
  if($('html').hasClass("desktop")){
    $('html,body').stop().animate(
      { 
        scrollTop:0 
      }, 
      {
        queue: false, // This skips the queue
        duration: 100,
        specialEasing: { top: "swing" }
      }
    ); 
    return false; 
  }
  else{
    $('html,body').stop().animate(
      { 
        scrollTop:0 
      }, 
      {
        queue: false, // This skips the queue
        duration: 0,
        specialEasing: { top: "swing" }
      }
    ); 
    return false; 
  } 
}

function scrollToBottom(target) {
  //console.log("scrollToBottom");  
  currentSection = "contact"; 
  //showFooter(); 
  if(html.hasClass("desktop")){
    $('html,body').stop().animate(
      { 
        scrollTop:$(document).height() - $(window).height()
      }, 
      {
        queue: false, // This skips the queue
        duration: 100,
        specialEasing: { top: "swing" }
      }
    ); 
    return false; 
  }
}  


/*  
=============================================================================
SCROLL FUNCTIONS
============================================================================= 
*/    
function scrollComplete() {
  //console.log("scrollComplete()");  
  canScroll = true;     
}
      
function smoothScroll(target) {
  canScroll = false;
  $(html,body).stop().animate(
    { 
      scrollTop:$(target).offset().top 
    }, 
    {
      queue: false, // This skips the queue
      duration: 200,
      specialEasing: { top: "easeOut" },        
      complete: scrollComplete // Your callback goes here...
    }
  );
}

function scrollToNext(nextSection,key) {
  //console.log("scrollToNext");
  //console.log("scrollToNext() activated by " + key + "nextSection="+nextSection);     
  if(nextSection) { 
    smoothScroll($("#" + nextSection));           
    return false;       
  } 
  else {
    return false;
  }
}


/* =============================================================================
  DOCUMENT READY
============================================================================= */  

jQuery(document).ready(function($) {

    canScroll=true;
    loopValue = false;
    firstload = true;
    viewport = updateViewportDimensions();
    cacheElements();
    setupKeyboardNavigation();
    determineVersion();
    transition = "fadeIn";
    currSlide = 1;
    //run function for about page slideshow
    if(body.hasClass("page-id-5")==true){
      aboutSlideshowInt = setInterval(aboutSlideshow,4000);
      aboutSlideshow();  
    } 
    //run function to rotate logos
    if(body.hasClass("home")==true){
      rotateLogos = setInterval (rotateImage, 1000);   
    }  
    Modernizr.addTest('mix-blend-mode', function() {
       return Modernizr.testProp('mixBlendMode'); 
    });        

  /* =============================================================================
    TESTIMONIAL SWIPER ON HOMEPAGE
  ============================================================================= */  

    swiperTestimonials = new Swiper('#swiper-testimonials', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      parallax: true,
      speed: 200,
      nextButton: '.swiper-button-next',
      spaceBetween: 100,
      loop: true,
      grabCursor: true,   
    });

  /* =============================================================================
    ABOUT PAGE LOOPING SLIDESHOW
  ============================================================================= */  

  function aboutSlideshow(){
    //console.log(currSlide);             
    $('.slide:nth-of-type('+currSlide+')').addClass(transition);        
    if(currSlide<9){
      //console.log("not last");
      currSlide = currSlide+1;
    }
    else{
      //console.log("last is reached");
      clearTimeout(aboutSlideshowInt);
      aboutLoopSlideshowInt = setInterval(aboutLoopSlideshow,4000); 
    }    
  }

  function aboutLoopSlideshow(){
    //console.log("aboutLoopSlideshow");
    clearTimeout(aboutLoopSlideshowInt);
    $('.slide:nth-of-type(1)').addClass(transition);      
    $('.slide:nth-of-type('+currSlide+')').removeClass(transition);
    $('.slide:not(:nth-of-type(1))').removeClass("fadeIn");
    $('.slide:nth-of-type('+currSlide+')').addClass("fadeOut"); 
    aboutResetSlideshowInt = setInterval(aboutResetSlideshow,1000);   
    aboutSlideshowInt = setInterval(aboutSlideshow,4000);    
  }  

  function aboutResetSlideshow(){
    //console.log("resetSlideshow");
    clearTimeout(aboutResetSlideshowInt);
    $('.slide').removeClass("fadeOut");    
    currSlide=1;
    aboutSlideshow();  
  }


  /* =============================================================================
    OPEN OR CLOSE POST-NAV MENU ON MOBILE IF CLICKED
  ============================================================================= */    

  $(".overlay-trigger").on('click', function(e){
    e.preventDefault();
    //console.log("contact opened");
    /*$(this).parent().find(".nav-container").toggleClass("open");*/
    $(this).toggleClass("open");
    $("#footer .contact-info").toggleClass("open");
    body.toggleClass("contact-open");
    $(".no-touch .contact-info.open .wpcf7-form input:text:visible:first").focus();
    toggleAllAnimation();
  });

  /*  
  =============================================================================
  OVERLAY-CLOSE
  ============================================================================= 
  */

  $("#overlay-close").on('click', function(e) {
      //console.log("overlay close");
      $(".no-touch .contact-info.open .wpcf7-form input:text:visible:first").blur();
      $(".contact-info").removeClass("open");
      body.removeClass("contact-open");
      toggleAllAnimation();    
  });  

  /* =============================================================================
    OPEN OR CLOSE MOBILE MAIN MENU IF CLICKED
  ============================================================================= */    

  toggleMobileMenu.on('click', function(e){
    e.preventDefault();
    $(this).parent().find(".nav-container").toggleClass("open");
    $(this).toggleClass("open");
    body.toggleClass("menu-open");
    toggleAllAnimation();
  });

  linkInMobileMenu.on('click', function(e){
    $(this).parent().find(".nav-container").removeClass("open");
    $(this).removeClass("open");
    body.removeClass("menu-open");
    toggleMobileMenu.removeClass("open");
    toggleAllAnimation();
  });  


  /* =============================================================================
    WORK ARCHIVE PAGE - FILTERS
  ============================================================================= */    
  
 
  if(body.hasClass("page-template-archive-projects") == true){
    showAllProjects();
  }

  /* If click on title, toggle dropdown menu */
  $(filtersTitle).on('click', function(e){
    $(this).parent().toggleClass("open");
    filters.toggleClass("open");
  }); 

  /* If click on item in dropdown, show and hide projects */
  $(".filters a").on('click', function(e){
    e.preventDefault();
    slug = $(this).parent().attr("id");
    //console.log(slug);
    topicName = $(this).text();
    filtersTitle.text(topicName);
    $(".filters li").removeClass("active");
    project.removeClass("active");
    project.removeClass("last-in-row");
    filtersTitle.removeClass("open"); 
    filtersTitle.addClass("filtered"); 
    $(".filters-menu").removeClass("open"); 
    if(slug=="all"){
      filters.removeClass("open"); 
      filtersTitle.removeClass("filtered"); 
      showAllProjects();
    }
    else{
      project.stop().fadeOut(0);
      $(".project."+slug).addClass("active"); 
      $(".project.active").filter(function( index ) {
        return index % 3 === 2;
      }).addClass("last-in-row");
      $(".active").stop().fadeIn(500);
      $(this).parent().addClass("active");
    }   
  }); 

  function showAllProjects(){
    filtersTitle.removeClass("filtered");
    project.addClass("active");
    project.fadeIn();    
    project.filter(function( index ) {
      return index % 3 === 2;
    }).addClass("last-in-row");
  }  

  /* =============================================================================
    JOURNAL POSTS CATEGORY MENU
  ============================================================================= */    

  /* If click on title, toggle dropdown menu */
  $(".cats-title").on('click', function(e){
    $(this).parent().toggleClass("open");
  }); 

  $(".projects-landing .post-nav li a").on('click', function(e) {
      //console.log("post-nav clicked");
      $(".post-nav").addClass("filtered");
      topic = $(this).parent().attr("class");
      topicName = $(this).text();
      li = "#" + topic;
      listItem = document.getElementById(topic);
      layoutStyle = "even";
      showProjects();
      return false;        
  });  
      
});


/* =============================================================================
  END OF DOCUMENT READY
============================================================================= */  