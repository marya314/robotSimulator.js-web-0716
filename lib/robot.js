'use strict';

function Robot() {
 this.orient = function(currentDirection) {
   var directions = ['east', 'west', 'north', 'south'];
   if (directions.includes(currentDirection)) {
     this.bearing = currentDirection;
   } else {
     throw Error(['Invalid Robot Bearing']);
   }
   }

   this.turnRight = function() {
       switch(this.bearing) {
           case "north":
            this.bearing = "east"
            break;
           case "east":
            this.bearing = "south"
            break;
           case "south":
             this.bearing = "west"
             break;
            case "west":
             this.bearing = "north"
            break;
       }
 }

 this.turnLeft = function() {
     switch(this.bearing) {
         case "north":
          this.bearing = "west"
          break;
         case "west":
          this.bearing = "south"
          break;
         case "south":
           this.bearing = "east"
           break;
          case "east":
           this.bearing = "north"
          break;
     }
 }

 this.at = function(x,y){
     this.coordinates = [x,y]
 }

 this.advance = function() {
   switch (this.bearing) {
     case "north":
       return this.coordinates[1] += 1
     case "west":
       return this.coordinates[0] -= 1
     case "south":
       return this.coordinates[1] -= 1
     case "east":
       return this.coordinates[0] += 1
   }
 }

 this.instructions = function(stringOfLetters) {
    var arrayOfInstructions = []
    for (var i = 0; i < stringOfLetters.length; i++) {
      switch (stringOfLetters[i]) {
        case "R":
          arrayOfInstructions.push("turnRight")
          break
        case "L":
          arrayOfInstructions.push("turnLeft")
          break
        case "A":
          arrayOfInstructions.push("advance")
          break
      }
    }
    return arrayOfInstructions
  }

  this.place = function(startingplace) {
   this.at(startingplace.x,startingplace.y)
   this.bearing = startingplace.direction
 }

 this.evaluate = function(stringOfLetters) {
  this.instructions(stringOfLetters).forEach((element)=>{
    switch (element) {
      case "turnLeft":
        this.turnLeft()
        break
      case "turnRight":
        this.turnRight()
        break
      case "advance":
        this.advance()
        break
    }
  })
}

}
