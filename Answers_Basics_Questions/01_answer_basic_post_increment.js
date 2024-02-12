let sum = 4;
let increment = sum++; // post-increment
console.log(sum, increment);

//The answer is (5, 4) is because

//The increase in value by one in the sum variable, as a result of the post-increment operation (sum++), reflects in sum itself because of how the post-increment operator is designed to work. Here's a step-by-step explanation:

// =>>>> 1. Initial Assignment: You start with let sum = 4;, where sum is initialized with the value 4.
//
// =>>>> 2. Post-Increment Operation: When you perform let increment = sum++;, two things happen in sequence due to the post-increment operator ++:
//
//              2.1 Value Assignment to increment: The current value of sum (which is 4) is assigned to the variable increment. This is the "copy" part, where the current value of sum is used to initialize increment. At this moment, increment becomes 4.
//              2.2 Incrementing sum: After assigning the value to increment, the sum variable itself is then incremented by 1. This means sum changes from 4 to 5. This increment happens to sum directly because the post-increment operator's behavior is specifically to increment the value of the variable it is applied to after returning its current value.
// =>>>> 3. Reflection in sum: The reason the increment reflects in sum and not in increment is because of the order of operations dictated by the post-increment operator. The increment operation is applied directly to sum after its original value is used for the assignment to increment.
//
//In summary, the post-increment operation (sum++) affects sum directly by design. First, it uses sum's current value for whatever operation is at hand (in this case, assigning that value to increment), and then it increments sum by 1. The increment variable is not affected by the incrementation of sum because it has already been assigned sum's value prior to sum being incremented. That's why, after these operations, sum is 5 (reflecting the increment), and increment is 4 (reflecting the original value of sum before the increment).