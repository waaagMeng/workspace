import notificationDom from './notificationDom';
import './toast.css';
let notification;
function notice(type,content,duration,onClose) {
    if(!notification) notification = notificationDom; //notificationDom是一个组件 要引到app里 才能显示内容
    return notification.addNotice({
        type,content,duration,onClose
    })
}

export default {
    info(content,duration,onClose) {
        return notice('info',content,duration,onClose)
    },
    success(content,duration,onClose) {
        return notice('success',content,duration,onClose)
    },
    warning(content,duration,onClose) {
        return notice('warning',content,duration,onClose)
    },
    loading(content,duration,onClose) {
        return notice('loading',content,duration,onClose)
    },
    error(content,duration,onClose) {
        return notice('error',content,duration,onClose)
    }
}