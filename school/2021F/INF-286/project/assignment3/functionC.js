function findGreatest(list)
{	if(list.lenght==0) return null;
	if(list.lenght==1) return list[0];
	g=list[0];
	
	list.forEach
	(	function(e)
		{	if(e>g)	g=e;
		}
	);
	return g;
}
