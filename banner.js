//banner轮播图
{
    let imgs = document.querySelectorAll(".imgbox li");
    let pagers = document.querySelectorAll(".pagerbox li");
    let banner = document.querySelector("#banner");
    let next = document.querySelector(".next");
    let prev = document.querySelector(".prev");
    // console.log(imgs);
    pagers.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    })
    let n = 0;
    let l=imgs.length;
    let t = setInterval(move, 3000);
    function move() {
        n++;
        // n=n%5;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < l; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
}
        banner.onmouseenter = function () {
            clearInterval(t);
        };
        banner.onmouseleave = function () {
            t = setInterval(move, 3000);
        }

        next.onclick = function () {
            move();
        }
        prev.onclick = function () {
            n -= 2;
            move();
        }
 }


//搜索定位
{
    let topbar=document.querySelector(".topnav");
    let leftbar=document.querySelector(".leftbar");
    let fenlei=document.querySelector(".daohang_left");
    let search=document.querySelector(".sousuobox");
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>700){
            topbar.style.display="block";
        }else{
            topbar.style.display="none";
        }
        if (st>700||st<184){
            fenlei.style.display="block";
        }else{
             fenlei.style.display="none";
        }
        if(st>2600){
            leftbar.style.display="block";
        }else{
            leftbar.style.display="none";
        }
    }
}

//topbar
{
    let menu=document.querySelector(".daohang_left_caidan");
    let daohang_left=document.querySelector(".daohang_left");
    let daohang_left_nav=document.querySelector(".daohang_left_nav");
        daohang_left.onmouseenter=function(){
            daohang_left_nav.style.display="block";
        }
        daohang_left.onmouseleave=function(){
            daohang_left_nav.style.display="none";
        }
}

//leftbar侧导航
{
    let tips=document.querySelectorAll(".tips");
    let containers=document.querySelectorAll(".container");
    let flag=true;
        tips.forEach(function (ele,index) {
            flag=false;
            ele.onclick=function(){
            let ot=containers[index].offsetTop-50;
            let now=document.documentElement.scrollTop;
            let speed=(ot-now)/10;
            let time=0;
            let t=setInterval(function(){
                time+=25;
                now+=speed;
                if(time===250){
                    clearInterval(t);
                    flag=true;
                }
                document.documentElement.scrollTop=now;
            },25)
        }
        });
        window.addEventListener("scroll",function(ele,index){
            if(flag){
            let st=document.documentElement.scrollTop;
            for(let i=0;i<containers.length;i++){
                if(st>containers[i].offsetTop-500){
                    for(let i=0;i<tips.length;i++){
                        tips[i].classList.remove("active");
                    }
                    tips[i].classList.add("active");
                }
            }
        }
        })


        let totop=document.querySelector(".leftbar_totop");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
          st-=200;
          if(st<0){
              st=0;
              clearInterval(t);
          }
            document.documentElement.scrollTop=st;
        },25)
    }
    
}
//rightbar
{
    let labels=document.querySelectorAll(".rightbar_label");
    let menus=document.querySelectorAll(".rightbar_label_item");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })

    let totop=document.querySelector(".rightbar_totop");
    totop.onclick=function () {
        // document.documentElement.scrollTop=0;
        let st=document.documentElement.scrollTop;
        let t=setInterval(function () {
          st-=200;
          if(st<0){
              st=0;
              clearInterval(t);
          }
            document.documentElement.scrollTop=st;
        },25)
    }
}

//head_left选项卡
{
    let labels=document.querySelectorAll(".head_left_label");
    let menus=document.querySelectorAll(".head_left_label_item");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })

    
}

//head_right选项卡
{
    let labels=document.querySelectorAll(".head_right_label");
    let menus=document.querySelectorAll(".head_right_label_item");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//banner选项卡
{
    let labels=document.querySelectorAll(".banner_nav_label");
    let menus=document.querySelectorAll(".banner_nav_box");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}

//大聚惠轮播
{
    let container=document.querySelector(".dajuhui_bottom_container");
    let prev=document.querySelector("#dajuhui_bottom_prev");
    let next=document.querySelector("#dajuhui_bottom_next");
    let inner=document.querySelector(".inner");
    container.onmouseenter=function () {
        prev.style.display="block";
        next.style.display="block";
    }
    container.onmouseleave=function () {
        prev.style.display="none";
        next.style.display="none";
    }
    let n=1;
    let flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-989+"px";
        }
    }
    prev.onclick=function () {
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-989+"px";
        }
    }
    inner.addEventListener("transitionend",function () {
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-989px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-2967px";
            n=3
        }
    })
}



//排行榜轮播
{
    let container=document.querySelector(".bankuai1_container");
    let prev=document.querySelector(".bankuai1_prev");
    let next=document.querySelector(".bankuai1_next");
    let inner=document.querySelector(".bankuai1_inner");
    container.onmouseenter=function () {
        prev.style.display="block";
        next.style.display="block";
    }
    container.onmouseleave=function () {
        prev.style.display="none";
        next.style.display="none";
    }
    let n=1;
    let flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-390+"px";
        }
    }
    prev.onclick=function () {
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-390+"px";
        }
    }
    inner.addEventListener("transitionend",function () {
        flag=true;
        if(n===4){
            inner.style.transition="none";
            inner.style.marginLeft="-390px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1170px";
            n=3
        }
    })
}

//视频轮播
{
    let container=document.querySelector(".xiaotu");
    let prev=document.querySelector(".xiaotu_prev");
    let next=document.querySelector(".xiaotu_next");
    let inner=document.querySelector(".xiaotu_inner");
    container.onmouseenter=function () {
        prev.style.display="block";
        next.style.display="block";
    }
    container.onmouseleave=function () {
        prev.style.display="none";
        next.style.display="none";
    }
    let n=1;
    let flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-390+"px";
        }
    }
    prev.onclick=function () {
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-390+"px";
        }
    }
    inner.addEventListener("transitionend",function () {
        flag=true;
        if(n===3){
            inner.style.transition="none";
            inner.style.marginLeft="-390px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-780px";
            n=2
        }
    })
}

//视频选项卡
{
    // let labels=document.querySelectorAll(".xiaotu_item");
    // let menus=document.querySelectorAll(".datubox img");
    // let obj=menus[0];
    // labels.forEach(function(ele,index){
    //     ele.onmouseenter=function(){
    //         obj.style.display="none";
    //         menus[index].style.display="block";
    //         obj=menus[index];
    //     }
    // })
    
    const types=document.querySelectorAll(".xiaotu_item");
    const goods=document.querySelectorAll(".datubox");
    types.forEach(function (ele,index) {
        ele.onmouseenter=function () {
            for(let i=0;i<types.length;i++){
                types[i].classList.remove("active");
                goods[i].classList.remove("active");
            }
            this.classList.add("active");
            goods[index].classList.add("active");
        }
    })
}

//猜你喜欢轮播
{
    let container=document.querySelector(".bankuai5_right");
    let prev=document.querySelector(".bankuai5_right_prev");
    let next=document.querySelector(".bankuai5_right_next");
    let inner=document.querySelector(".bankuai5_right_inner");
    container.onmouseenter=function () {
        prev.style.display="block";
        next.style.display="block";
    }
    container.onmouseleave=function () {
        prev.style.display="none";
        next.style.display="none";
    }
    let n=1;
    let flag=true;
    next.onclick=function () {
        if(flag){
            flag=false;
            n++;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-590+"px";
        }
    }
    prev.onclick=function () {
        if(flag){
            flag=false;
            n--;
            inner.style.transition="all 1s";
            inner.style.marginLeft=n*-590+"px";
        }
    }
    inner.addEventListener("transitionend",function () {
        flag=true;
        if(n===3){
            inner.style.transition="none";
            inner.style.marginLeft="-590px";
            n=1;
        }
        if(n===0){
            inner.style.transition="none";
            inner.style.marginLeft="-1770px";
            n=2
        }
    })
}