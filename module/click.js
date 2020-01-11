define(function(){
    class Click{
        constructor(options){
            this.list = options.list;
            this.listName = (this.list.selector).slice(1);
            this.ul = $(this.list).children(`.${this.listName}_ul`);
            // this.liArr = $(this.ul).children("li");
            this.addEvent();
        }
        addEvent(){
            // console.log(this.ul);
            // console.log(this.list);
            // console.log($(this.list).children().children(".open"));
            var that = this;
            // ==========点击查看更多显示剩余==========
            $(this.ul).on("click",`.${this.listName}_open`,function(){
                // console.log($(this));
                $(this).css({
                    display:"none"
                }).siblings(`li`).css({
                    display:"block"
                });
                // console.log(($(this).siblings(`${that.listName}_li`)));
            })
            // ==========点击查看更多显示剩余==========
            $(this.ul).on("click",`.${this.listName}_p`,function(){
                if($(this).siblings("ul").css("display") == "none"){
                    $(this).siblings("ul").css({
                        display:"block"
                    })
                }else{
                    $(this).siblings("ul").css({
                        display:"none"
                    })
                }
                $(this).parent("li").siblings("li").children("ul").css({
                    display:"none"
                })
            })

        }
    }
    return {
        click:Click
    };
})
