type Props = {};
import { GrCloudUpload } from 'react-icons/gr';
const UploadArea = (props: Props) => {
  return (
    <div>
      <label
        htmlFor="file-upload"
        className="flex h-full w-28 cursor-pointer flex-col items-center justify-center rounded-lg border-4 border-dashed border-coffee-60 bg-coffee-10 px-2 text-sm text-coffee-110"
      >
        <GrCloudUpload className="text-2xl" />
        Drag Images or Click to Upload
      </label>
      <input type="file" name="" id="file-upload" />
    </div>
  );
};

export default UploadArea;
