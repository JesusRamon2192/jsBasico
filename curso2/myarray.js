class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.length]=item;
        this.length++;
        return this.data;
    }
    unshift(item){
        if(!item){
            return this.length
        } else {
            for(let i = this.length-1; i >= 0; i--){
                this.data[i+1] = this.data[i];
            }
        this.length++;
        this.data[0] = item;
        return this.length;
        }
    }
    shift(){
        const itemShift = this.data[0];
        delete this.data[0];
        for(let i = 0;i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return itemShift;
    }
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.lenght--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
    
const myArray = new MyArray();