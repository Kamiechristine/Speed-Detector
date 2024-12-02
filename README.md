This is a function that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

I used a function called checkSpeed with a parameter called speed.
speedLimit and kilometerPerSecond are declered using const.
The first if statement is used to determine if the speedLimmit has been observed, if the speedLimmit is below 70 "Ok."is returned.
The function also has an annonimas function in which Math.floor is used to round off the demerit points after the poinst are calculated using
(speed - speedlimite)/kilometerPerSecond).
If the calculated demerit points are above 12 then the drivers license is suspended,if the points are below 12 the points will be displayed.