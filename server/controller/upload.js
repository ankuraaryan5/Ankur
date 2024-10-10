import { v2 as cloudinary } from 'cloudinary';

export const uploadImageController = async (req, res) => {
    try {
        // Get the image from the request (FormData is automatically handled)
        const file = req.files.image; // Assuming you're using `express-fileupload` or similar middleware

        if (!file) {
            return res.status(400).json({ message: 'No image provided' });
        }

        // Upload the image to Cloudinary
        const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: 'portfolio', // Optionally customize the public ID
        });

        // Return the Cloudinary image URLs
        res.status(200).json({
            message: 'Image uploaded successfully',
            url: uploadResult.secure_url,
        });
    } catch (error) {
        console.error('Cloudinary upload error:', error);
        res.status(500).json({ message: 'Server error during image upload' });
    }
};
