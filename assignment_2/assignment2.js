/*
Exercise #12
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for (var x = 0; x < 101; x++) {
 console.log(x);   
}



/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:


#
##
###
####
#####
######
#######
*/

var hash = "";
for (var y = 1; y < 8; y++) {
hash += "#";
console.log(hash);
}
