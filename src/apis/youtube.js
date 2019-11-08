const KEY = "AIzaSyCGoa3762RerY0ws9bsDikIBTP6nt_7c8k";

const youtubeSearch = async searchTerm => {
  const params = {
    part: "snippet",
    type: "video",
    q: searchTerm,
    order: "viewCount",
    maxResults: 12,
    key: KEY
  };
  const urlParams = new URLSearchParams(params).toString();
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${urlParams}`
    );
    const searchData = await response.json();
    return searchData.items;
  } catch (error) {
    console.log(error);
  }
};

export default youtubeSearch;
