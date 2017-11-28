
function Todo () { 
    this.completeTask = function() { 
        $(this).toggleClass("done")
    };

    this.addAllEvents = function() { 
        $("ul").on("click", "li", this.completeTask);
        $("ul").on("click" ,".delete", this.deleteTask);
        $("#newTodo").keypress(this.createTask)
    }; 

    this.deleteTask = function (event) {
        event.stopPropagation(); 
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });  
    }

    this.createTask = function (event) { 
        //only add if user press enter
        if ( event.which === 13) { 
            $("ul").append("<li><span class=\"delete\">X</span> "+$(this).val()+"</li>");
            $(this).val("");
        }
    };
};

//create Todo page object.
var todo = new Todo();

//connect all js events. 
todo.addAllEvents();