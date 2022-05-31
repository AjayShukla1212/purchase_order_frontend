import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
// import { PickerOverlay } from 'filestack-react';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://cold-ghosts-shop-183-82-114-140.loca.lt/api/v1/purchaseorders',

    onChange(info) {
        const { status } = info.file;

        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }

        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },

    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const Upload_page = () => (
    <Dragger {...props}>
        <p className="ant-upload-drag-icon">
            <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from uploading company data or other
            band files
        </p>
    </Dragger>
);

export default Upload_page;