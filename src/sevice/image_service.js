class ImageService {
  upload(file) {
    const formData = new FormData();
    formData.append("upload_preset", "fskt5scu");
    formData.append("file", file);
    return fetch("https://api.cloudinary.com/v1_1/dakmawj9d/image/upload", {
      method: "POST",
      body: formData,
    });
  }
}

export default ImageService;
