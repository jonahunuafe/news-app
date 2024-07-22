import { storage } from "@config/cloudinary"


import multer from 'multer';

const upload = multer({ storage });

export default function handler(req, res) {
    if (req.method === 'POST') {
        upload.single('image')(req, res, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(200).json({ file: req.file });
        });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};