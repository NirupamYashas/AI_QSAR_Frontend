import React, { useState, useEffect } from 'react';
import {
    Typography,
    Button,
    CircularProgress,
    Box,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Papa from 'papaparse';
import { useDispatch, useSelector } from 'store';
import { predictHalfLife, resetPredictionData } from 'store/slices/fileinputpredictionSlice';

// ==============================|| SAMPLE PAGE ||============================== //

const FileInputPage = () => {
    const dispatch = useDispatch();

    // Redux selector to access data from the store
    const predictionData = useSelector((state) => state.predictionfile);

    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);
    const [parsedData, setParsedData] = useState(null);
    const [tableData, setTableData] = useState([]);

    // New state to manage loading state
    const [loading, setLoading] = useState(false);

    // Add an effect to monitor changes in predictionData
    useEffect(() => {
        if (predictionData.length > 0) {
            console.log(predictionData);
            setTableData(predictionData);
        }
    }, [predictionData]);

    useEffect(() => {
        if (tableData.length > 0) {
            setLoading(false); // Data received, stop loading
        }
    }, [tableData]);

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
            setLoading(true);
            setUploading(true);

            // Use FileReader to read the content of the uploaded file as text
            const reader = new FileReader();
            reader.onload = (event) => {
                const csvText = event.target.result;

                // Parse the CSV file using PapaParse
                Papa.parse(csvText, {
                    header: true,
                    dynamicTyping: true,
                    complete: (results) => {
                        console.log(results.data); // Print the parsed data as an array of objects
                        setParsedData(results.data); // Store the parsed data in the state
                        // Dispatch the predictHalfLife action with the form data
                        dispatch(predictHalfLife(results.data));
                        setUploading(false);
                    }
                });

                setUploading(false);
                setUploadComplete(true);
            };

            reader.readAsText(selectedFile);
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

                {uploadComplete && !loading && parsedData && (
                    <Box marginTop="16px">
                        <CheckCircleOutlineIcon sx={{ color: 'green', marginRight: 1 }} />
                        <Typography variant="subtitle1">Upload Complete</Typography>
                    </Box>
                )}

                {loading && (
                    <Box marginTop="16px">
                        <CircularProgress size={24} color="primary" />
                        <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
                            Loading...
                        </Typography>
                    </Box>
                )}

                {!loading && tableData.length > 0 && (
                    <Box marginTop="16px">
                        <Typography variant="h6">Predicted Data:</Typography>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>CAS</TableCell>
                                        <TableCell>Species</TableCell>
                                        <TableCell>Half-Life Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableData.map((subArray, index) =>
                                        subArray.map((data, subIndex) => (
                                            <TableRow key={subIndex}>
                                                <TableCell>{data.CAS}</TableCell>
                                                <TableCell>{data.Species}</TableCell>
                                                <TableCell>{data.LambdaZHl}</TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                )}

                {/* {parsedData && (
                    <Box marginTop="16px">
                        <Typography variant="h6">Parsed Data:</Typography>
                        <pre>{JSON.stringify(parsedData, null, 2)}</pre>
                    </Box>
                )} */}
            </div>
        </MainCard>
    );
};

export default FileInputPage;
