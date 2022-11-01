"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterCollection_1 = require("./CharacterCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollecion_1 = require("./NumbersCollecion");
const numberCollection = new NumbersCollecion_1.NumberCollection([0, -1, 10, 5]);
numberCollection.sort();
console.log(numberCollection.data);
const characterCollection = new CharacterCollection_1.CharacterCollection("sankhadip");
characterCollection.sort();
console.log(characterCollection.data);
const linkedList = new LinkedList_1.LinkedList();
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
