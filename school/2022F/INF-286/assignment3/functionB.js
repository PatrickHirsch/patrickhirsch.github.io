function countChar(string,character)
{	s=string.split("");					//Convert the string to an array, s, of characters.
	c=0;								//Create a character to count instances of the specified Character.
	s.forEach
	(	function(e)
		{ if(e==character) c++;			//For each character in the string, 
		}
	);
	return(c);
}
