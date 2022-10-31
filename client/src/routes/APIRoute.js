export const HOST = `https://api.travels.games`;
export const HOST_CRAWL = `https://travel-api-tour-v2.onrender.com`;
export const getEventAround50KmRoute = `${HOST}/api/v1/event/show/all/location?diameter=50&limit=50&skip=0`; // &longitude=106.673408&latitude=10.757888
export const getSliderRoute = `${HOST}/api/v1/area/show/all`;
export const getToursLastHourRoute = `${HOST_CRAWL}/api/get-tours`;
export const getAllPlaceForNameRoute = `${HOST}/api/v1/tour/show/all/area`;
export const getDetailRoute = `${HOST}/api/v1/tour/show/details`;
export const searchTourRoute = `${HOST_CRAWL}/api/search-tour`;
export const getImageAndDescriptionRoute = `${HOST_CRAWL}/api/get-description-marker`;
export const loginRoute = `${HOST}/api/v1/auth/login`;
export const registerRoute = `${HOST}/api/v1/auth/register`;
export const logoutRoute = `${HOST}/api/v1/auth/logout`;
