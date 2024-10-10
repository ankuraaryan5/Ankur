export const uploadImageController = async (req, res) => {
    try {
        // Get the image from the request (e.g., base64 string or file URL)
        const file = req.body.image;

        if (!file) {
            return res.status(400).json({ message: 'No image provided' });
        }

        // Step 1: Upload the image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(file, {
            public_id: '', // You can set a dynamic public_id
        });

        // Step 2: Optimize image URL
        const optimizeUrl = cloudinary.url(uploadResult.public_id, {
            fetch_format: 'auto',
            quality: 'auto',
        });

        // Step 3: Crop image URL
        const autoCropUrl = cloudinary.url(uploadResult.public_id, {
            crop: 'auto',
            gravity: 'auto',
            width: 500,
            height: 500,
        });

        // Step 4: Return the URLs
        res.status(200).json({
            message: 'Image uploaded and transformed successfully',
            original_url: uploadResult.secure_url,
            optimized_url: optimizeUrl,
            cropped_url: autoCropUrl,
        });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        res.status(500).json({ message: 'Server error during image upload' });
    }
};