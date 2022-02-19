// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

const os = require("os");
const path = require("path");
const fs = require("fs");

const folder = process.argv[2];
const workingDir = path.join(os.homedir(), "Picture", folder);

if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Picture");
  return;
}

// 2. 그 폴더안에 비디오, 캡쳐, 듀플리케이트 폴더를 만든다.
const videoDir = path.join(workingDir, "video");
const capturedDir = path.join(workingDir, "captured");
const duplicatedDir = path.join(workingDir, "duplicated");

//console.log(videoDir);
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3.  폴더안에 있는 파일들을 다 돌면서 해당 하는 파일을 분리해 넣는다.
fs.promises
  .readdir(workingDir) //
  .then(processFiles);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, capturedDir);
    } else if (isDuplicated(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const boolean = file.split(".")[1] === "mp4" || file.split(".")[1] === "mov";
  console.log(path.join(videoDir, file));
  return boolean;
}

function isCapturedFile(file) {
  const boolean = file.split(".")[1] === "png" || file.split(".")[1] === "aae";
  return boolean;
}

function isDuplicated(files, file) {
  if (!file.startsWith("IMG_") || file.startsWith("IMG_E")) {
    return false;
  }
  const edited = `IMG_E${file.split("_")[1]}`;
  const found = files.find((f) => f.includes(edited));
  return found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${targetDir}`);
  const oldPath = path.join(workingDir, file);
  console.log("old", oldPath);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath) //
    .catch(console.error);
}
