class ImageService {
  async upload(file) {
    const formData = new FormData();
    formData.append("upload_preset", "fskt5scu");
    formData.append("file", file);
    return await fetch(
      "https://api.cloudinary.com/v1_1/dakmawj9d/image/upload",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.url;
      });
  }
}

export default ImageService;
