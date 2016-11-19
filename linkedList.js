/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

var head = null;
//var size = 0;




function getHead(){
  return head;
}



function getTail(){
  var curNode = head;
  // curNode could be null
  while(curNode !== null){
    // curnode is a node, it's not null
    // check if curNode has next node
    if(curNode.next !== null){
      // if it does, set curNode to next, because it's not tail
      curNode = curNode.next;
    } else {
      // else return curNode, 
      return curNode;
    }
  }
  return curNode;

}

function add(newValue){
  var tail= getTail();

  var newNode= {
  value: newValue,
  next: null
  };

  if(tail === null ){
    head = newNode;
  } else {
    tail.next= newNode;
    }
  //  size ++;
  return newNode;

  }



  /*function get(index){
    var curNode = head;
    var count = 0;

    while(curNode !== null){
      if(count === index){
        return curNode;
      } else {
        curNode = curNode.next;
        count ++;
      } 
    }
    if(curNode === null){
      return false;
    }
  } */



function get(value){
  var curNode = head;

  if(value < 0){
    return false; // need this if statement to count for the negative numbers
  }
  for(var i=0; i < value; i++){ // because i is set at 0, if the value is a negative number, it will be undefined
    if(curNode.next === null){
      return false; 
    } else {
     curNode= curNode.next;
    }
    
  }
  return curNode;
}   


function remove(index){
  var previousNode = get(index-1);
  var curNode = get(index);
  //var nextNode = get(index+1);

   if(curNode === false){
    return false;
    }  

// if you want to remove the curNode (the tail), 
    if (curNode.next === null){
      previousNode.next = null;
      return; // kills if and returns list with previousNode.next as null
    } 

// remove the head
  if(index === 0){
    head = head.next;
    return;
  } 
  previousNode.next = curNode.next;

 // size--;
}



function insert(newValue, index){

   var previousNode = get(index-1);
  var curNode = get(index);


  var newNode = {
    value: newValue,
    next: curNode
  };


    if(curNode === false) {
    return false; 
  

    }
  




 /* if(curNode === false) {
    return false; 
  } */


if(index === 0){
  head = newNode;
  return;
} else {
  previousNode.next = newNode;
}


/* if(index > size){
    return false;
  }

size ++; */

return;
}





return{
getHead:getHead,
getTail: getTail,
add: add,
remove: remove,
get: get,
insert: insert
};


}




