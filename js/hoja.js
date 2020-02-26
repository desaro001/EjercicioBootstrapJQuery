/*
ESTADO:
    speed
    x, y
    imagen
    width, height
COMPORTAMIENTO:
    mover
*/
class Hoja {
    constructor(x, y, width, height, speed) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.speed = speed;
      this.rotation = 0;

      $("#hoja").css("left",x+"px");
      $("#hoja").css("top",y+"px");
      $("#imagenHoja").css("height",height);
      $("#imagenHoja").css("width",width);
    }
    mover(){
        this.y = this.y + this.speed;
        if (this.y > window.innerHeight) {
            this.y = -10;
        }
        this.rotation = this.rotation + 1;
        this.dibujar();
    }
    dibujar(){
        $("#hoja").css("top",this.y + "px");
        $("#hoja").css("transform","rotate(" + this.rotation + "deg" + ")");
    }
  }
