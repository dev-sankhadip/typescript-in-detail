import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumbersCollecion";

const numberCollection = new NumberCollection([0, -1, 10, 5]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("sankhadip");
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(4);
linkedList.add(3);
linkedList.sort();
linkedList.print();

// // number sort algorithm
// const sorter1 = new Sorter(numberCollection);
// sorter1.sort();
// console.log(sorter1.collection);

// // string sort algorithm
// const sorter2 = new Sorter(characterCollection);
// sorter2.sort();
// console.log(sorter2.collection);

// // Linked List sort
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
// linkedList.print();
