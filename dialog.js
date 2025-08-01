CKEDITOR.dialog.add('imageToolDialog', function (editor) {
    return {
        title: 'Image Crop & Reduce Tool',
        minWidth: 900,
        minHeight: 600,
        contents: [
            {
                id: 'iframeTab',
                label: 'Image Tool',
                elements: [
                    {
                        type: 'html',
                        html: `
                            <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
                                <iframe 
                                    src="${CKEDITOR.plugins.getPath('imagetool')}imagetool.html"
                                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 1px solid #ccc;" 
                                    frameborder="0"
                                    allowfullscreen>
                                </iframe>
                            </div>
                        `
                    }
                ]
            }
        ],
        onOk: function () {
            // You can also pass data back from iframe if needed using postMessage
        }
    };
});
