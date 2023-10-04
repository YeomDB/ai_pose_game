// game.js

// 게임 설정
const gameConfig = {
    canvasWidth: 800, // 게임 캔버스의 너비
    canvasHeight: 400, // 게임 캔버스의 높이
    noteSpeed: 2, // 노트 이동 속도
    noteSpawnInterval: 1000, // 노트 생성 간격 (밀리초)
    noteSize: 30, // 노트 크기
    noteColor: 'red', // 노트 색상
    hitZoneWidth: 100, // 노트가 플레이어의 포즈를 인식하는 영역의 너비
    hitZoneHeight: 100, // 노트가 플레이어의 포즈를 인식하는 영역의 높이
    maxHealth: 100, // 최대 체력
    scorePerNote: 10, // 각 노트를 맞출 때 얻는 점수
    healthDecrementPerMiss: 10, // 노트를 놓칠 때마다 감소하는 체력
};

// 게임 변수
let canvas, ctx, playerScore, health, isGameRunning, notes;

// 초기화 함수
function initGame() {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    playerScore = 0;
    health = gameConfig.maxHealth;
    isGameRunning = false;
    notes = [];

    canvas.width = gameConfig.canvasWidth;
    canvas.height = gameConfig.canvasHeight;

    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('health').innerText = health;

    // 게임 이벤트 핸들러 등록
    document.getElementById('start-button').addEventListener('click', startGame);
    document.getElementById('stop-button').addEventListener('click', stopGame);

    // 게임 루프 시작
    requestAnimationFrame(gameLoop);
}

// 게임 루프
function gameLoop(timestamp) {
    if (isGameRunning) {
        // 게임 업데이트
        updateGame(timestamp);

        // 게임 렌더링
        renderGame();

        // 다음 프레임 요청
        requestAnimationFrame(gameLoop);
    }
}

// 게임 업데이트 함수
function updateGame(timestamp) {
    // 노트 생성 및 이동 로직을 구현하세요
    // 특정 구역을 지나가는 동안 알맞은 포즈를 입력받으면 점수를 증가시키고 노트를 제거하세요
    // 체력이 0 이하로 떨어지면 게임을 종료하세요
}

// 게임 렌더링 함수
function renderGame() {
    // 캔버스를 지우고 게임 요소를 그립니다
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 노트를 그립니다

    // 플레이어 정보를 업데이트합니다
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('health').innerText = health;

    // 게임이 종료되었는지 확인하고 종료 메시지를 표시하세요

}

// 게임 시작 함수
function startGame() {
    if (!isGameRunning) {
        isGameRunning = true;
        initGame(); // 게임 초기화
    }
}

// 게임 종료 함수
function stopGame() {
    isGameRunning = false;
}

// 초기화 함수 호출
initGame();
