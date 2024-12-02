function radarDevice(speed) { //This function is called radar device.
    const velocityLimit = 70; //The legal velocitylimit is 70.
    const distancePerPoint = 5; // The distance travelled per every point is 5km.
  
    if (speed <= velocityLimit) {//This a conditional statement. it checks if the speed is <= the velocitylimit
        console.log("Ok"); //If true it will display the string "ok".
    } else if (speed > velocityLimit) {
        // If the speed is greater than the velocitylimit,velocitylimit is being called.

    }
}  
    radarDevice(80); 

radarDevice(280); 
radarDevice(60);