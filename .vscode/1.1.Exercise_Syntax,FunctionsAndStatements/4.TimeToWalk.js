function time(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedInSeconds = speed / 3.6;
    let time = distance / speedInSeconds;
    let rest= Math.floor(distance/500);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - minutes * 60);
    let hours = Math.floor(time / 3600);
    console.log((hours < 10 ? "0" : "") + hours + ":" + (minutes + rest < 10 ? "0" : "") + (minutes + rest) + ":" + (seconds < 10 ? "0" : "") + seconds);
}
time(2564, 0.70, 5.5);