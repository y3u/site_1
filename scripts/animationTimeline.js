class AnimationTimeline {
    constructor() {
        this.keyframes = [];
        this.currentTime = 0;
    }

    addKeyframe(time, properties) {
        this.keyframes.push({ time, properties });
        this.keyframes.sort((a, b) => a.time - b.time);
    }

    updateAnimation(object, time) {
        this.currentTime = time;
        const prevKeyframe = this.keyframes.find(kf => kf.time <= time) || this.keyframes[0];
        const nextKeyframe = this.keyframes.find(kf => kf.time > time) || this.keyframes[this.keyframes.length - 1];

        if (prevKeyframe && nextKeyframe) {
            const t = (time - prevKeyframe.time) / (nextKeyframe.time - prevKeyframe.time);
            Object.keys(prevKeyframe.properties).forEach(prop => {
                object[prop] = THREE.MathUtils.lerp(prevKeyframe.properties[prop], nextKeyframe.properties[prop], t);
            });
        }
    }
}

export default AnimationTimeline;
