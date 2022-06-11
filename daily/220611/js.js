(() => {
    const countTime = (duration) => {
        let minutes = Math.floor((duration / 60) % 60);
        let seconds = Math.floor(duration % 60);

        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${minutes}:${seconds}` ;
    }

})();