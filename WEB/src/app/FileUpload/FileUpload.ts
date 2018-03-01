/**
 * Created by nicom on 8/20/2017.
 */

interface FileUpload {
    UploadFileAsync(fileToUpload: File , cb: Function): any ;
}

export default FileUpload;
