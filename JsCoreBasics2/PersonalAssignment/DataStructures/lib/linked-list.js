'use strict'
// this will allows us to create more linked list
// this is basically our LinkedList constructor
// basically a linked list is a nested object
const LinkedList = function () {
  // the head is the first node in our linked list
  this.head = undefined
  // the tail is the last node in our linked list
  this.tail = undefined
  // keeps track of the number of nodes in the linked list
  // this is similar to the `length` prop on an array
  this.nodeCount = 0
}
// same just using classes instead of function
// class LinkedList {
//   constructor (){
//     this.head = undefined
//     this.tail = undefined
//   }
// }

// for each of our nodes they will have a value and next property
// the NOde constructor allows us to add a new 'value' to our linkedList
const Node = function (value, next) {
  // the value is the data that the node holds
  this.value = value
  // this property refers to the next node in the linkedList( or undefined if its the last node)
  this.next = next
}

// O(1) Constent time
// prepend, which when given a value, will add a new Node containing that value to the beginning of the list
LinkedList.prototype.prepend = function (value) {
// 1.Create a new Node containing the given value
// 2.Set the new Node's next node to the head.
  const createdNode = new Node(value, this.head)

  // we could accomplish step 2, by modifying the 'next' property
  // createdNode.next = this.head

  // 3.Update head to be the new Node
  this.head = createdNode

  // if we dont hasve a tail yet(which means the list is empty)
  // if (this.tail === undefined) {
  if (!this.tail) {
    // set the tail, to the only node we just inserted into the linked list
    this.tail = createdNode
  }
  // increase the number of nodes
  this.nodeCount++
}

// O(1) Constent time
// removes the first node and sets it to the next one
LinkedList.prototype.removeFirst = function () {
// if our list is empty
// if we dont have a head or a tail
  if (!this.head) {
    return undefined
  }

  // decrease the number of nodes
  this.nodeCount--

  // check if there is only a single element in our linked list
  // if we only have one node where the tail is the same as the head
  if (this.tail === this.head) {
  // reset tail to be undefined
    this.tail = undefined
  }

  // keep track of the first value in the linked list to return later
  const firstValue = this.head.value

  // remove the first node in the linked list
  // by setting the head (first node) to the second node (this.head.next)
  this.head = this.head.next

  // return the value of the first node
  return firstValue
}

// (O)1 Constent time
LinkedList.prototype.length = function () {
  // return the nodeCount property
  return this.nodeCount
}

// to get length recursive
LinkedList.prototype.length2 = function (count = 0) {
  if (this.head.next === undefined) return count
  count += 1
  this.head = this.head.next

  return this.length2(count + 1)
}

// O(1)
LinkedList.prototype.last = function () {
  if (this.length() === 0) return undefined
  // return the value of the value of the last element in the linked list
  return this.tail.value
}

// using recursion
LinkedList.prototype.last2 = function () {
  if (this.head.next === undefined) return this.head.value
  this.head = this.head.next

  return this.last2()
}

// O(1)
LinkedList.prototype.append = function (value) {
  // 1.
  const nextNode = new Node(value, undefined)
  // 2.if we have a tail node
  if (this.tail) {
    // we will update the tails next, to be the node we are appending
    this.tail.next = nextNode
  }
  // 3.update the tail node to be the node we just appended
  this.tail = nextNode

  // if we dont have a head node meaning the list is empty, set the head node to be the node we are appending
  if (!this.head) {
    this.head = nextNode
  }
  // increase the number of nodes
  this.nodeCount++
}

// O(n)-linear
// will iterate through the linked list and print them all
LinkedList.prototype.print = function (value) {
// 1.Create a variable, currentNode, and assign it to the first node (the head) in the LinkedList
  let currentNode = this.head
  // 2.While currentNode is not undefined
  // while(currentNode !== undefined){
  while (currentNode) {
  // print the value of the node
    console.log(currentNode.value)
    // 3.Set currentNode to its next node. Advancing currentNode to the next node in the LinkedList
    currentNode = currentNode.next
  }
}

LinkedList.prototype.includes = function (value) {
  // 1. create a variable called currentNode
  let currentNode = this.head
  // 2 while we have a curentNode
  while (currentNode) {
    // if we found the value we are searching for we will return true
    if (currentNode.value === value) {
      return true
    }
    // step 3 set current node to its next node
    currentNode = currentNode.next
  }
  return false
}

LinkedList.prototype.insertAfter = function (target, value) {
  // 1. create a variable called currentNode
  let currentNode = this.head
  // 2. while currentNode is not undefinedd
  while (currentNode) {
    if (currentNode.value === target) {
      // make a new node with the value we're searching for
      const nextNode = new Node(value, currentNode.next)
      // setting the target node's next property, to the node we just created
      currentNode.next = nextNode
      // if we're inserting after the tail(the last node)
      if (currentNode === this.tail) {
        // update the tail, to be the createdNode
        this.tail = nextNode
      }
      // increase the count for the number of nodes
      this.nodeCount++
      // only insert one value, return to end the function
      return 'Node inserted'
    }
    currentNode = currentNode.next
  }
}
// LinkedList.prototype.insertAfter = function (target, value) {
//   let firstNode = this.head

//   while(firstNode){
//     if(firstNode.value === target){
//       const nextNode = firstNode.next
//       const insertedNode = new Node(value, nextNode)
//       firstNode.next = insertedNode
//       this.count++
//       return 'node was inserted'
//     }
//     if(!firstNode.next){
//       firstNode.next = new Node(value, undefined)
//       this.count++
//       return 'node was inserted'
//     }

//     if(firstNode.value !== value){
//       return 'nothing was done we couldnt find that target node!';
//     }

//     firstNode = firstNode.next
//   }

// }

LinkedList.prototype.toString = function () {

}

LinkedList.prototype._search = function (value) {

}

LinkedList.prototype.remove = function (value) {

}

module.exports = {
  LinkedList,
  Node
}
