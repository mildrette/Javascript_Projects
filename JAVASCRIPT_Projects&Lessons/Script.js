document.addEventListener('DOMContentLoaded', function () {
    const imageUpload = document.getElementById('image-upload');
    const profileImage = document.getElementById('profile-image');
    const useDefaultBtn = document.getElementById('use-default');
  
    // Handle file input change
    imageUpload.addEventListener('change', function () {
      const selectedFile = imageUpload.files[0];
      if (selectedFile) {
        // Display the selected image
        const reader = new FileReader();
        reader.onload = function (e) {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
      }
    });
  
    // Handle using default image
    useDefaultBtn.addEventListener('click', function () {
      profileImage.src = "https://img.freepik.com/free-vector/women-talking-concept-illustration_114360-8911.jpg?size=626&ext=jpg";
      profileImage.src = "https://img.freepik.com/free-photo/woman-white-hoodie-with-yellow-background_1340-48101.jpg?size=626&ext=jpg" ;
      profileImage.src = "https://img.freepik.com/free-vector/women-talking-concept-illustration_114360-8911.jpg?size=626&ext=jpg";
      profileImage.src = "https://img.freepik.com/free-vector/women-talking-concept-illustration_114360-8911.jpg?size=626&ext=jpg";

      imageUpload.value ="https://img.freepik.com/free-photo/woman-white-hoodie-with-yellow-background_1340-48101.jpg?size=626&ext=jpg"; // Clear the selected image
    });
  });
  