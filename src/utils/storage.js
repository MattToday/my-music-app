import Taro from "@tarojs/taro"

/**
 * 存储缓存
 * @param {*} key
 * @param {*} data
 * @param {*} opts  type:存储类型 session|local 默认local(H5环境生效); period:时效 number, 默认值为null, 单位毫秒（ms）
 */
const ConstPrefix = 'jz_storage_'

const setStorage = (key, data, opts = {}) => {
	if (!key) return console.log('参数不能为空'), !1;
	try {
		let config = {
			dataType: typeof data,
			data: data,
			datetime: new Date().getTime(),
		};
		if (opts.period > 0) Object.assign(config, { period: opts.period })
		let storageStr = JSON.stringify(config);
		Taro.setStorageSync(key, storageStr)
		return !0;
	} catch (error) {
		console.warn(error);
		return !1;
	}
}

/**
 * 获取缓存
 * @param {*} key
 * @param {*} storageType
 * @returns
 */
const getStorage = (key, storageType) => {
	if (storageType === void 0) {
		storageType = 'local';
	}
	if (!key) return console.log('参数不能为空'), !1;
	let result = null, data = null;
	result = Taro.getStorageSync(key)
	try {
		result = JSON.parse(result || '');
	} catch (error) {
		return result;
	}
	const { period, datetime } = result || {}
	if (period && datetime) {
		let overdue = (new Date().getTime() - (datetime + period)) >= 0;
		if (overdue) {
			return null
		}
	}
	switch (result === null || result === void 0 ? void 0 : result.dataType) {
		case 'number':
			data = Number(result.data);
			break;
		case 'boolean':
			data = Boolean(result.data);
			break;
		case 'object':
			data = result.data;
			break;
		default:
			data = result.data;
	}
	return data;
};

/**
 * 根据key删除缓存
 * @param {*} key
 * @param {*} storageType
 */
const removeStorage = (key, storageType) => {
	if (storageType === void 0) {
		storageType = 'local';
	}
	key = ConstPrefix + key;
	Taro.removeStorageSync(key)
};


/**
 * 清除缓存
 * @param {*} storageType
 */
const clearStorage = function clearStorage(storageType) {
	if (storageType === void 0) {
		storageType = 'local';
	}
	Taro.clearStorageSync()
};


export { setStorage, getStorage, removeStorage, clearStorage }
