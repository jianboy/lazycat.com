export function throttle(fn, delay=200){
    let timer=null;
    console.log(fn);
    return function(){
        if(timer) return
        timer= setTimeout(() => {
            fn.apply(this,arguments);
            timer=null
        }, timeout);
    }
}

export function animation(obj, target, fn){

}

export function fileType(){
    return {
        'application/msword': 'word',
        'application/pdf': 'pdf',
        'application/vnd.ms-powerpoint': 'ppt',
        'application/vnd.ms-excel': 'excel',
        'aplication/zip': 'zpi',
    }
}