import { useRef, useState } from "react";
import http from "../../service/http";

const AddDocument = () => {
  const fileRef = useRef(null);
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [isFileUploading, setIsFileUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (file) => {
    setFile(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      setErrorMessage("");
      setSuccessMessage("");
      setIsFileUploading(true);

      const response = await http.post("/documents", formData);
      setSuccessMessage(response?.data?.message);

      fileRef.current.value = null;
      setTitle("");
      setErrorMessage("");
      setIsFileUploading(false);
    } catch (error) {
      fileRef.current.value = null;
      setErrorMessage(error?.response?.data?.message);
      setIsFileUploading(false);
    }
  };
  return (
    <div className="mt-4" style={{ width: "70%" }}>
      <h3>Documents</h3>

      <div className="mt-5">
        <div className="form-group mb-3">
          <label className="form-label">Document Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Document Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">
            Please select a file to create your knowledge base.
          </label>
          <input
            name="file"
            className="form-control"
            type="file"
            accept=".csv, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf"
            ref={fileRef}
            onChange={(e) => handleChange(e.target.files[0])}
          />
        </div>

        <div className="form-group mb-3">
          <button className="btn btn-primary" onClick={handleSubmit}>
            Upload
          </button>
        </div>

        {isFileUploading && (
          <div className="alert alert-info">
            Please wait and don't close the window. We are creating your
            knowledgebase.
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
      </div>
    </div>
  );
};
export default AddDocument;
