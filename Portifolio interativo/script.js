const player = document.getElementById("player");
const speed = 5;
let playerX = 400;
let playerY = 400;
let isCtrlPressed = false;

function movePlayer(event) {
  if (event.key === "Control") {
    isCtrlPressed = true;
    return;
  }

  if (
    (event.key === "ArrowUp" || event.key === "w") &&
    playerY > 0
  ) {
    playerY -= isCtrlPressed ? speed * 2 : speed;
  } else if (
    (event.key === "ArrowDown" || event.key === "s") &&
    playerY < 790
  ) {
    playerY += isCtrlPressed ? speed * 2 : speed;
  } else if (
    (event.key === "ArrowLeft" || event.key === "a") &&
    playerX > 0
  ) {
    playerX -= isCtrlPressed ? speed * 2 : speed;
  } else if (
    (event.key === "ArrowRight" || event.key === "d") &&
    playerX < 790
  ) {
    playerX += isCtrlPressed ? speed * 2 : speed;
  }

  player.style.left = playerX + "px";
  player.style.top = playerY + "px";
}

function resetCtrlStatus(event) {
  if (event.key === "Control") {
    isCtrlPressed = false;
  }
}

// Impede o comportamento padrão das teclas de seta, W, A, S, D e Ctrl (navegação na página)
window.addEventListener("keydown", function (e) {
  if (
    ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d", "Control"].indexOf(
      e.key
    ) > -1
  ) {
    e.preventDefault();
  }
});

// Adiciona os eventos de movimento ao jogador e de reset do status de Ctrl
document.addEventListener("keydown", movePlayer);
document.addEventListener("keyup", resetCtrlStatus);