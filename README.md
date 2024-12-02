## Function Description

function radarDevice(speed) {
    const velocityLimit = 70; // The legal velocity limit is 70 km/h.
    const distancePerPoint = 5; // The distance travelled per point is 5 km.
  
    if (speed <= velocityLimit) {
        console.log("Ok"); // If the speed is within the limit, it will log "Ok".
    } else if (speed > velocityLimit) {
        // If the speed exceeds the legal velocity limit, further actions can be taken here.
    }
}  

## Parameters
speed (number): The speed of the vehicle in kilometers per hour (km/h) that the radar device will check.

## Logic

Speed Check Against Limit:

The function compares the given speed with a predefined velocityLimit of 70 km/h.
If the speed is less than or equal to 70 km/h, the radar device will output "Ok", indicating that the vehicle is not speeding.
If the speed exceeds 70 km/h, the function does not yet perform any action, but this behavior can be extended for further processing (e.g., issuing a fine or recording the speed).


Further Enhancements (not implemented yet):

This basic version of the function can be extended to take further action when the speed exceeds the limit, such as calculating the distance travelled at the excessive speed, or issuing penalties based on the number of points exceeded over the limit.
The distancePerPoint constant defines how much distance the vehicle would travel per point. You could use this to calculate how far the vehicle would travel before the radar device gives a warning or takes other actions.


## Example Usage


radarDevice(80); // Logs the outcome based on speed (above 70 km/h)
radarDevice(280); // Logs the outcome for a higher speed
radarDevice(60); // Logs "Ok" as the speed is within the limit


## Expected Output
For radarDevice(80):

Since 80 km/h is greater than the speed limit of 70, the function will execute the else if block (though the action is not yet defined in this code).
For radarDevice(280):

The function will again check if 280 km/h exceeds the velocity limit and could trigger further actions based on future implementation.
For radarDevice(60):

This call will output Ok as the vehicle is not speeding.


## Potential Improvements
Calculating Points: You could use the distancePerPoint to calculate how many "points" or "penalties" the vehicle accumulates if they exceed the speed limit. For example, if a vehicle exceeds the limit by 10 km/h, they might accumulate 2 penalty points, and so on.

Logging Specific Information: Instead of just printing "Ok" for speeds under the limit, the function could provide more detailed output such as "Speed is within the limit: 60 km/h."

Expanding the else if Block: The current else if block does not contain any action. You could modify this section to log additional information or actions, such as "Warning: Speeding detected!".

