
db.getMongo().getDBNames().forEach( function(name){
  if (name=='admin') 
    return;
  if (name=='local') 
    return;
  if (name=='dogbone') 
    return;
  if (name=='doghouse') 
    return;
  if (name=='messenger') 
    return;
  if (name=='4c6569fb0e23ca194a7646c3cd20e37e92a17aea')
    return;
  if (name=='0d293de57c66a1b277980b88d48bfe03cc8e9a64') 
    return;
  if (name=='8ee2489f145d87d9193b53c4e94984c9feeeafa9')
    return;
  if (name=='ac789bd0-cbd8-8625-acf5-112c7063729e')
    return;
  if (name=='4810b3f8f7e5a8d003d08449142031c1bafa8d93')
    return;
  if (name=='secure-spaces-server-tenants') 
    return;
  if (name=='secure-spaces-server-system-info') 
    return;
  


  print( "dropping db " + name );
  db.getSiblingDB(name).dropDatabase();
  
})

