define(function(){
    class Nav{
        constructor(options){
            this.list = options.list;
            this.liArr = options.listArr;
            this.display = options.display;
            this.listName = (this.list.selector).slice(1);
            // console.log(this.list);
            // console.log(this.list.selector);
            // console.log((this.list.selector).slice(1));
            // console.log(typeof this.list.selector);


            this.init();
        }
        init(){
            var str = "";
            for(var i=0;i<this.liArr.length;i++){
                str += `<li class="${this.listName}_li">
                            <p class="${this.listName}_p"><span class="text">${this.liArr[i]}</span></p>
                        </li>`;
            }
            $(this.list).append($(`<ul class="${this.listName}_ul"></ul>`).css({
                background:"#aaa",
                padding:".1rem",
                display:this.display
            })).children(`.${this.listName}_ul`).append($(str).css({
                padding:".2rem",
                margin: ".2rem 0",
                background: "#ccc",
            })).append($(`<div class="${this.listName}_open">查看更多↓↓↓</div>`).css({
                background:"#aaa",
                border:".01rem solid #000",
                textAlign:"center",
                padding:".1rem",
            })).find(`.${this.listName}_p`).css({
                font: ".36rem/2 ''"
            });
            this.navDisplay();
        }
        navDisplay(){
            this.ul = $(this.list).children();
            for(var i=0;i<this.ul.length;i++){
                this.ul_li = $(this.ul[i]).children("li");
                if(this.ul_li.length > 2){
                    for(var j = 2;j<this.ul_li.length;j++){
                        this.ul_li[j].style.display = "none";
                    }
                }
            }
        }
    }
    return {
        nav:Nav
    };
})