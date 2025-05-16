function updatePath() {
    const svg = document.getElementById('dynamicSvg');
    const path = document.getElementById('roundedRect');
    const video = document.getElementById('video');
    const width = video.clientWidth * 2; 
    const height = video.clientHeight * 2;
    const rx = Math.min(width, height) * 0.1; 

    //Set viewBox to match window dimensions
    svg.setAttribute('viewBox', `${(width * 1.1) * -0.05} ${(height * 1.1) * -0.05} ${width * 1.1} ${height * 1.1}`);
    
    
    //Svg path generated from window dimensions and 10% of the smallest dimension
    const d = `M${rx},0
               H${width - rx} A${rx},${rx} 0 0 1 ${width},${rx}
               V${height - rx} A${rx},${rx} 0 0 1 ${width - rx},${height}
               H${rx} A${rx},${rx} 0 0 1 0, ${height - rx}
               V${rx} A${rx},${rx} 0 0 1 ${rx}, 0 Z`;
    
    path.setAttribute('d', d);
}
  
window.addEventListener('resize', updatePath);
window.addEventListener('load', updatePath);

let textPath = document.getElementById("textPath");
let offset = 0;

function animateText() {
    if (offset >= 100){
        offset = 0;
    } else{
        offset += (0.25); //1/60 offset makes full cycle in 1:40 (66.6666%) greater than 1:00 => offset must be 66.6666% greater => 1.666/60 
    }
    //offset = (offset + (1/60)) % 100; //ensures that when offset reaches 100, 100 % 100 = 0 so that it goes back to 0
    textPath.setAttribute("startOffset", offset + "%"); 
    requestAnimationFrame(animateText); //60 Hz (60 frames per second)
}
animateText();