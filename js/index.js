
class Menu{
    constructor(){
        this.ul = document.querySelector(".box ul");
        this.li = this.ul.children;
        // console.log(this.li);
        this.divs = document.querySelectorAll("li .box1");
        // this.btns = document.querySelectorAll("li .btn");
        
        this.addEvent();
    }
    addEvent(){
        var that = this;
        this.ul.onclick = function(eve){
            var e = eve || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName === "H3"){
                that.openMenu(target);
            }
            that.stopBubble();
        }
        // document.onclick = function(){
        //     for(var i=0;i<that.divs.length;i++){
        //         that.divs[i].style.display = "none";
        //     }
        // }
        $(".box").find(".btn").click(function(){
            that.Index = $(this).parents(".secend_li").index();
            that.parentIndex = $(this).parents(".first_li").index();
            // console.log(that.Index);
            // console.log(that.parentIndex);
            $(".mask").css({
                display:"block"
            }).children(".index").html(`${that.parentIndex}-${that.Index}`);
        })
        $(".mask").click(function(eve){
            // console.log(eve.target);
            // console.log(eve.target.className);
            if(eve.target.className != "index"){
                $(".mask").css({
                    display:"none"
                })
            }
            
        })
    }
    openMenu(target){
        if(this.getStyle(target.nextElementSibling,"display") == "none"){
            for(var i=0;i<this.divs.length;i++){
                this.divs[i].style.display = "none";
            }
            target.nextElementSibling.style.display = "block";
        }else{
            target.nextElementSibling.style.display = "none";
        }
    }
    stopBubble(eve){
        var e = eve || window.event;
        if(e.propagation){
            e.propagation();
        }else{
            e.cancelBubble = true;
        }
    }
    getStyle(ele,attr){
        if(getComputedStyle){
            return getComputedStyle(ele,false)[attr];
        }else{
            return ele.currentStyle[attr];
        }
    }
}

new Menu();

// ;(function($){
//     "ues strict";
//     $.fn.Menu = function(options){
//         var that = this;
//         options = options || {};
//         this._obj = {
//             list:options.list || [],
//             length:options.list.length,
//             onoff:options.onoff === false ? false : true,
//             // onoff:options.onoff,
//             // list:options.list === false ? false : true,
//             // autoPlay:options.autoPlay === false ? false : true,
//             // moveTime:options.moveTime || 300,
//             // delayTime:options.delayTime || 2000,
//             // index:options.index || 0,
//             // iPrev:options.img.length-1,
//             // listIndex:0,
//             // // listPrev:0
//         }
//         this._obj.init = function(){
//             let str = "";
//             // console.log(this.length);
//             for(var i=0;i<this.length;i++){
//                 str += ` <li class="first_list">
//                             <h3>${this.list[i]}</h3>
//                             <div class="box1"></div>
//                         </li>`;
//             }
//             that.append(`<ul class="list_box">${str}</ul>`).css({
//                 width:"90%",
//                 margin:"1rem auto"
//             }).children(".list_box").css ({
//                 background:"#aaa",
//                 padding:".2rem"
//             }).children("li").css({
//                 border:".01rem solid #000",
//                 margin:".2rem 0",
//                 background:"#eee",
//                 font:".24rem/2 ''",
//             }).children("h3").css({
//                 background:"#eee"
//             }).end().children(".box1").css({
//                 display:"none"
//             })
//         }
//         this._obj.init();

//         this._obj.click = function(){
//             console.log(this.onoff);
//             if(this.onoff){
//                 that.children(".list_box").css({
//                     display:"block"
//                 })
//             }else{
//                 that.children(".list_box").css({
//                     display:"none"
//                 })
//             }
//         } 
//         this._obj.click();
//     }
// })($);