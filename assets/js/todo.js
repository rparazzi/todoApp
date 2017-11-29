
function Todo () {
    //methods
    this.completeTask = function() {
        $(this).toggleClass("done")
    };

    this.addAllEvents = function() {
        $("ul").on("click", "li", this.completeTask);
        $("ul").on("click" ,".delete", this.deleteTask);
        $("ul").on("click", ".btnControl", this.timeTrack);
        $("#newTodo").keypress(this.createTask);
        $(".fa-plus-square-o").click(this.createTaskEffect);
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
            //$("ul").append("<li strTime=\"0\"><span class=\"delete\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></span> "+$(this).val()+"<span class=\"btnControl\"> > </span><span class=\"time\">0</span></li>");
            $("ul").append("<li strTime='0'><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span>" + $(this).val() +"<span class='btnControl'><i class='fa fa-clock-o' aria-hidden='true'></i></span><span class='time'>0s</span></li>")
            $(this).val("");
        }
    };

    //Time control
    this.timeTrack = function (event) {

      event.stopPropagation();
      if ( $(this).parent().attr("strTime") === "0" ) {
        $(this).parent().attr("strTime",Date.now());
        $(this).parent().find(".fa-clock-o").toggleClass("pause");
      } else {
        var actualValue = parseInt($(this).parent().find(".time").text());
        var strTime = $(this).parent().attr("strTime");
        var elTime = Math.floor((Date.now() - strTime)/1000);
        var rsp = actualValue + elTime

        $(this).parent().find(".time").text(rsp+"s");
        $(this).parent().attr("strTime",0);
        $(this).parent().find(".fa-clock-o").toggleClass("pause");
        
      }
    };

    this.createTaskEffect = function () { 
        $("#newTodo").fadeToggle();
    };

};

//create Todo page object.
var todo = new Todo();

//connect all js events.
todo.addAllEvents();
