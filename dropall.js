
db.getMongo().getDBNames().forEach( function(name){
	if (name=='admin') 
		return;
	if (name=='local') 
		return;
	if (name=='messenger') 
		return;


	print( "dropping db " + name );
	db.getSiblingDB(name).dropDatabase();
	
})