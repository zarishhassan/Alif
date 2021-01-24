import React from 'react'
 
import PDF from 'pdf-viewer-reactjs'
 
const PDFViewer = ({props}) => {
    
    // const temp = props.path;
    return (
        <div className='cards'>
            <div className='cards__container'>
                <PDF
                    document={{
                        url: 'books/thehost_chapter4.pdf',
                    }}
                />
            </div>
        </div>
    )
}
 
export default PDFViewer