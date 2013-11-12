/**
 * @author Ali Bahaloo
 * Library: Find Target
 */

var FindTarget = function(level) {
	//Stroing this as varibale to avoid conflict with the global object
	//This points to global object when using setTimeOut
	var thisObj = this;
	var diff_level = level;
	var random_no;
    var score_won = 0;
    var score_lost = 0;
    
    //Displaying the target
    FindTarget.prototype.show_luck = function() {
        var elem = document.getElementById(random_no);
        elem.className = "luck";
    };
	
	//Removes the target
    FindTarget.prototype.remove_luck = function() {
        var elem = document.getElementById(random_no);
        elem.className = "luck_block";
    };
	
	//Initialize ... Entry point
    FindTarget.prototype.init = function() {
        random_no = Math.floor((Math.random() * level) + 1);

        var init_time = Math.floor((Math.random() * (40 - 20 + 1) + 20));
        var init_rv = init_time + 10;
				
        window.setTimeout(function() {
            thisObj.show_luck();
        }, init_time);
        window.setTimeout(function() {
            thisObj.remove_luck();
        }, init_rv);

        this.populate(diff_level);
    };

    FindTarget.prototype.populate = function(no) {
        for (var i = 1; i < no + 1; i++) {

            var div = document.createElement("div");
            div.setAttribute("id", i);
            div.className = "luck_block";

            div.addEventListener('click', function() {
                thisObj.check_luck(this.id);
            }, true);

            var img = document.createElement("img");
            img.src = "images/guess.png";

            div.appendChild(img);

            var element = document.getElementById("game_luck");
            element.appendChild(div);

            if ((i % 10) === 0) {
                //
            }

        };
    };
    
    FindTarget.prototype.check_luck = function(elem_id) {
        if (elem_id == random_no) {
            this.mark_correct(elem_id);
            score_won++;
            this.reset_game();
            this.init();
        } else {
            this.mark_wrong(elem_id);
            score_lost++;
        }

        this.display_score();
    };    

    FindTarget.prototype.mark_wrong = function(elem_id) {
        var div_elem = document.getElementById(elem_id);
        var img_elem_list = div_elem.getElementsByTagName('img');
        var img_elem = img_elem_list[0];

        img_elem.src = "images/wrong.png";
    };

    FindTarget.prototype.mark_correct = function(elem_id) {
        var div_elem = document.getElementById(elem_id);
        var img_elem_list = div_elem.getElementsByTagName('img');
        var img_elem = img_elem_list[0];

        img_elem.src = "images/luck.png";
    };

    FindTarget.prototype.reset_game = function() {
        document.getElementById("game_luck").innerHTML = "";
    };

    FindTarget.prototype.display_score = function() {
        document.getElementById("score_won").innerHTML = "Correct: " + score_won;
        document.getElementById("score_lost").innerHTML = "Incorrect: " + score_lost;
    };

    FindTarget.prototype.change_img = function(new_src) {
        var elem = document.getElementById(random_no);
        var img_list = elem.getElementsByTagName('img');

        var img = img_list[0];
        var newImage = new Image();
        newImage.src = new_src;

        img.src = newImage.src;
    };


    FindTarget.prototype.show_target = function() {
        this.change_img("images/luck.png");

    };

    FindTarget.prototype.flash_target = function() {
        var elem = document.getElementById(random_no);
        var img_list = elem.getElementsByTagName('img');

        var img = img_list[0];
        var img_src = img.src;

        this.change_img("images/luck.png");

        window.setTimeout(function() {
            thisObj.change_img(img_src);
        }, 50);
    };

    FindTarget.prototype.reset_luck = function() {
        score_won = 0;
        score_lost = 0;
        this.display_score();

        this.reset_game();
        this.init(diff_level);
    };

    FindTarget.prototype.show_hint = function(obj) {
        if (obj.checked) {
            document.getElementById("btn_luck_flash").style.visibility = "visible";
            document.getElementById("btn_luck_show").style.visibility = "visible";
        } else {
            document.getElementById("btn_luck_flash").style.visibility = "hidden";
            document.getElementById("btn_luck_show").style.visibility = "hidden";
        }

    };
};
