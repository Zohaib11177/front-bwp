const save = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
};
const get = (name) => {
    let data = localStorage.getItem(name);
    data = JSON.parse(data);
    return data;
};
const remove = (name) => {
    localStorage.removeItem(name);
};
const keyChange = (name, key, newValue) => {
    let data = get(name);
    data[key] = newValue;
    save(name, data);
};
const LocalStorageHelper = {
    save,
    get,
    remove,
    keyChange,
};

export default LocalStorageHelper;
