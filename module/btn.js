define(function(){
    class Btn{
        constructor(options){
            this.list = options.list;
            this.listName = (this.list.selector).slice(1);
            this.liArr = $(this.list).find(`.${this.listName}_li`);
            // console.log(this.listName);
            // console.log(this.liArr);
            // console.log($(this.list));
            // console.log(this.list);

            this.init();
            
        }
        addEvent(){
            var that = this;
            $(this.liArr).children(`.${this.listName}_p`).on("click",".btn",function(){
                // console.log($(this).parents(`.${that.listName}_li`))
                that.index = $(this).parents(`.${that.listName}_li`).index();
                that.parentIndex = $(this).parents(`.${that.listName}`).index();
                console.log(that.parentIndex,that.index);
                // console.log(that.parentIndex);
                $(".mask").css({
                    display:"block"
                }).children(".index").html(`${that.parentIndex}-${that.index}`);
            });
            $(".mask").click(function(eve){
                if(eve.target.className != "index"){
                    $(".mask").css({
                        display:"none"
                    })
                }
            })
        }
        init(){
            var that = this;
            $(this.liArr).children(`.${this.listName}_p`).append($(`<span class="btn">弹窗</span>`).css({
                float:"right",
                background:"#",
                width: "50px",
                height: "30px",
                font: '16px/30px ""',
                background: "#ff9",
                textAlign: "center",
                borderRadius:".05rem"
            }));
            this.addEvent();
        }
    }

    return {
        btn:Btn
    };
})