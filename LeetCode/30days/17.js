// 2622. Cache With Time Limit
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. 
// Once the duration has elapsed, the key should be inaccessible. The method should return true 
// if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten 
// if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.
// Example 1:
// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]

const TimeLimitCache=()=>{
    class TimeLimitedCache{
        constructor(){
            function get(key) {

            }
            function set(key, value, duration) {

            }
            function count() {

            }
        }
        
    }
}