/*


The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with. The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

Input:
Rod A 	Rod B 	Rod C
---- 		
--------- 		
------------- 		

Output:
Rod A 	Rod B 	Rod C
		----
		---------
		-------------

Derive an algorithm to solve the Tower of Hanoi puzzle. Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.

*/

const rods = {
    "A": [3, 2, 1],
    "B": [],
    "C": []
};
let moves = 0;

const displayRods = (rods) => {
    let newRods = Object.keys(rods);
    newRods.forEach(rod => console.log(rod + ": " + rods[rod]));

    console.log(`${moves} moves`);
    moves++;
    console.log("\n");
}
displayRods(rods);

const towerOfHanoi = (n, sourceRod, destinationRod, bufferRod) => {

    // Our base case is implicitly when n, the height of our stack of disks, gets down to zero.

    if (n >= 1) {

        towerOfHanoi(n - 1, sourceRod, bufferRod, destinationRod);

        console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);

        rods[bufferRod].push(rods[sourceRod].pop())
        rods[destinationRod].push(rods[bufferRod].pop())

        displayRods(rods);

        towerOfHanoi(n - 1, bufferRod, destinationRod, sourceRod);

    }
    return;
}
towerOfHanoi(3, "A", "C", "B");

/* If you are given 5 disks, how do the rods look like after 7 recursive calls?

Move disk 1 from A to C
A: 5,4
B: 
C: 3,2,1
7 moves
 */

/*


How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?

    7, 15, and 31

What is the runtime of your algorithm?

    O(2n) exponential The number of steps doubles (plus one) for every disk added.

*/