
conn = new Mongo();
db = conn.getDB("secure-spaces-server-system-info");

db.systemLock.update({}, {$set: {locked: false}});

