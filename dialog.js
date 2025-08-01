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
                            <iframe src="${CKEDITOR.plugins.getPath('imagetool')}imagetool.html"
                                    width="100%" height="500px" frameborder="0" style="border:1px solid #ccc;">
                            </iframe>
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
