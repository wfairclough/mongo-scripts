// Run with: mongo vars.js localize.js 
// And change the vars.js file to match local machine


db.getMongo().getDBNames().forEach( function(name) {

  if (name=='secure-spaces-server-tenants') {
    print( "updating graphite software tenant domain " + domain );
    tenantsDb = db.getSiblingDB(name);
    tenantsDb.tenants.update({name: 'graphite software'}, {$set: {domain: domain}});
    tenant = tenantsDb.tenants.find({name: 'graphite software'}).limit(1);

    if (tenant[0] && tenant[0].database) {
      databaseName = tenant[0].database;
      print("tenant database: " + databaseName);

      mainDb = db.getSiblingDB(databaseName);
      mainDb.domain.update({}, {$set: {name: domain + ':' + port}});
      print("updated domain name to: " + domain + ':' + port);
    }
  }
  
});

