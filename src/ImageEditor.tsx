import React, { useEffect, useRef } from 'react';
import WebViewer, { WebViewerInstance } from '@pdftron/webviewer'

export default function ImageEditor() {

    const viewerRef = useRef<HTMLDivElement>(null)
    const mountedRef = useRef<boolean>(false)
    const instanceRef = useRef<WebViewerInstance | null>(null)

    const getInstance = () => {
        return instanceRef.current
    }

    useEffect(() => {
        if (viewerRef.current) {
            if (mountedRef.current === true) return;
            mountedRef.current = true
            WebViewer(
                {
                    path: '/webviewer/lib',
                    enableFilePicker: true
                },
                viewerRef.current
            ).then(instance => {
                instanceRef.current = instance
                // const { UI, Core } = instance;
                // const { documentViewer, annotationManager, Tools, Annotations } = Core;
                // // call methods from UI, Core, documentViewer and annotationManager as needed

                // annotationManager.setCurrentUser("Michael")

                // documentViewer.addEventListener('documentLoaded', () => {
                //     const rectangleAnnot = new Annotations.RectangleAnnotation({
                //         PageNumber: 1,
                //         // values are in page coordinates with (0, 0) in the top left
                //         X: 100,
                //         Y: 150,
                //         Width: 200,
                //         Height: 50,
                //         Author: annotationManager.getCurrentUser()
                //     });

                //     annotationManager.addAnnotation(rectangleAnnot);
                //     // need to draw the annotation otherwise it won't show up until the page is refreshed
                //     annotationManager.redrawAnnotation(rectangleAnnot);
                //});

                // instance.UI.loadDocument('https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf');
            })
        }

    }, [])


    return (
        <>
            <div className="header">React sample</div>
            <div className='webviewer' ref={viewerRef} style={{ height: "90vh" }}>
            </div>
        </>
    );
}

