function getPageId(path) {
  var pageId = path.substring(1);
  if (pageId === "") {
    return "home";
  } else {
    return pageId;
  }
}
/* Export helper functions here */
let coreUtils = {
  getPageId: getPageId
}
export default coreUtils