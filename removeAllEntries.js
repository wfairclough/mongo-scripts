

db.getMongo().getDBNames().forEach( function(name) {

  if (name=='34e795a8927f796c88638c0498351a15d2c2f09f') {
    print( "removing from all collections" );
    mainDb = db.getSiblingDB(name);
    mainDb.organizations.remove({})
    mainDb.users.remove({})
    mainDb.userView.remove({})
    mainDb.groups.remove({})
    mainDb.groupView.remove({})
    mainDb.policies.remove({})    
  }
  
});