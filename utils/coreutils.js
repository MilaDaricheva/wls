function getPageId(path) {
  var pageId = path.substring(1);
  if (pageId === "") {
    return "home";
  } else {
    return pageId;
  }
}
/*
function coreUtils() {
  let utilFunctions = {
    getPageId: getPageId
  }
  return utilFunctions
}
*/
let coreUtils = {
  getPageId: getPageId
}
export default coreUtils