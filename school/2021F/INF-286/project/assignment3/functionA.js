function isPalindrome(word)
{	testWord=word.toUpperCase();					//Convert String to all caps as to ignore case.
	backWord=testWord.split("").reverse().join("");	//Create a new string of the test string backwards.
	return testWord==backWord;						//If the backwards string matches the original test string, it is a palindrome.
}
