import React, { useState } from 'react';
import { Box } from '@mui/material'
import { AttachFile, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { DropzoneAreaBase } from 'material-ui-dropzone';

const handlePreviewIcon = (fileObject, classes) => {
    const { type } = fileObject.file
    const iconProps = {
        className: classes.image,
    }

    if (type.startsWith("video/")) return <Theaters {...iconProps} />
    if (type.startsWith("audio/")) return <AudiotrackIcon {...iconProps} />

    switch (type) {
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            return <Description {...iconProps} />
        case "application/pdf":
            return <PictureAsPdf {...iconProps} />
        default:
            return <AttachFile {...iconProps} />
    }
}

function DropZones() {
    const [fileObjects, setFileObjects] = useState([]);
    return (
        <Box className="m-3">
            <DropzoneAreaBase
                fileObjects={fileObjects}
                onAdd={newFileObjs => {
                    console.log('onAdd', newFileObjs);
                    setFileObjects([].concat(fileObjects, newFileObjs));
                }}
                onDelete={deleteFileObj => {
                    console.log('onDelete', deleteFileObj);
                }}
                getPreviewIcon={handlePreviewIcon}
            />
        </Box>
    )
}

export default DropZones