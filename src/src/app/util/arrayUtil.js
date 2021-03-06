Object.defineProperty(exports, "__esModule", { value: true });
const is = require("is");
class ArrayUtil {
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ArrayUtil();
        }
        return this.instance;
    }
    where(arr, obj) {
        let keys = Object.keys(obj);
        let ret = [];
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let find = keys.every((t) => {
                return item[t] == obj[t];
            });
            if (find) {
                ret.push(item);
            }
        }
        return ret;
    }
    firstOrDefault(arr, obj = null) {
        if (obj) {
            let items = this.where(arr, obj);
            if (items.length > 0) {
                return items[0];
            }
            return null;
        }
        else {
            return arr[0];
        }
    }
    select(arr, selector) {
        let ret = [];
        let fun = selector;
        for (let i = arr.length - 1; i >= 0; i--) {
            if (fun(arr[i])) {
                ret.push(arr[i]);
            }
        }
        return ret;
    }
    joinArray(arr, joinArr, selector) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            let arrItem = joinArr[i];
            let newObj = Object.assign(item, selector(arrItem));
            result.push(newObj);
        }
        return result;
    }
    sum(arr, selector) {
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            result += selector(arr[i]);
        }
        return result;
    }
    pushArray(orgArr, arr, predicate) {
        if (!arr || arr.length <= 0) {
            return orgArr;
        }
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (!!predicate && predicate(item)) {
                orgArr.push(item);
            }
            else {
                orgArr.push(item);
            }
        }
        return orgArr;
    }
    dictionaryFirstOrDefault(dic, predicate) {
        if (!is.function(predicate)) {
            return null;
        }
        for (let i in dic) {
            let item = dic[i];
            if (predicate(item)) {
                return item;
            }
        }
        return null;
    }
    dictionaryWhere(dic, predicate) {
        let result = [];
        if (!is.function(predicate)) {
            return [];
        }
        for (let i in dic) {
            let item = dic[i];
            if (predicate(item)) {
                result.push(item);
            }
        }
        return result;
    }
    dictionaryToArray(dic, predicate) {
        let result = [];
        if (!!predicate) {
            if (!is.function(predicate)) {
                return [];
            }
            for (let i in dic) {
                let item = dic[i];
                if (predicate(item)) {
                    result.push(item);
                }
            }
        }
        else {
            for (let i in dic) {
                let item = dic[i];
                result.push(item);
            }
        }
        return result;
    }
}
exports.ArrayUtil = ArrayUtil;
