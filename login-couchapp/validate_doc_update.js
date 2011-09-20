function(newDoc, oldDoc, userCtx, secObj) {
    // _design/welcome_mat .validate_doc_update

    if(! userCtx.name)
      throw {"unauthorized": "Please log in to change the welcome mat"};
    if(userCtx.roles.indexOf("_admin") === -1)
      throw {"forbidden": "Only the admin can change the welcome mat"};
    log("Allowing welcome mat update by: " + userCtx.name);
}