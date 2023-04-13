import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  images = [
    'assets/images/1.jpg',
    'assets/images/2.jpg',
    'assets/images/3.jpg'
  ]
  slideIndex: number = 0;
  interval:any ; 
  next(){
    if(this.slideIndex < this.images.length -1 ){
      this.slideIndex ++;
    }
  }
  prev() {
     if (this.slideIndex > 0){
      this.slideIndex --;
    }
  }
  startSlide() {
    this.interval= setInterval(() => {
       this.next();
       if(this.slideIndex === this.images.length - 1)
       {
         this.slideIndex=0;
       }
     }, 1000);
   }
   stopSlide() {
     clearInterval(this.interval);
   }
}
