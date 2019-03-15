function add(a,b) {
    if(a.length>16&&b.length>16){
        return String((Number(a.slice(0,16))+Number(b.slice(0,16))))+String((Number(a.slice(16))+Number(b.slice(16))));
    }else if(a.length>16){
        return String((Number(a.slice(0,16))+Number(b))+String((Number(a.slice(16)))));
    }else if(b.length>16){
        return String((Number(b.slice(0,16))+Number(a))+String((Number(b.slice(16)))));
    }else return String(Number(a)+Number(b));
  // 实现该函数
}

module.exports = add