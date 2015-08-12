console.log("Creating supplemental dbs");
emailInbox = new Mongo.Collection("emailInbox");
multitaskingScript = new Mongo.Collection("multitaskingScript");
participantBase = new Mongo.Collection("participantBase");
instrumentLog = new Mongo.Collection("instrumentLog");
console.log("Created.  Allowing...");
emailInbox.allow({
   insert: function ()
   {
      return true;
   },
   update: function ()
   {
      return true;
   },
   remove: function ()
   {
      return true;
   }
});

multitaskingScript.allow({
   insert: function ()
   {
      return true;
   },
   update: function ()
   {
      return true;
   },
   remove: function ()
   {
      return true;
   }
});

participantBase.allow({
   insert: function ()
   {
      return true;
   },
   update: function ()
   {
      return true;
   },
   remove: function ()
   {
      return true;
   }
});

instrumentLog.allow({
   insert: function ()
   {
      return true;
   },
   update: function ()
   {
      return true;
   },
   remove: function ()
   {
      return true;
   }
});
console.log("Allowed.");
