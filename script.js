// complete the given function

function palindrome(str){
str = str.toLowerCase();
	str = str.trim();
	let i = 0, j = str.length-1;
	let isPalindrome = true;
	while(i <= j){
		if(str.charAt(i)!= str.charAt(j)){
			isPalindrome = false;
			return isPalindrome;
		}
		i++;
		j--;
	}
	return isPalindrome;
}
module.exports = palindrome