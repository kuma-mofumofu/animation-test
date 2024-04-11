const anime_img = document.querySelectorAll(".anime");

// 初期位置（positionで指定）
anime_img[0].style.top = "0";
anime_img[0].style.left = "0";

anime_img[1].style.top = "10vw";
anime_img[1].style.left = "30px";

anime_img[2].style.top = "400px";
anime_img[2].style.left = "50vh";

anime_img[3].style.top = "500px";
anime_img[3].style.left = "70vh";

// green
anime_img[4].style.top = "600px";
anime_img[4].style.left = "20vh";

anime_img[5].style.top = "650px";
anime_img[5].style.left = "40vh";

anime_img[6].style.top = "500px";
anime_img[6].style.left = "80vh";

anime_img[7].style.top = "700px";
anime_img[7].style.left = "85vh";

anime_img[8].style.top = "750px";
anime_img[8].style.left = "90vh";


for(let i = 0; i < anime_img.length; i ++){
    let anime_x = anime_img[i].getBoundingClientRect().left;
    let anime_y = anime_img[i].getBoundingClientRect().top;
    let bounce_rad = (i + 1) * 3 * Math.PI / 10;
    
    const bounce_anime = ()=>{
    
        if(anime_x < innerWidth){
            anime_img[i].style.left = anime_x + "px";
        }else{
            anime_img[i].style.left = 2 *  innerWidth - anime_x + "px";
        }
        if(anime_y < innerHeight){
            anime_img[i].style.top = anime_y + "px";
        }else{
            anime_img[i].style.top = 2 * innerHeight - anime_y + "px";
        }

        anime_x = anime_x + Math.cos(- bounce_rad);
        anime_y = anime_y + Math.sin(- bounce_rad);
    
        if(anime_x > 2 * innerWidth ){
            anime_x = 0;
        }else if(anime_x < 0){
            anime_x = 2 * innerWidth;
        }
        
        if(anime_y > 2 * innerHeight ){
            anime_y = 0;
        }else if(anime_y < 0){
            anime_y = 2 * innerHeight;
        }

        requestAnimationFrame(bounce_anime);
    
    }
    
    bounce_anime();
    
}