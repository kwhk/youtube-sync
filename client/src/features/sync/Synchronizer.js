export default class Synchronizer {
        constructor(seekTo, player, timer, offset=0.2) {
        // max time allowed from curr time to actual time before resyncing in seconds
        this.offset = offset;
        this.timer = timer;
        this.seekTo = seekTo;
        this.player = player;
        this.interval = null;
    }

    start() {
        let self = this;
        let a = function() {
            let elapsed = self.timer.elapsed() / 1000;
            let currTime = self.player.getCurrentTime();
            let diff = Math.abs(elapsed - currTime);
            // console.log(`timer: ${elapsed.toFixed(2)}\nvideo: ${currTime.toFixed(2)}\ndiff:${diff.toFixed(2)}`)
            if (diff > self.offset) {
                console.log('NOT IN SYNC')
                self.seekTo(self.timer.elapsed());
            }
        }

        if (this.interval == null) {
            this.interval = setInterval(a, 1000)
        }
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
}