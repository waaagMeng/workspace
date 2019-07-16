// 静态类型
// interface
// 1.写Drawer类
// 2. 构造函数的参数进行约束
// 3. 对这个类实现两个方法：enter,leave(打开，关上)
interface IDrawerConfig {  //typescript类型声明 接口定义
    enterDOM: HTMLElement | null;
    leaveDOM: HTMLElement | null;
    duration?: number;  //?:表示不是必须要传的参数
    ease?: string;
}
class Drawer implements IDrawerConfig {
    //typescript要先声明类上的属性再用 在constructor外面
    enterDOM: HTMLElement
    leaveDOM: HTMLElement
    _duration: number = 2
    _ease: string = "ease"  //默认值 私有的
    enterTransition: string
    leaveTransition: string
    constructor(options) {
        this.enterDOM = options.enterDOM;
        this.leaveDOM = options.leaveDOM;
        this.initDOMStyle();
        this.updateTransition();
    }
    initDOMStyle () {
        if (this.enterDOM && this.leaveDOM) {
            this.enterDOM.setAttribute('style',`transition:left ${this.duration}s ${this.ease};`);
            this.leaveDOM.setAttribute('style',`transition:margin-left ${this.duration}s ${this.ease};`)
        }
    }
    updateTransition () {
        this.enterTransition = `left: 0px transition: left ${this.duration}s ${this.ease};`;
        this.leaveTransition = `transition: margin-left ${this.duration}s ${this.ease}; margin-left:200px;`
    }
    get duration() {
        return this._duration;
    }
    set duration(duration: number) {
        this._duration = duration
    }
    get ease() {
        return this._ease;
    }
    set ease(ease: string) {
        this._ease = ease;
    }
    enter() {
        this.enterDOM.setAttribute('style',this.enterTransition);
        this.leaveDOM.setAttribute('style',this.leaveTransition);
    }
    leave() {
        this.initDOMStyle();
    }
}