import fs from 'fs';

// BEGIN
export default (filepath, period, cb) => {
  let lastCheckTime = Date.now();

  const timerId = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId);
        cb(err);
        return;
      }

      const currentModTime = stats.mtimeMs;
      if (currentModTime > lastCheckTime) {
        lastCheckTime = currentModTime;
        cb(null);
      }
    });
  }, period);

  return timerId;
};

// END
