
function Todo () { 
    this.completeTask = function() { 
        $(this).toggleClass("done")
    };

    this.addAllEvents = function() { 
        $("li").click(this.completeTask);
        $(".delete").click(this.deleteTask);
    }; 

    this.deleteTask = function (event) {
        event.stopPropagation(); 
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });  
    }

    //connect all js events. 
    this.addAllEvents()
};

//create Todo page object.
var todo = new Todo();
;