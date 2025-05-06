import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirpath, cb) => {
  fs.readdir(dirpath, (error1, filenames) => {
    if (error1) {
      cb(error1);
      return;
    }

    async.map(filenames, (filename, callback) => {
      const filepath = path.join(dirpath, filename);
      fs.stat(filepath, (error2, stats) => {
        if (error2) {
          callback(error2);
          return;
        }
        const size = stats.isFile() ? stats.size : 0;
        callback(null, size);
      });
    }, (error3, sizes) => {
      if (error3) {
        cb(error3);
        return;
      }
      const total = _.sumBy(sizes);
      cb(null, total);
    });
  });
};

// END
