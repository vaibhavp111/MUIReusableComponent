import { useState } from "react";
import FileUpload from "react-material-file-upload";
import { Box } from '@mui/material'

function FileUp_simple() {
    const [files, setFiles] = useState ([]);
    return (
        <Box className="m-3">
            <FileUpload value={files} onChange={setFiles} />

        </Box>
    )
}

export default FileUp_simple