class catClicker {
  constructor(name, clickCounter, catImage) {
    this.name = name;
    this.clickCount = 0;
    this.clickCounter = document.querySelector(clickCounter);
    this.clickCounter.innerHTML = this.clickCount;
    this.catImage = document.querySelector(catImage);
    this.catImage.addEventListener('click', e => this.click());
  }
  click() {
    this.clickCount++;
    this.clickCounter.innerHTML = this.clickCount;
  }
}

const cat1 = new catClicker('Bob', '#clickCounter1', '#catImage1');
const cat2 = new catClicker('Fred', '#clickCounter2', '#catImage2');
