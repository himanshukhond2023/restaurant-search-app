import axios from "axios";

// export default axios.create({
//     baseURL: "https://dummyjson.com",
//     // headers: {
//     //     Authorization: "Bearer q23MOfOSpFLWfv-KoNnq39htx5cRUSRQz5ydXLHKMKUwZOzGBfjqol0eGLHl5FhMvLakcF1Dux0N2Z1_Epg7DbhcMOXRNiIRsbqEx56QgtW0DPHWZax97vxhXkCZZHYx",
//     // },
// });

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer pb8PucheWDAxQ0S2_jtL4idDOlCk5K1HypSvLC-MlrUr7_Od8QZQDOb68mENJ69J2rpeQmkfr2k6wS2WPetb-vFGkiah_RVih5FGHnr7n02Yt_5O1FQJmIjGdGqZZHYx",
    },
});
