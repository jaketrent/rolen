require(
  [ "jquery"
  , 'lib/jquery.couch'
  , 'lib/jquery.couchLogin'
  , '/_utils/script/sha1.js'
  ], function($) {
  require.ready(function () {

    $("#login").couchLogin({
      loggedIn : function(userCtx) {
        if(userCtx.roles.indexOf("rolen-read") !== -1 || userCtx.roles.indexOf("_admin") !== -1) {
          window.location = "/rolen/_design/rolen/index.html";
        } else {
          alert("403");
        }
      }
    });

  });
});
