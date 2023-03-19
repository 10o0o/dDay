# dDay
### D-Day 어플 클론코딩

#### 준비물 : Docker, Docker Compose

0. env 파일
    - client: 
        ```
        // app/client/.env.development

        VITE_PORT=7100
        ```

1. Dockerfile build
    - client: docker build -t d_day_client ./app/client/.
    - server: docker build -t d_day_server ./app/server/.

2. Packages 설치
    - client: docker-compose -f docker-compose-init-client.yml up

3. 실행
    - docker-compose up
    - localhost:7100 에서 확인 가능