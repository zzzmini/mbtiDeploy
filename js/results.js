import { results , mbtis } from './data.js'

//localhost:5500/results.html?str=infj
// 1. str=infj 중에 infj 를 추출
// 2. infj 가 data.js mbtis 값 중 몇번째 값인지 확인
//    결과 infj = 2
// 3. 결과값과 일치하는 results 배열에서
//     2번째 배열값을 가져와서 출력

// ?str=infj === 쿼리스트링
const resultMBTI = new 
  URLSearchParams(location.search).get("str");
console.log('resultMBTI = ' + resultMBTI);

console.log(resultMBTI + "의 MBTI 값은 : " + 
    mbtis[resultMBTI])

// MBTI 값을 색인값으로 전환처리
let findIndex = mbtis[resultMBTI];

// 색인값으로 results에서 찾기
let find = results[findIndex];

const title = find.title;
console.log(title);

// 각 위치에 있는 태그 위치 가져오기
const titleEl = document.querySelector('.page-title');
titleEl.innerHTML = title;

// 캐릭터 종류
const characterEl = document.querySelector('.character');
// src="./images/result_character1.png"
// data.js
// character: '/images/result_character1.png'
const resultImgUrl = find.character;
console.log(resultImgUrl);            
characterEl.src = resultImgUrl;

// 결과 4개 얻어오기
const boxElement = document
  .querySelectorAll('.box');
console.log(boxElement[3]);

// boxElement 배열을 순회하면서... 값을 넣어주면 된다.
boxElement.forEach((x, index) => {
  console.log(find.results[index]);
  x.innerHTML = find.results[index];
})

// 직업 상자 결과 연결
const jobs = document.querySelectorAll('.job');
jobs.forEach((x, i) => {
  x.innerHTML = find.jobs[i];
});
// 결과에 따른 lectureImg 연결
const lectImg = document.querySelector('.lecture img');
lectImg.src = find.lectureImg;

// 결과에 따른 lectureUrl 연결
const lectUrl = document.querySelector('.lecture');
lectUrl.href = find.lectureUrl;