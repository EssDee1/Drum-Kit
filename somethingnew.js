
//an object

var houseKeeper1 = {
    name: "Katrina",
    yearOfExp: 12,
    RepertoireL: ['Lobby', 'Bathroom'] 
}


// Constructor Function

function HouseKeeper(name, yearOfExp, repertoire) {
    this.name = name;
    this.yearOfExp = yearOfExp
    this.repertoire = repertoire  
    this.cleaningRepertoire = function () {
        alert("Cleaning in Progress")
    }
}


var houseKeeper2 = new HouseKeeper('Lalita', '5', ['Kitchen', 'Bathroom']) 


// Callback function

function anotherEventListerner(typeOfEvent, callback) {
    var eventThatHappened = {
        thisType: 'keydown',
        thisKey : 'p',
    }

    if (eventThatHappened.thisType === typeOfEvent) {
        callback(eventThatHappened)
    }
}
