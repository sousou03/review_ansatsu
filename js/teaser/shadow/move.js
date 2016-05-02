function move(){

    var range = 100;

    for (var i = 0; i < imgH; i+=1) {

        random = Math.floor(Math.random()*range);
        ctx.drawImage(img, 0, i, imgW, 1, random, i, imgW, 1);

    }

}