import React from 'react';
import { Box } from '@mui/material';
import FileViewer from 'react-file-viewer';
import { Presentation, Slide, Text, Shape, Image,} from "react-pptx";

const onError = (e) => {
    console.log(e, "error in file-viewer");
};

function PdfViewer() {
   
    return (
        <Box className="m-3">
            <h1>React File Viewer Demo</h1>
            <h2>Displaying file extensions:</h2>
            <details>
                <summary>.docx</summary>
                <FileViewer
                    fileType="docx"
                    filePath="./AgileDefinitions.docx"
                    onError={onError}
                />
            </details>
            <details>
                <summary>.mp4</summary>
                <FileViewer
                    fileType="mp4"
                    filePath="./mov_bbb.mp4"
                    onError={onError}
                />{" "}
            </details>
            <details>
                <summary>.mp3</summary>
                <FileViewer
                    fileType="mp3"
                    filePath="./MP3_700KB.mp3"
                    onError={onError}
                />{" "}
            </details>
            <details open>
                <summary>.pdf</summary>
                <FileViewer
                    fileType="pdf"
                    filePath="./REACTJS.pdf"
                    onError={onError}
                />
            </details>
            <Presentation>
                <Slide>
                    <Text
                        style={{
                            x: 3,
                            y: 1,
                            w: 3,
                            h: 0.5,
                            fontSize: 32
                        }}
                    >
                        Hello there!
                    </Text>
                    <Shape
                        type="rect"
                        style={{
                            x: 3,
                            y: 1.55,
                            w: 3,
                            h: 0.1,
                            backgroundColor: "#FF0000"
                        }}
                    />
                </Slide>
                <Slide>
                    <Image
                        src={{
                            kind: "path",
                            path: "http://www.fillmurray.com/460/300"
                        }}
                        style={{
                            x: "10%",
                            y: "10%",
                            w: "80%",
                            h: "80%"
                        }}
                    />
                </Slide>
            </Presentation>
        </Box>
    )
}

export default PdfViewer