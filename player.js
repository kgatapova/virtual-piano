function changeBackgroundColor(elementId, color) {
    document.getElementById(elementId).style.backgroundColor = color;
}

function playKey(keyDownEvent) {
    let audio = document.createElement("AUDIO");
    switch (keyDownEvent.key) {
        case 'a':
            audio.src = "./sounds/A.mp3";
            audio.play();
            changeBackgroundColor("aKey", "fuchsia");
            break;
        case 's':
            audio.src = "./sounds/S.mp3";
            audio.play();
            changeBackgroundColor("sKey", "fuchsia");
            break;
        case 'd':
            audio.src = "./sounds/D.mp3";
            audio.play();
            changeBackgroundColor("dKey", "fuchsia");
            break;
        case 'f':
            audio.src = "./sounds/F.mp3";
            audio.play();
            changeBackgroundColor("fKey", "fuchsia");
            break;
        case 'g':
            audio.src = "./sounds/G.mp3";
            audio.play();
            changeBackgroundColor("gKey", "fuchsia");
            break;
        case 'h':
            audio.src = "./sounds/H.mp3";
            audio.play();
            changeBackgroundColor("hKey", "fuchsia");
            break;
        case 'j':
            audio.src = "./sounds/J.mp3";
            audio.play();
            changeBackgroundColor("jKey", "fuchsia");
            break;
        case 'w':
            audio.src = "./sounds/W.mp3";
            audio.play();
            changeBackgroundColor("wKey", "fuchsia");
            break;
        case 'e':
            audio.src = "./sounds/E.mp3";
            audio.play();
            changeBackgroundColor("eKey", "fuchsia");
            break;
        case 't':
            audio.src = "./sounds/T.mp3";
            audio.play();
            changeBackgroundColor("tKey", "fuchsia");
            break;
        case 'y':
            audio.src = "./sounds/Y.mp3";
            audio.play();
            changeBackgroundColor("yKey", "fuchsia");
            break;
        case 'u':
            audio.src = "./sounds/U.mp3";
            audio.play();
            changeBackgroundColor("uKey", "fuchsia");
            break;
        default:
            console.log("wrong key");
            break;
    }
}

function releaseKey(keyUpEvent) {
    switch (keyUpEvent.key) {
        case 'a':
            changeBackgroundColor("aKey", "white");
            break;
        case 's':
            changeBackgroundColor("sKey", "white");
            break;
        case 'd':
            changeBackgroundColor("dKey", "white");
            break;
        case 'f':
            changeBackgroundColor("fKey", "white");
            break;
        case 'g':
            changeBackgroundColor("gKey", "white");
            break;
        case 'h':
            changeBackgroundColor("hKey", "white");
            break;
        case 'j':
            changeBackgroundColor("jKey", "white");
            break;
        case 'w':
            changeBackgroundColor("wKey", "black");
            break;
        case 'e':
            changeBackgroundColor("eKey", "black");
            break;
        case 't':
            changeBackgroundColor("tKey", "black");
            break;
        case 'y':
            changeBackgroundColor("yKey", "black");
            break;
        case 'u':
            changeBackgroundColor("uKey", "black");
            break;
        default:
            break;
    }
}

document.addEventListener("keydown", playKey);
document.addEventListener("keyup", releaseKey);