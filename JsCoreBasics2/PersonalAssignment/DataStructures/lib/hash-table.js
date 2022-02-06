'use strict'
// This constructor allows us to make a new hash table
// this hash table allows us to set the size of it
// Size is how many buckets to create
const HashTable = function (size) {
  // Create an array of buckets
  this.buckets = []
  // loop once for each bucket we want to create
  for (let i = 0; i < size; i++) {
    // and for each bucket push in an empty array
    this.buckets.push([])
  }
}

HashTable.prototype.insert = function (key, value) {
  // use the hash function to find out which bucket to put our key value pair in
  const bucketIndex = this._hash(key)
  // get the bucket to insert our key/ value pair in
  const bucket = this.buckets[bucketIndex]
  // does a key value pair already exsist that has a key we are trying to insert
  const foundPair = bucket.find(pair => pair.key === key)
  // if we found a pair
  if (foundPair) {
    // we want to update its value
    foundPair.value = value
  } else {
    // create an object to store our key and our value
    const createdPair = { key, value }
    // push in the new key /value pair
    bucket.push(createdPair)
  }
}

HashTable.prototype.search = function (key) {
  // use the hash function to find out which bucket to put our key value pair in
  const bucketIndex = this._hash(key)
  // get the bucket to insert our key/ value pair in
  const bucket = this.buckets[bucketIndex]
  // does a key value pair already exsist that has a key we are trying to insert
  const foundPair = bucket.find(pair => pair.key === key)
  // if we found a pair
  if (foundPair) {
    // we want to return the value for that key/ value pair
    return foundPair.value
  }
  return undefined
}

HashTable.prototype.delete = function (key) {

}

// _hash - a helper function, that hashes the given key, returning the index of
//         the bucket we should place the key in
HashTable.prototype._hash = function (key) {
  // create a number based on our key, here we assume the key will always be
  // a string
  let sum = 0

  // for each character in our key
  for (let i = 0; i < key.length; i++) {
    // add the character's Unicode value to our sum
    sum += key.charCodeAt(i)
  }

  // modulo our number by the number of buckets, so we can know which bucket
  // this key corresponds to
  return sum % this.buckets.length
}

module.exports = {
  HashTable
}
