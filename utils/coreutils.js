function getPageId(path) {
  var pageId = path.substring(1);
  if (pageId === "") {
    return "home";
  } else {
    return pageId;
  }
}

export default getPageId