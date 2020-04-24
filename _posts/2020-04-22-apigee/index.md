---
title: GCP apigee
date: 2020-04-22 15:26:00
update: 2020-04-22 15:26:00
tags: 
  - apigee
keywords:
  - apigateway
  - 애피지
  - 아피지
  - APIGee
  - apigee
  - google-apigee
  - google-apigateway
  - google
---

이글은 개인적인 블로그 글이며 기초적인 글은 생략되고 진행될수 있음을 말씀드립니다. 

<br/>

## apigee 란
 apigee(아피지,애피지)란 GCP(Google Cloud Platform)의 API Gateway로 
 GCP와 상관 없는 다른 엔드포인트를 호출해서 사용할수 있다.

## apigee 시작하기

 ### apigee 가입하기 [무료 평가판](https://cloud.google.com/apigee/api-management?hl=ko)
  - 무료평가판은 60일 유지
  - 카드 정보를 입력할 필요 없음
  - 한달 기준 10만건 호출 가능

 ### apigee 프로젝트 만들기
  #### API Proxies
   - URL endpoint 지점 
   - 배포 환경은 test, production 두가지가 존재 한다.
   - 배포 환경별로 URL이 바뀐다.

  #### API Products
   - API Proxy를 묶는 그룹단위 개념 
  
  #### Apps 
   - ClientId랑 ClientSecret이 발급되는곳 
   - Proudct를 Apps에 추가해주면 해당 키,토큰 값들이 이곳에 묶인다.

 ### OAuth 토큰 발급 프록시 만들기 

 ### OAuth 토큰 미들웨어 만들기

 ### Apps를 이용하여 키 발급하기 ( Client_Id, Client_Secret)





