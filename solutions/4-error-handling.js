import fs from 'fs';

// BEGIN
export const move = (src, dest, cb) => {
  fs.readFile(src, 'utf-8', (error1, data) => {
    if (error1) {
      cb(error1);
      return;
    }

    fs.writeFile(dest, data, 'utf-8', (error2) => {
      if (error2) {
        cb(error2);
        return;
      }

      fs.unlink(src, (error3) => {
        if (error3) {
          cb(error3);
          return;
        }
        cb(null);
      });
    });
  });
};

// END
