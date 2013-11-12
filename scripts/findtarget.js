/**
 * @author Ali Bahaloo
 */
var findtarget;
window.onload = function () {
    //Zooming out a bit to have a better view
    document.body.style.zoom=0.75;this.blur();
    var diff_lvl = 0;
    while ((diff_lvl < 1) || (diff_lvl > 500)){
        var choice = prompt("Enter difficulity level: (1-500)","150");
        diff_lvl = parseInt(choice);    
    }
    
    var hint_flash = document.getElementById("btn_luck_flash");
	var hint_show = document.getElementById("btn_luck_show");
	var hint_chk = document.getElementById("hint");
	var btn_reset = document.getElementById("btn_luck_reset");
    
    //Checking if the user didn't cancel
    if (choice) {
    	findtarget = new FindTarget(diff_lvl);
    	findtarget.init();
    
	    alert("The target will flash for a moment, find it!");
	    	     
	    hint_show.addEventListener('click', function() {
	                findtarget.show_target();
	            }, true);
	        
	    hint_flash.addEventListener('click', function() {
	                findtarget.flash_target();
	            }, true);
	    
	    hint_chk.addEventListener('click', function() {
	                findtarget.show_hint(this);
	            }, true);
	            
	    btn_reset.addEventListener('click', function() {
	                findtarget.reset_luck();
	            }, true);	
    } else {
    	btn_reset.addEventListener('click', function() {
	                location.reload();
	            }, true);
	    alert("Operation Cancelled!");        
    }
    
    
};