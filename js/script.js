function drawTree(x) 

{

	for (i=1; i<=x; i++) {
	 	for (j = i; j < x; j++)
        	{
            		document.write(" ");
        	}
		for (y=1; y <= i; y++) 
		{
			document.write('*');
		}
			document.write('<br/>');
		}
}

drawTree(prompt("Podaj liczbę gałęzi"));
