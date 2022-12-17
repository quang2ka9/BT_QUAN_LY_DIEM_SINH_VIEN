import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(name: string, score: number) {
        let node = new Node(name, score);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }
        this.size++
    }

    insertLast(name: string, score: number) {
        if (!this.tail) {
            this.insertFirst(name, score);
        } else {
            let node = new Node(name, score);
            this.tail.next = node;
            this.size++
        }
    }

    showList() {
        let listData: any[] = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }

    totalStudentFail() {
        let listStudentFail: any[] = [];
        let currentNode: Node<T> | null = this.head;

        while (currentNode !== null) {
            if (currentNode.score <= 5) {
                listStudentFail.push(currentNode.readData());
                currentNode = currentNode.next;
            } else {
                currentNode = currentNode.next;
            }
        }
        return listStudentFail;
    }

    listStudentMaxScore() {
        let listStudentMaxScore: any[] = []
        let currentNode: Node<T> | any = this.head;
        let maxScore: number | any = currentNode.score;
        if (this.size) {
            while (currentNode !== null) {
                if (maxScore < currentNode.score) {
                    maxScore = currentNode.score;
                }
                currentNode = currentNode.next;
            }
            ;

            currentNode = this.head

            while (currentNode !== null) {
                if (currentNode.score == maxScore) {
                    listStudentMaxScore.push(currentNode);
                }
                currentNode = currentNode.next;
            }
            return listStudentMaxScore;
        }
        return null;
    }

    findByName(name: string) {
        let currentNode = this.head;
        if (this.size) {

            while (currentNode !== null) {
                if (currentNode.name == name) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        }
        return null;
    }
}