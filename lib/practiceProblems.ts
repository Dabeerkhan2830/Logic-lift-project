export interface Problem {
  id: number
  title: string
  hint: string
}

export const practiceProblems: Problem[] = [
  { id: 1, title: 'Print the first N natural numbers', hint: 'Use a loop (for or while).' },
  { id: 2, title: 'Sum of first N natural numbers', hint: 'Use a loop or the formula n*(n+1)/2.' },
  { id: 3, title: 'Check if a number is even or odd', hint: 'Use modulus % operator.' },
  { id: 4, title: 'Find factorial of a number', hint: 'Use loop or recursion (n! = n * (n-1)!).' },
  { id: 5, title: 'Reverse a number', hint: 'Use % to get digits and / to remove last digit.' },
  { id: 6, title: 'Check if a number is palindrome', hint: 'Reverse it and compare with original.' },
  { id: 7, title: 'Find the largest of three numbers', hint: 'Use if-else or max() (language specific).' },
  { id: 8, title: 'Check if a number is prime', hint: 'Test divisibility up to √n.' },
  { id: 9, title: 'Generate Fibonacci series up to N terms', hint: 'Use two variables to track previous terms.' },
  { id: 10, title: 'Count digits in a number', hint: 'Divide by 10 until number becomes 0.' },
  { id: 11, title: 'Find sum of digits of a number', hint: 'Extract digits using %10 and /10.' },
  { id: 12, title: 'Find the GCD (HCF) of two numbers', hint: 'Use Euclidean algorithm.' },
  { id: 13, title: 'Check if a string is palindrome', hint: 'Compare first and last characters using indexes or slicing.' },
  { id: 14, title: 'Count vowels and consonants in a string', hint: 'Use loops and check with vowel set {\'a\',\'e\',\'i\',\'o\',\'u\'}.' },
  { id: 15, title: 'Find the largest element in an array', hint: 'Traverse the array keeping track of max value.' },
  { id: 16, title: 'Find the second largest element in an array', hint: 'Keep two variables: max1 and max2.' },
  { id: 17, title: 'Sort an array', hint: 'Implement bubble sort or use built-in sort.' },
  { id: 18, title: 'Find sum of elements in an array', hint: 'Use a loop or built-in sum function.' },
  { id: 19, title: 'Count frequency of each element in an array/string', hint: 'Use dictionary/map or nested loops.' },
  { id: 20, title: 'Swap two numbers without using a third variable', hint: 'Use arithmetic (a=a+b; b=a-b; a=a-b;) or XOR.' },
]

export const intermediateProblems: Problem[] = [
  { id: 1, title: 'Find all prime numbers in a given range', hint: 'Use a loop and the prime check logic for each number.' },
  { id: 2, title: 'Find the missing number in an array (1 to N)', hint: 'Use sum formula or XOR logic.' },
  { id: 3, title: 'Find the duplicate element in an array', hint: 'Use nested loops or a hash map to track seen elements.' },
  { id: 4, title: 'Check if two strings are anagrams', hint: 'Sort both strings or count character frequencies.' },
  { id: 5, title: 'Remove all duplicates from an array/string', hint: 'Use an auxiliary array or set.' },
  { id: 6, title: 'Find the first non-repeating character in a string', hint: 'Count occurrences using a map or array of frequency.' },
  { id: 7, title: 'Check if a number is an Armstrong number', hint: 'Sum of digits raised to power of number of digits equals number.' },
  { id: 8, title: 'Print all factors of a number', hint: 'Loop from 1 to √n and print divisors.' },
  { id: 9, title: 'Find the intersection and union of two arrays', hint: 'Use loops or sets to track common and unique elements.' },
  { id: 10, title: 'Reverse the words in a sentence', hint: 'Split by spaces and reverse the list of words.' },
  { id: 11, title: 'Find the longest word in a string', hint: 'Split string and compare lengths of each word.' },
  { id: 12, title: 'Check if a string is a valid palindrome ignoring spaces & case', hint: 'Remove spaces, convert to lower, then compare.' },
  { id: 13, title: 'Implement binary search', hint: 'Divide array by mid index; move left/right accordingly.' },
  { id: 14, title: 'Implement bubble sort / insertion sort manually', hint: 'Understand swapping adjacent or inserting in order.' },
  { id: 15, title: 'Find the maximum sum of a contiguous subarray (Kadane\'s Algorithm)', hint: 'Track current sum and global max while traversing.' },
  { id: 16, title: 'Count the number of words in a sentence', hint: 'Increment count whenever a space follows a word.' },
  { id: 17, title: 'Find frequency of digits in a number', hint: 'Convert to string or use %10 repeatedly.' },
  { id: 18, title: 'Print half pyramid or diamond pattern using * symbols', hint: 'Use nested loops for rows and columns.' },
  { id: 19, title: 'Calculate power of a number (aⁿ) without using pow()', hint: 'Use loop or recursion.' },
  { id: 20, title: 'Check if an array is sorted (ascending or descending)', hint: 'Compare each element with the next.' },
]

export const advancedProblems: Problem[] = [
  { id: 1, title: 'Find the Missing Number in an Array (1 to N)', hint: 'Use the formula n*(n+1)/2 - sum(array).' },
  { id: 2, title: 'Find Duplicate Elements in an Array', hint: 'Use a frequency array, hash map, or nested loops.' },
  { id: 3, title: 'Find the Intersection of Two Arrays', hint: 'Compare each element or use sets/maps.' },
  { id: 4, title: 'Move All Zeros to the End of an Array', hint: 'Use two-pointer technique or extra list.' },
  { id: 5, title: 'Rotate an Array by K Positions', hint: 'Use slicing, reversal algorithm, or temporary array.' },
  { id: 6, title: 'Check if Two Strings Are Anagrams', hint: 'Sort both strings or compare character counts.' },
  { id: 7, title: 'Find the Longest Substring Without Repeating Characters', hint: 'Use sliding window and hash map.' },
  { id: 8, title: 'Count Frequency of Words in a Sentence', hint: 'Split string and use dictionary/map.' },
  { id: 9, title: 'Implement Binary Search', hint: 'Use divide and conquer (mid element logic).' },
  { id: 10, title: 'Implement Linear Search Recursively', hint: 'Replace loop with recursive call until index == size.' },
  { id: 11, title: 'Reverse a String Without Using Built-in Functions', hint: 'Use loop swapping characters or recursion.' },
  { id: 12, title: 'Check if a Number is an Armstrong Number', hint: 'Sum of digits raised to power of digit count == original number.' },
  { id: 13, title: 'Find the Majority Element in an Array (occurs > n/2 times)', hint: 'Use Boyer-Moore Voting Algorithm or hash map.' },
  { id: 14, title: 'Implement Matrix Multiplication', hint: 'Use nested loops with formula C[i][j] += A[i][k]*B[k][j].' },
  { id: 15, title: 'Find the Transpose of a Matrix', hint: 'Swap rows and columns.' },
  { id: 16, title: 'Find the Maximum Subarray Sum', hint: 'Use Kadane\'s Algorithm.' },
  { id: 17, title: 'Find the Kth Largest/Smallest Element in an Array', hint: 'Sort array or use heap/selection algorithm.' },
  { id: 18, title: 'Check if a String is a Valid Parentheses Sequence', hint: 'Use stack (( pushes, ) pops).' },
  { id: 19, title: 'Generate All Permutations of a String', hint: 'Use recursion and swapping technique.' },
  { id: 20, title: 'Implement a Recursive Binary Search Tree Traversal (Inorder/Preorder/Postorder)', hint: 'Use recursion to visit nodes in correct order.' },
]

