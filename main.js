
const anime_areas = document.querySelectorAll(".anime-area")



for(let area_i = 0; area_i < anime_areas.length ; area_i++){
    const anime_imgs = anime_areas[area_i].querySelectorAll( ".anime");


    for(let i = 0; i < anime_imgs.length; i ++){
        let anime_x = anime_imgs[i].getBoundingClientRect().left;
        let anime_y = anime_imgs[i].getBoundingClientRect().top;
        let bounce_rad = (i + 1) * 3 * Math.PI / 10;
        
        const bounce_anime = ()=>{
        
            if(anime_x < anime_areas[area_i].clientWidth){
                anime_imgs[i].style.left = anime_x + "px";
            }else{
                anime_imgs[i].style.left = 2 *  anime_areas[area_i].clientWidth - anime_x + "px";
            }
            if(anime_y < anime_areas[area_i].clientHeight){
                anime_imgs[i].style.top = anime_y + "px";
            }else{
                anime_imgs[i].style.top = 2 * anime_areas[area_i].clientHeight - anime_y + "px";
            }

            anime_x = anime_x + Math.cos(- bounce_rad);
            anime_y = anime_y + Math.sin(- bounce_rad);
        
            if(anime_x > 2 * anime_areas[area_i].clientWidth ){
                anime_x = 0;
            }else if(anime_x < 0){
                anime_x = 2 * anime_areas[area_i].clientWidth;
            }
            
            if(anime_y > 2 * anime_areas[area_i].clientHeight ){
                anime_y = 0;
            }else if(anime_y < 0){
                anime_y = 2 * anime_areas[area_i].clientHeight;
            }

            requestAnimationFrame(bounce_anime);
        
        }
        
        bounce_anime();
        
    }

        
}
