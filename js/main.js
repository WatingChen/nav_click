require.config({
    baseUrl:"module",
    paths:{
        jq:"../libs/jquery",
        nav:"nav",
        click:"click",
        btn:"btn"
    }
})

require(["jq","nav","click","btn"],function(_,onav,oclick,obtn){
    
    var mynav1 = new onav.nav({
        list:$(".box"),
        listArr:["第一级菜单1","第一级菜单2","第一级菜单3",],
        display:"block"
    });

    var mynav2 = new onav.nav({
        list:$(".box_li"),
        listArr:["第2级菜单1","第2级菜单2","第2级菜单3",],
        display:"none"
        // display:"block"
    });


    var myclick1 = new oclick.click({
        list:$(".box")
    });
    
    var myclick2 = new oclick.click({
        list:$(".box_li")
    });

    var btn1 = new obtn.btn({
        list:$(".box_li")
    })

    // var mynav2 = new on.nav({
    //     li:$(".box").find(".secend_li")
    // });
})

