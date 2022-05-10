const filePickerElement = document.getElementById('image');
const imgPreviewElement = document.getElementById('img-preview');

function showPrev() {
    const files = filePickerElement.files;

    if (!files || files.length === 0) {
        imgPreviewElement.style.display = 'none';
        return;
    }

    const pickedFile = files[0];

    imgPreviewElement.src = URL.createObjectURL(pickedFile);
    imgPreviewElement.style.display = 'block';
}

filePickerElement.addEventListener('change', showPrev);