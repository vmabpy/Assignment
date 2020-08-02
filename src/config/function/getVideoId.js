const GetVideoId = (url) => {
  var str = new URL(url);
  var path = str.pathname;
  return path.substr(7, path.length - 1);
};
export default GetVideoId;
