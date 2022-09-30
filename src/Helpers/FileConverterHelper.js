const fileToBase64 = (file) => {
    return Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};
const FileConverterHelper = {
    fileToBase64,
};

export default FileConverterHelper;
