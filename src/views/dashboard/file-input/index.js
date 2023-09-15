import React, { useState } from 'react';
import { Typography, Button, CircularProgress, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// ==============================|| SAMPLE PAGE ||============================== //

const FileInputPage = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        setSelectedFile(file);
        // Handle the dropped file here
        console.log('Dropped file:', file);
    };

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        // Handle the selected file here
        console.log('Selected file:', file);
    };

    const handleUpload = () => {
        if (selectedFile) {
            setUploading(true);
            // Simulate an upload delay (you should replace this with your actual upload logic)
            setTimeout(() => {
                setUploading(false);
                setUploadComplete(true);
            }, 2000);
        }
    };

    return (
        <MainCard title="Model Prediction">
            <div
                style={{
                    border: isDragging ? '2px dashed #007bff' : '2px dashed #ccc',
                    padding: '40px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    minHeight: '200px'
                }}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
            >
                <Typography variant="h4">
                    <strong>File Input</strong>
                </Typography>
                <Typography variant="body2">Drag and drop files here or click to upload</Typography>

                {/* Choose Files button */}
                <Box marginTop="16px">
                    <Button variant="contained" component="label">
                        Choose Files
                        <input
                            type="file"
                            accept=".csv" // Specify the .csv file extension
                            style={{ display: 'none' }}
                            onChange={handleFileInputChange}
                        />
                    </Button>
                </Box>

                {selectedFile && !uploading && !uploadComplete && (
                    <Box marginTop="16px">
                        <Typography variant="subtitle1">Selected File: {selectedFile.name}</Typography>
                        <Button variant="contained" color="primary" onClick={handleUpload}>
                            Upload
                        </Button>
                    </Box>
                )}

                {uploading && (
                    <Box marginTop="16px">
                        <CircularProgress size={24} color="primary" />
                        <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
                            Uploading...
                        </Typography>
                    </Box>
                )}

                {uploadComplete && (
                    <Box marginTop="16px">
                        <CheckCircleOutlineIcon sx={{ color: 'green', marginRight: 1 }} />
                        <Typography variant="subtitle1">Upload Complete</Typography>
                    </Box>
                )}
            </div>
        </MainCard>
    );
};

export default FileInputPage;
