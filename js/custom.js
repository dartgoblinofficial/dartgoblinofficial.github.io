


function leavesFirst(){
    let rightImages = document.querySelectorAll('.container-right img');
    for(i = 0; i < rightImages.length; i++){
        rightImages[i].style.display = "none";
    }
    rightImages[0].style.display = "block";
    
    let leftImages = document.querySelectorAll('.container-left img');
    for(i = 0; i < leftImages.length; i++){
        leftImages[i].style.display = "none";
    }
    leftImages[0].style.display = "block";
    }
    
    leavesFirst();
    
    let nextImage = document.getElementById('next-image');
    let backimage = document.getElementById('back-image');
    
    nextImage.onclick = function(event){
        let contLftImg = document.getElementById('left-side');
        let leftImages = document.querySelectorAll('.container-left img');
        let lastLeftImage = leftImages[leftImages.length-1];
        lastLeftImage.remove();
        contLftImg.prepend(lastLeftImage);
    
        let contRtImg = document.getElementById('right-side');
        let rightImage = document.querySelectorAll('.container-right img');
        let firstRightImage = rightImage[0];
        firstRightImage.remove();
        contRtImg.append(firstRightImage);
        leavesFirst();
        event.preventDefault();
    }
    
    backimage.onclick = function(event){
        let contRtImg = document.getElementById('right-side');
        let rightImages = document.querySelectorAll('.container-right img');
        let lastRightImage = rightImages[rightImages.length-1];
        lastRightImage.remove();
        contRtImg.prepend(lastRightImage);
    
        let contLfImg = document.getElementById('left-side');
        let leftImage = document.querySelectorAll('.container-left img');
        let firstLeftImage = leftImage[0];
        firstLeftImage.remove();
        contLfImg.append(firstLeftImage);
        leavesFirst();
        event.preventDefault();
    }


    
    