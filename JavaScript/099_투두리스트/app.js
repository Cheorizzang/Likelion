const main = document.querySelector(".artcl_main");
const userTask = main.querySelector("header input");
const addBtn = main.querySelector("header button");
const listTodo = main.querySelector(".list_todo");

// 할일 추가 이벤트
addBtn.addEventListener("click", createListItem);

// 경고 메시지 생성
const message = document.createElement("strong");
message.style.display = "none";
message.classList.add("txt_invalid");
main.appendChild(message);
userTask.addEventListener("input", () => {
  message.style.display = "none";
});

// 다운로드 버튼 생성
const downloadBtn = document.createElement("button");
downloadBtn.classList.add("btn");
downloadBtn.textContent = "리스트 다운로드";
main.appendChild(downloadBtn);
downloadBtn.addEventListener("click", downloadFile);

// 투두를 저장할 배열
const tasks = JSON.parse(localStorage.getItem("tasklist")) || [];

// 초기 화면에서 저장되어 있는 데이터를 가지고 목록 생성
if (tasks.length > 0) {
  tasks.forEach((task) => {
    genItem(task.val, task.checked);
  });
  showDownload();
}

function createListItem() {
  const inpval = userTask.value;

  if (inpval) {
    // 할일을 저장하는 객체 생성
    const tempTask = {
      val: inpval,
      checked: false,
    };

    // 할일 목록에 새로운 할일 저장
    tasks.push(tempTask);

    // 목록 요소 생성
    genItem(inpval, false);

    // 할일 데이터를 localStrorage에 저장
    saveTasks();

    // 다운로드 버튼 노출 함수
    showDownload();
  } else {
    errorMsg("내용을 작성해주세요");
  }
}

// 목록 요소 생성
function getItem(val, complete) {
  const li = document.createElement("li");
  li.textContent = val;
  listTodo.appendChild(li);

  // 인풋 입력값 초기화
  userTask.value = "";

  // 만약 수행한 일이라면
  if (complete) {
    li.classList.add("done");
  }

  li.addEventListener("click", () => {
    li.classList.toggle("done");

    // 할일 데이터의 업데이트 함수
    buildTasks();
  });

  // 삭제 버튼 생성
  const btn = document.createElement("button");
  btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  li.appendChild(btn);

  btn.addEventListener("click", () => {
    li.remove();
    // buildTasks();
    showDownload();
  });
}

// localStorage에 할일 목록을 저장하는 함수
function saveTasks() {
  // localStorage.setItem()을 할 때는 JS 객체를 JSON 데이터로 바꿔서 저장해야함
  // localStorage.getItem()으로 값을 불러올 때에는 JSON.parse()를 이용해 다시 객체로 바꿔줘야 함
  localStorage.setItem("tasklist", JSON.stringify(tasks));
}

// 할일 정보를 업데이트하는 함수. 할일을 클릭했을 때, 혹은 할일을 제거했을 때.
function buildTasks() {
  tasks.length = 0; // 업데이트 하기 전에 기존 데이터를 초기화
  const curList = listTodo.querySelectorAll("li");

  // 할일 정보 목록 재생성
  curList.forEach((el) => {
    const tempTask = {
      val: el.textContent,
      checked: false,
    };

    if (el.classList.contains("done")) {
      tempTask.checked = true;
    }

    tasks.push(tempTask);
  });

  saveTasks();
}

// 다운로드 버튼의 노출을 판단하는 함수
function showDownload() {
  const curList = listTodo.querySelectorAll("li");

  if (curList.length > 0) {
    downloadBtn.style.display = "block";
  } else {
    downloadBtn.style.display = "none";
  }
}

// 경고 메시지 활성화 함수
function errorMsg(msg) {
  message.style.display = "block";
  message.textContent = msg;
  userTask.focus();
}

function downloadFile() {
  let temp = "<나의 할일 목록>\n\n";

  const curList = listTodo.querySelectorAll("li");

  curList.forEach((el) => {
    if (el.classList.contains("done")) {
      temp += "완료 - ";
    }
    temp += `${el.textContent}\n`;
  });

  // 화면이 아닌 메모리에만 존재
  let element = document.createElement("a");

  // Data URIs : 작은 파일을 문서 내에 인라인으로 임베드할 수 있도록 해줌
  element.setAttribute("href", `data:text/plain; charset=utf-8, ${temp}`);

  element.setAttribute("download", "todoList.txt");

  // 클릭 가능한 요소라면 클릭을 시뮬레이션함 -> a 태그를 직접 클릭하지 않고 자바스크립트 코드로 클릭한 것
  element.click();

  // 메모리 상에서 a 태그 제거
  element = null;
}
