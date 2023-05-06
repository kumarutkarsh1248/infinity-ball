const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const particleArray = [];

window.addEventListener("resize",function()
{
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    ctx=canvas.getContext("2d")
})


console.log(particleArray)

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse={
    x: undefined,
    y: undefined
}

canvas.addEventListener("click", make);
function make(e){
    mouse.x = e.x;
    mouse.y = e.y;
    
        for (let i=0; i<10; i++){
            particleArray.push(new Particle())
        }
}


class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = canvas.width/2;
        // this.y = canvas.height/2;
        this.size = Math.random()*10 +5;
        this.speedx = Math.random()*80 - 40;
        this.speedy = Math.random()*80 - 40;
        this.color_list = ["red", "orange", "white", "blue", "yellow"];
        this.rand_color = this.color_list[Math.floor(Math.random()*5)];
    }
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
        this.size = this.size*0.995;
        // if (this.size < 1){
        //     particleArray.(particleArray[i])  
        // }

        if ((this.x + this.speedx > canvas.width-this.size) ||
            (this.x + this.speedx < this.size)){
                this.speedx = -this.speedx;
            }
        if ((this.y + this.speedy > canvas.height-this.size) ||
            (this.y + this.speedy < this.size)){
                this.speedy = -this.speedy;
            }
        
    }
    draw(){
        
        ctx.beginPath();
        ctx.fillStyle = this.rand_color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
} 


function handel(){
    for (let i=0; i<(particleArray.length); i++){
        if(!particleArray[i])
            continue;
        if (particleArray[i].size < 1){
            // particleArray.remove(particleArray[i]);
            delete particleArray[i]
        }
        else{
            
            particleArray[i].draw();
            particleArray[i].update();
        }
        
        
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    handel();
    requestAnimationFrame(animate);
}


animate();


