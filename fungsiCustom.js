// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

function splitAndGetSecondItem(stringArray) {
  return stringArray.split(' ', 2)[1];
}

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  fs.readFile(
      file1,
      {encoding: 'utf8'},
      (err1, dataYangDibaca1) => {
        if (err1) {
          const errorMsg1 = 'Ada terjadi error 1: ' + err1;
          fnCallback(errorMsg1, null);
          return;
        }

        fs.readFile(
            file2,
            {encoding: 'utf8'},
            (err2, dataYangDibaca2) => {
              if (err2) {
                const errorMsg2 = 'Ada terjadi error 2: ' + err2;
                fnCallback(errorMsg2, null);
                return;
              }

              fs.readFile(
                  file3,
                  {encoding: 'utf8'},
                  (err3, dataYangDibaca3) => {
                    if (err3) {
                      const errorMsg3 = 'Ada terjadi error 3: ' + err3;
                      fnCallback(errorMsg3, null);
                      return;
                    }

                    const arrayOfString = [
                      splitAndGetSecondItem(JSON.parse(dataYangDibaca1).message),
                      splitAndGetSecondItem(JSON.parse(dataYangDibaca2)[0].message),
                      splitAndGetSecondItem(JSON.parse(dataYangDibaca3)[0].data.message),
                    ];
                    if (arrayOfString.length < 1) {
                      throw fnCallback('Data tidak boleh kosong', null);
                    }

                    fnCallback(
                        null,
                        arrayOfString
                    );
                  }
              );
            }
        );
      }
  );
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
