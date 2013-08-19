//If using image buttons as controls, Set image buttons' image preload here true
//(use false for no preloading and for when using no image buttons as controls):

var preload_ctrl_images=false;

//And configure the image buttons' images here:

var previmg='images/icons/backward.png';
var stopimg='images/icons/stop.png';
var playimg='images/icons/play.png';
var nextimg='images/icons/forward.png';

var slideShow=[]; // SLIDESHOW

//slides#.no_controls

//configure the below images and descriptions to your own, note optional links, target and window specifications.

slideShow[0] = ["images/slides/1.jpg", "Seagulls", "http://www.2webvideo.com", "_new", "top=250, left=300, width=500, height=300, location, resizable, scrollbars"];
slideShow[1] = ["images/slides/2.jpg", "Clock Tower"];
slideShow[2] = ["images/slides/3.jpg", "Promenade", "http://www.yahoo.com"];
slideShow[3] = ["images/slides/4.jpg", "Lamborgini", "http://www.google.com", "_new"];
slideShow[4] = ["images/slides/5.jpg", "Atlantic"];
slideShow[5] = ["images/slides/6.jpg", "Tuk Tuk", "http://www.bing.com", "_new"];

//optional properties for these images:

slideShow.no_descriptions=1; //use for no descriptions displayed
slideShow.pause=1; //use for pause onmouseover
slideShow.image_controls=0; //use images for controls
slideShow.button_highlight='#ffcccc'; //onmouseover background-color for image buttons (requires image_controls=1)
slideShow.specs='width=300, height=250' //global specifications for this show's new window(s)
slideShow.random=0; //set a random slide sequence on each page load
slideShow.manual_start=0; //start show in manual mode (stopped)
slideShow.delay=2000; //sets miliseconds delay between slides
slideShow.no_added_linebreaks=1; //use for not adding line breaks in formatting of texts and controls
slideShow.no_controls=1; //Option to take away control buttons entirely

//Notes:

//slides#.target will set a target for a slide group, will be overridden by slides#[#][3], if present
//slides#.specs will set new window specifications for a slide group, will be overridden by slides#[#][4], if present
//slides#.fadecolor will set fading images background color, defaults to white
//slides#.no_controls will set a slide show with no controls
//slides#.random will set a random slide sequence on each page load
//slides#.delay=4000 will set miliseconds delay between slides for a given show, may also be set in the call as the last parameter
//slides#.jumpto=1 will display added controls to jump to a particular image by its number
//slides#.no_added_linebreaks=1; use for no added line breaks in formatting of texts and controls

//use below to create a customized onclick event for linked images in a given show:
//slides#.onclick="window.open(this.href,this.target,'top=0, left=0, width='+screen.availWidth+', height='+screen.availHeight);return false;"