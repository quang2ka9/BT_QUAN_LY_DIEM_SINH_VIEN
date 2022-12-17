import { LinkedList } from "./LinkedList";
import { Node } from "./Node";

let newLinkedList = new LinkedList();

newLinkedList.insertFirst('Quang', 3.2)
newLinkedList.insertFirst('Teo', 3.3)
newLinkedList.insertFirst('Nam', 5.1)
newLinkedList.insertFirst('Nm', 5.1)
newLinkedList.insertFirst('Na', 5.1)

console.log(newLinkedList.findByName('Quang'))
console.log(newLinkedList.listStudentMaxScore())
console.log(newLinkedList.totalStudentFail())