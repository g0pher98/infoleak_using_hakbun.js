# Information Leak Using hakbun

성적 공개 시 `학번/점수` 이런 포맷으로 주르륵 나열해주시는 교수님들이 계심... 프로불편러이기도 하고 입원중에 심심하기도 해서 간단하게 만들어봄.

학번도 학생을 특정할 수 있다는 점에서 학교 정보와 함께 존재할 시 개인정보에 속함. 때문에 학교에서 학번을 기반으로 하는 여러 서비스들을 이용하면 추가 정보를 획득할 수 있음.

![image](https://user-images.githubusercontent.com/44149738/147842558-ba527996-9952-499b-ab86-f8cd86ce35ef.png)

본 스크립트에서 사용한 교내 서비스는 다음과 같음.
- 쿠티스 기본정보
- 코로나 자가진단

*CORS 정책 때문에 다른 도메인에서는 안되고, 쿠티스 도메인 내에서 스크립트를 실행해야 함.*