function displayImages(folderName, pathName, numImages,extension=".png") {
    console.log("display running...");
    const folderPath = `${folderName}/`;
    const imageContainer = document.getElementById('imageContainer');
    //imageContainer.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= numImages; i++) {
        const paddedIndex = (i) < 10 ? '0' + (i) : (i);
        const img = document.createElement('img');
        img.onload = function () {
            // Image loaded successfully
            console.log(`Image ${paddedIndex} loaded successfully`);
        };

        img.onerror = function () {
            // Image failed to load
            console.log(`Image ${paddedIndex} failed to load`);
            img.style.display = "none"; // Hide the image
        };
        img.src = `${folderPath}${pathName}${paddedIndex}${extension}`
        img.alt = `Image ${i}`;
        img.style.width="800px";

        imageContainer.appendChild(img);

        // Add line breaks except after the last image
        if (i < numImages) {
            
        const lineBreak1 = document.createElement('br');
        const lineBreak2 = document.createElement('br');

            imageContainer.appendChild(lineBreak1);
            imageContainer.appendChild(lineBreak2);
        }
    }
}