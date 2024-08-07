const leftSvgHtml = "◀";
const rightSvgHtml = "▶";
const skills = {
    aws: "aws.png",
    conf: "conf.png",
    es: "es.png",
    git: "git.png",
    java: "java.jpg",
    jenkins: "jenkins.jpg",
    jira: "jira.png",
    kibara: "kibana.png",
    mariadb: "mariadb.png",
    mongo: "mongo.png",
    mssql: "mssql.jpg",
    mysql: "mysql.jpg",
    php: "php.jpg",
    rabbit: "rabbit.png",
    redis: "redis.png",
    scouter: "scouter.png",
    slack: "slack.png",
    spring: "spring.jpg",
    vue: "vue.png",
    web: "web.png",
};
// 데이터 설정
var careerData = [
    {
        src: "img/netmarble.jpg",
        title: "넷마블네오",
        level: "사원/팀원",
        start: "2021-11-08",
        end: "2024-02-14",
        work: "게임 운영툴, BI 시각화 도구, 기획데이터 DB화 툴 개발. 게임 서버 개발 지원",
        tags: ["java", "c#", "spring",".Net-Core", "jpa", "mysql", "mssql", "vue.js", "redis", "jenkins", "gitlab", "svn", "elasticsearch"],
    },
    {
        src: "img/covision.png",
        title: "코비젼",
        level: "사원/팀원",
        start: "2016-07-27",
        end: "2021-04-10",
        work: "그룹웨어 데이터 배치 시스템 개발, 협업 시스템 개발, 모바일 그룹웨어 개발",
        tags: ["java", "c#", "spring", ".net", "mariadb", "mysql", "mssql", "Mybatis", "jsp", "redis", "jenkins", "svn"],
    }
];

var careerTextData = [
    {
        start: "2021-11",
        end: "2024-02",
        content: [
            "<b>넷마블 네오 </b>입사",
            "나혼자레벨업 게임 번역 관리 툴 개발",
            "제2의나라 게임 운영툴 개발",
            "킹오파 올스타 게임 운영툴 개발",
            "킹오파 아레나 게임 운영툴 런칭 모델 구축 및 개발",
            "기획데이터 관리 툴 개발",
            "BI 데이터 시각화 툴 개발",
            "신규 게임 프로젝트 서버 개발 지원",
            "Jenkins 이용한 CI/CD 구축"
        ],
    },
    {
        start: "2016-07",
        end: "2021-04",
        content: [
            "<b>코비젼 </b>입사",
            "그룹웨어 백엔드 개발 및 버전 관리",
            "모바일 그룹웨어 솔루션 개발",
            "그룹웨어 데이터 연동 배치 시스템 신규 개발 및 고도화",
            "그룹웨어 수주 프로젝트 참여"
        ],
    },
];

var portpolioData = [
    {
        src: ["img/games/n.jpg"],
        title: "나혼자레벨업 게임 번역 관리 툴 개발",
        start: "2023-06",
        end: "2024-02",
        company: "넷마블네오",
        desc: "<b>나혼자레벨업</b> 게임 내에서 사용되는 번역 메세지에 대한 데이터 관리 시스템 백엔드 및 프론트엔드 개발을 담당함.",
        work: ["사용자 관리 기능 구현(Okta SSO 활용)", "ORM 도입 및 ERD & DB Table 설계", "BE API 및 FE 구현", "기본 기능 구현(캐싱, 트랜잭션, 예외 처리 등)", "CI/CD 프로세스 설계 및 구축", "Elasticsearch 적용"],
        tag: ["Java", "Spring", "JPA", "Mysql", "Vue.js", "Jenkins", "GitLab", "ElasticSearch"],
    },
    {
        src: ["img/noimage.jpg"],
        title: "BI 시각화 대시보드 툴 개발",
        start: "2023-08",
        end: "2023-12",
        company: "넷마블네오",
        desc: "게임 BI 지표들을 차트로 시각화하고 대시보드를 구성하는 툴로, <b>Tableau나, Kibana, Garafana</b>가 참조되었고 <b>Apexchart</b>를 사용하여 다양한 차트를 구현하고, 개인화된 대시보드 및 여러 데이터를 연동할 수 있도록 개발됨.",
        work: ["BE API 및 FE 구현", "ERD & DB Table 설계", "권한 프로세스 설계 및 구현"],
        tag: ["Java", "Spring", "JPA", "Mysql", "Vue.js","ApexChart"],
    },
    {
        src: ["img/games/kf.jpg"],
        title: "킹오파 아레나 운영툴 개발",
        start: "2022-08",
        end: "2024-02",
        company: "넷마블네오",
        desc: "<b>킹오브파이터 아레나</b> 운영툴의 코어 설계 및 개발부터 런칭까지의 컨텐츠 개발을 담당함.",
        work: ["BE API 및 FE 구현", "코어 기능 설계 및 구현", "비즈니스 로직 구현", "CI/CD 프로세스 설계 및 구축", "컨벤션 작성을 통한 스타일 통합"],
        tag: ["Java", "Spring", "JPA","Mssql", "Vue.js", "Redis", "Jenkins", "GitLab"],
    },
    {
        src: ["img/games/j.jpg"],
        title: "제2의나라 게임 운영툴",
        start: "2021-11",
        end: "2024-02",
        company: "넷마블네오",
        desc: "<b>제2의 나라</b> 운영툴의 국내 및 글로벌 환경의 백엔드 및 프론트엔드 개발을 담당함.",
        work: ["BE API 및 FE 구현", "DB 설계", "게임 서버 API 연동", "CI/CD"],
        tag: ["Java", "Spring",  "Mybatis", "Mysql", "Vue.js", "Redis", "Jenkins"],
    },
    {
        src: ["img/games/k.jpg"],
        title: "킹오파 올스타 운영툴",
        start: "2021-11",
        end: "2024-02",
        company: "넷마블네오",
        desc: "<b>킹오브파이터</b> 운영툴의 국내 및 글로벌 환경의 백엔드 및 프론트엔드 개발을 담당함.",
        work: ["BE API 및 FE 구현", "DB 스키마 및 구조 설계", "게임 서버 API 연동"],
        tag: ["Java", "Spring", "Mybatis", "Mssql", "JSP", "Redis", "Jenkins", "SVN"],
    },

    // 코비젼
    {
        src: ["img/covision/1.jpg"],
        title: "그룹웨어 백엔드 개발",
        start: "2019-03",
        end: "2021-04",
        company: "코비젼",
        desc: "제품팀에 소속되어 그룹웨어 제품의 백엔드 개발 및 기능 개선 안정화를 진행함.",
        work: ["비즈니스 로직 개선 및 안정화", "솔루션 버전 업그레이드 프로젝트 참여", "dll 웹서비스화 및 Java 전환 작업 참여"],
        tag: ["C#", "Java", "Spring", "Mysql", "Mssql", "Redis","Jenkins", "SVN"],
    },
    {
        src: ["img/covision/mobile.png"],
        title: "모바일 그룹웨어 솔루션 개발",
        start: "2019-03",
        end: "2020-03",
        company: "코비젼",
        desc: "모바일 버전의 그룹웨어 솔루션 신규 프로젝트에 참여함.",
        work: ["공통 기능 설계 및 구현", "모바일 화면 설계 및 콘텐츠 개발 참여", "DB 스키마 정의 및 프로시저 구현", "반응형 웹페이지 구현"],
        tag: ["Java", "Spring", "JSP", "Mssql", "Redis", "SVN"],
    },
    {
        src: ["img/noimage.jpg"],
        title: "그룹웨어 데이터 연동 배치 시스템 신규 개발 및 고도화",
        start: "2016-07",
        end: "2018-08",
        company: "코비젼",
        desc: "그룹웨어의 데이터 연동 배치 시스템을 개발하고 고도화함.",
        work: ["배치 시스템 개발", "로그 관리 및 모니터링 페이지 개발", "dll 웹서비스화"],
        tag: ["C#", ".Net", "Mssql", "Mysql", "Active Directory", "Office 365", "SVN"],
    },
    {
        src: ["img/noimage.jpg"],
        title: "그룹웨어 프로젝트 참여",
        start: "2016-07",
        end: "2021-04",
        company: "코비젼",
        desc: "그룹웨어 구축 프로젝트 초기 협의 ~ 오픈 및 안정화 프로세스까지 메인으로 참여하며 협업 경험을 쌓았음.",
        work: [
            "KG 그룹 통합 그룹웨어 시스템 구축 프로젝트(2020~2021) 참여",
            "KT&G 그룹 전자결재 시스템 구축 프로젝트(2020) 참여",
            "대성 그룹웨어 시스템 구축 프로젝트 참여(2019)",
            "대림그룹 통합 그룹웨어 구축 프로젝트(2018 ~ 2019) 참여",
            "태광그룹 통합 그룹웨어 구축 프로젝트(2017 ~ 2018) 참여 등"
        ],
        tag: ["C#", "Java", "Spring", ".Net"],
    },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function upperFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCurrentDateText(noDay) {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    if (noDay === undefined || !noDay) {
        const day = String(currentDate.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    } else return `${year}-${month}`;
}

// 템플릿 생성 및 데이터 채워넣기 함수
function createTemplate(data, idx) {
    const template = document.createElement("div");
    template.className = "container";
    addXButton(template, () => {
        careerData.splice(idx, 1);
        const containers = document.getElementsByClassName("container");
        while (containers.length > 0) {
            containers[0].parentNode.removeChild(containers[0]);
        }

        const areas = document.getElementsByClassName("area");
        while (areas.length > 0) {
            areas[0].parentNode.removeChild(areas[0]);
        }

        renderData(careerData);
        createGraph();
    });

    const leftSpace = document.createElement("div");
    leftSpace.className = "left-space";

    const image = document.createElement("img");
    image.src = data.src;

    leftSpace.appendChild(image);
    template.appendChild(leftSpace);

    const rightSpaces = document.createElement("div");
    rightSpaces.className = "right-spaces";

    const rightSpace1 = document.createElement("div");
    rightSpace1.className = "right-space";

    const companyTitle = document.createElement("p");
    companyTitle.className = "company-title";
    companyTitle.textContent = data.title;

    const companyLevel = document.createElement("p");
    companyLevel.className = "company-level";
    companyLevel.textContent = data.level;

    const companyDate = document.createElement("p");
    companyDate.className = "company-date";
    companyDate.textContent = `${formatDate(data.start)} ~ ${formatDate(data.end)} (${calculateYearMonth(data.start, data.end)})`;

    rightSpace1.appendChild(companyTitle);
    rightSpace1.appendChild(companyLevel);
    rightSpace1.appendChild(companyDate);
    rightSpaces.appendChild(rightSpace1);

    const rightSpace2 = document.createElement("div");
    rightSpace2.className = "right-space";

    const companyWork = document.createElement("p");
    companyWork.className = "company-work";
    companyWork.textContent = data.work;

    const companyTag = document.createElement("p");
    companyTag.className = "company-tag";
    /*
        let html = "";
        data.tags.forEach(tag => {
            if (skills[tag] === undefined) return;
            html += "<img class='skill' src='img/skill/" + skills[tag] + "'/>";
        });*/
    companyTag.textContent = data.tags.map((tag) => "#" + upperFirst(tag)).join(" ");

    rightSpace2.appendChild(companyWork);
    rightSpace2.appendChild(companyTag);
    rightSpaces.appendChild(rightSpace2);

    template.appendChild(rightSpaces);

    return template;
}

// 데이터를 기반으로 템플릿 생성하여 화면에 추가하기
function renderData(data) {
    const contentElement = document.getElementsByClassName("section-career")[0];

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const template = createTemplate(item, i);
        contentElement.appendChild(template);
    }
}

// 템플릿 생성 및 데이터 채워넣기 함수
function createCareerTemplate(data, idx) {
    const template = document.createElement("div");
    template.className = "career-period";

    addXButton(template, () => {
        careerTextData.splice(idx, 1);
        const containers = document.getElementsByClassName("career-period");
        while (containers.length > 0) {
            containers[0].parentNode.removeChild(containers[0]);
        }

        renderCareerData(careerTextData);
    });

    const date = document.createElement("p");
    date.className = "career-period-date";
    date.textContent = `📅 ${formatDate(data.start)} ~ ${formatDate(data.end)}`;

    const list = document.createElement("ul");
    list.className = "career-period-list";

    data.content.forEach((content) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = "→ " + content;
        list.appendChild(listItem);
    });

    template.appendChild(date);
    template.appendChild(list);

    return template;
}

// 데이터를 기반으로 템플릿 생성하여 화면에 추가하기
function renderCareerData(data) {
    const contentElement = document.getElementsByClassName("career-periods")[0];

    data.forEach((item, idx) => {
        const template = createCareerTemplate(item, idx);
        contentElement.appendChild(template);
    });
}

// 템플릿 생성 및 데이터 채워넣기 함수
function createPortpolioTemplate(data, idx) {
    const template = document.createElement("div");
    template.className = "portpolio-wrap";

    addXButton(template, () => {
        portpolioData.splice(idx, 1);

        const ports = document.getElementsByClassName("portpolio-wrap");
        while (ports.length > 0) {
            ports[0].parentNode.removeChild(ports[0]);
        }

        renderPortpolioData(portpolioData);
    });

    const sliderContainer = document.createElement("div");
    sliderContainer.className = "slider-container";
    sliderContainer.classList.add(`slider-container-${data.index}`);

    const slider = document.createElement("div");
    slider.className = "slider";
    slider.classList.add(`slider-${data.index}`);

    data.src.forEach((src) => {
        const slide = document.createElement("div");
        slide.className = "slide";

        const image = document.createElement("img");
        image.src = src;
        image.alt = "Slide";

        if (data.isHorizontal) image.className = "horizontal";

        slide.appendChild(image);
        slider.appendChild(slide);
    });

    if (data.src.length > 1) {
        const prevButton = document.createElement("div");
        prevButton.className = "prev-button";
        prevButton.classList.add(`prev-button-${data.index}`);
        prevButton.innerHTML = leftSvgHtml;

        const nextButton = document.createElement("div");
        nextButton.className = "next-button";
        nextButton.classList.add(`next-button-${data.index}`);
        nextButton.innerHTML = rightSvgHtml;

        sliderContainer.appendChild(prevButton);
        sliderContainer.appendChild(nextButton);
    }

    sliderContainer.appendChild(slider);

    const projectInfo = document.createElement("div");
    projectInfo.className = "w50 pl10";

    const titleWrap = document.createElement("div");
    titleWrap.className = "project-title-wrap";

    const projectTitle = document.createElement("p");
    projectTitle.className = "project-title";
    projectTitle.textContent = data.title;

    const projectDate = document.createElement("p");
    projectDate.className = "project-date";
    projectDate.textContent = `${formatDate(data.start)} ~ ${formatDate(data.end)}`;

    const projectName = document.createElement("p");
    projectName.className = "project-name";
    projectName.textContent = data.company;

    titleWrap.appendChild(projectTitle);
    titleWrap.appendChild(projectDate);
    titleWrap.appendChild(projectName);

    const projectDesc = document.createElement("div");
    projectDesc.className = "project-desc";
    projectDesc.innerHTML = data.desc;

    const workList = document.createElement("ul");
    workList.className = "bootstrap-list";

    data.work.forEach((work) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${work}`;
        workList.appendChild(listItem);
    });

    const projectTag = document.createElement("p");
    projectTag.className = "project-tag";
    projectTag.textContent = `#${data.tag.join(" #")}`;

    projectInfo.appendChild(titleWrap);
    projectInfo.appendChild(projectDesc);
    projectInfo.appendChild(workList);
    projectInfo.appendChild(projectTag);

    template.appendChild(sliderContainer);
    template.appendChild(projectInfo);

    return template;
}

// 데이터를 기반으로 템플릿 생성하여 화면에 추가하기
function renderPortpolioData(data) {
    const contentElement = document.getElementsByClassName("portpolio-top-wrap")[0];

    data.forEach((item, index) => {
        item.index = index + 1; // 인덱스 값 설정
        const template = createPortpolioTemplate(item, index);
        contentElement.appendChild(template);
    });
}

function formatDate(dateString) {
    if (dateString.length === 7) {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(5, 7);
        return `${year}년 ${month}월`;
    }

    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}년 ${month}월 ${day}일`;
}

function getFutureDate() {
    var currentDate = new Date();
    var futureDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());

    var year = futureDate.getFullYear();
    var month = (futureDate.getMonth() + 1).toString().padStart(2, "0");
    var day = futureDate.getDate().toString().padStart(2, "0");

    var futureDateText = year + "-" + month + "-" + day;

    return futureDateText;
}

function createGraph() {
    const graphElement = document.getElementById("graph");
    graphElement.innerHTML = "";

    const lineStart = new Date("2016-01-01");
    const lineEnd = new Date(getFutureDate());

    const lineLength = lineEnd.getTime() - lineStart.getTime();

    const lineLengthByYear = lineEnd.getFullYear() - lineStart.getFullYear() + 1;
    const lineLengthByDays = lineLength / (1000 * 60 * 60 * 24); // 일 수 간격 계산
    const tickWidth = 100 / (lineLengthByDays / 365); // 각 눈금의 너비 (가로로 등간격 배치)

    // 가중치를 적용할 최대 높이 설정
    const maxWeightedHeight = 200;

    // 기간이 긴 영역에 가중치를 적용하여 높이 계산
    const weightedData = careerData.map((item) => {
        const startDate = new Date(item.start);
        const endDate = new Date(item.end);

        const duration = endDate.getTime() - startDate.getTime();
        const weight = Math.ceil((duration / lineLength) * maxWeightedHeight);

        return { ...item, weight };
    });

    // 가중치를 기준으로 오름차순 정렬
    weightedData.sort((a, b) => a.weight - b.weight);

    let currentHeight = maxWeightedHeight;

    // 회사별로 색상 지정을 위해 graph.css에서 색상을 추가해줘야 한다.
    for (const item of weightedData) {
        const areaElement = document.createElement("div");
        areaElement.classList.add("area");

        const areaElementNameTag = document.createElement("p");
        areaElementNameTag.textContent = item.title;

        areaElement.appendChild(areaElementNameTag);

        const startDate = new Date(item.start);
        const endDate = new Date(item.end);
        console.log(startDate, endDate);

        const startPercentage = ((startDate.getTime() - lineStart.getTime()) / lineLength) * 100;
        const endPercentage = ((endDate.getTime() - lineStart.getTime()) / lineLength) * 100;

        const areaWidth = endPercentage - startPercentage;
        const areaHeight = Math.min(item.weight, currentHeight); // 현재 높이와 비교하여 최대 높이 제한

        areaElement.style.bottom = "0"; // 맨 아래에서 시작하도록 설정
        areaElement.style.left = `${startPercentage}%`;
        areaElement.style.width = `${areaWidth}%`;
        areaElement.style.height = `${areaHeight}px`; // 가중치에 따른 높이 설정

        graphElement.appendChild(areaElement);

        currentHeight -= areaHeight;
    }

    for (let i = 0; i < lineLengthByYear; i++) {
        const year = lineStart.getFullYear() + i;

        // 수직 눈금 생성
        const tickDiv = document.createElement("div");
        tickDiv.classList.add("tick");
        tickDiv.style.left = `${tickWidth * i}%`;
        graphElement.appendChild(tickDiv);

        // 연도 표시 생성
        const yearDiv = document.createElement("div");
        yearDiv.classList.add("year");
        yearDiv.innerText = year.toString();
        yearDiv.style.left = `${tickWidth * i}%`;
        graphElement.appendChild(yearDiv);
    }
}

// 그래프 생성 함수 호출
createGraph();

renderData(careerData);
renderCareerData(careerTextData);
renderPortpolioData(portpolioData);

function addXButton(element, func) {
    const xButton = document.createElement("div");
    xButton.classList.add("x-button");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");

    const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", "18");
    line1.setAttribute("y1", "6");
    line1.setAttribute("x2", "6");
    line1.setAttribute("y2", "18");

    const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", "6");
    line2.setAttribute("y1", "6");
    line2.setAttribute("x2", "18");
    line2.setAttribute("y2", "18");

    svg.appendChild(line1);
    svg.appendChild(line2);

    xButton.appendChild(svg);
    xButton.addEventListener("click", func);
    element.appendChild(xButton);
}
function calculateYearMonth(date1, date2) {
    const [year1, month1] = date1.split("-").map(Number);
    const [year2, month2] = date2.split("-").map(Number);

    const yearDiff = year2 - year1;
    const monthDiff = month2 - month1;

    let yearString = "";
    let monthString = "";

    if (yearDiff > 0) {
        yearString = `${yearDiff}년`;
    }

    if (monthDiff >= 0) {
        monthString = `${monthDiff}개월`;
    } else {
        yearString = `${yearDiff - 1}년`;
        monthString = `${12 + monthDiff}개월`;
    }

    return `${yearString} ${monthString}`;
}
