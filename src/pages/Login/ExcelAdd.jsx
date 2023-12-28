import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import style from "../../styles/ExcelAdd.module.css";

function ExcelAdd() {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const excelFile = acceptedFiles[0];
      parseExcel(excelFile);
    }
  }, []);
  const [excel, setExcel] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xls, .xlsx",
  });
  //    Sadece excel dosyasını kabul edicek şekilde ayarlandı
  const handleFileUpload = (excelFile) => {
    const parseExcel = (e) => {
      const reader = new FileReader();
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach((sheetName) => {
          const excelData = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
          );
        });
      };
    };
  };
  return (
    <div className={style.drop}>
      <div {...getRootProps()} className={style.dropzone}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Bu kısıma bırakabilirsiniz.</p>
        ) : (
          <p>Excel dosyasını buraya sürükleyin ya da tıklayın.</p>
        )}
      </div>
    </div>
  );
}

export default ExcelAdd;
