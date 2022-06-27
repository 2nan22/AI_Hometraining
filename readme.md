### HAIT (AI Hometraining)

## My Role 
> 데이터 분석 / Client 구성 / 화면 구성
<br>

### 2021.10.30 ~ 2021.12.24
## [빅데이터 융합 개발자 양성 과정] 에서 진행한 최종 프로젝트

<br>

> AI 피트니스 웹 서비스 개발 프로젝트를 통해 웹 기능 개발을 중심으로 개발 프로세스에 대한 이해도를 갖추고자 노력하였습니다.

<br>

### 1. 프로젝트 기획 및 데이터 분석

- 개발 목표
  - 실시간 홈 트레이닝 자세 비교 서비스
  - 운동 결과 분석 및 맞춤형 추천

- 데이터 수집 / 분석
  - 내용
    - 피트니스 자세 이미지(약 200,000만 건)
    - 라벨(json) / 원천(jpeg) 데이터 형식
    - 출처 : AIhub
- 데이터 분석
  - Keypoint 개수가 달라 기존 모델로 데이터 학습이 어려운 문제 직면
  - 새로운 모델을 만들기에는 시간이 역부족

- 이를 해결하기 위해, 높은 FPS 성능과 Human Detection에 적합한 AlphaPose 활용

<br>

### 2. 주요 서비스 및 알고리즘



- 실시간 자세 비교 서비스
  - 전문가 skeleton(정답)은 미리 추출, 유저는 실시간으로 Cam을 통해 추출
  - 정답과 비교 후, 실시간 Chart로 시각화


- Report
  - 운동이 끝난 직후, 주요 부위 및 총 합산 점수를  Report 형식으로 제공


- 비교 알고리즘
  - 관절 / 부위 점수
    - 모델과 사용자와의 각 관절, 부위(머리, 왼팔 등)마다 일치 여부 비교
  - Frame 점수 (1EA)
    - (관절 + 부위 별 점수) * 가중치(w)
  - Pose 점수
    - 운동 시작 t초 후 프레임 vs 동일 시간 대의 모델 사진 n개와 비교 (1:N 관계)

<br>

### 3. 웹 서비스 구현

<br>

![image](https://user-images.githubusercontent.com/75026887/152742664-24d10cc4-d59a-4d89-a520-edda10fdcc32.png)

<br>

- Client 구성
  - Flask Streaming 서버 구축
    - 실시간 Chart, Cam, 가이드 영상 제어
  - Python 기반 카메라 제어 모듈(OpenCV)
  - Skeleton 추출 모델


- Server 구성
  - Django를 활용한 MVT 패턴의 홈페이지 구성
  - MariaDB / Ubuntu


- 화면 구성
  - CSS를 활용한 스크롤 페이지 구현
  - Index에 모든 기능 구현 및 세부 페이지 연결
  - Javascript를 활용한 동적 페이지 구현
  - 운동 화면, 로딩,  Report
