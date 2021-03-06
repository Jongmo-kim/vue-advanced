import axios from 'axios';

// HTTP Request & Reponse와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};


// 2. API 함수들을 정리
function fetchNewsList(){
    // return axios.get(config.baseUrl +'news/1.json'); //js
    return axios.get(`${config.baseUrl}news/1.json`); //es6
}

function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskItem(askItemId){
    return axios.get(`${config.baseUrl}item/${askItemId}.json`);
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchAskItem,
}