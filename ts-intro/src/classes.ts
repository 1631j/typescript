class Book {
  private checkedOut: boolean = false;

  constructor(readonly title: string, public author: string) {}

  get info() {
    return `${this.title} by ${this.author}`;
  }
  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }
}

const deepWork = new Book("Deep Work", "Cal Newport");
console.log(deepWork.info);
deepWork.checkOut = true;
console.log(deepWork);

/*
constructor(title: string , author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut(){
    this.checkedOut = true;
  }
  public isCheckedOut(){
    return this.checkedOut;
  }
  private toggleCheckOutStatus(){
    return !this.checkedOut;
  }
*/
