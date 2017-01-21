const colors = require('colors'); // for colorful logging
const exec = require('sync-exec');
const fs = require('fs-extra');
const s3 = require('s3');

/***********************************************/
/* Settings */
/***********************************************/

const ROOT_DIR = `${ __dirname }/../..`
const BUILD_DIR = `${ ROOT_DIR }/build`;
const SECRETS = JSON.parse(fs.readFileSync(`${ ROOT_DIR }/secrets.json`));
const PUBLIC_PATH = '/weatherbee-100/';

/***********************************************/
/* Helpers */
/***********************************************/

const log = (emoji, msg) => {
  console.log(` ${ emoji }  `, msg.grey, "\n");
};

const error = (err) => {
  console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'.red);
  console.error('\n', err.red.bold, '\n');
  console.error('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n'.red);
  process.exit(1);
};

/***********************************************/
/* Deployment */
/***********************************************/

log('🔧', 'Compiling assets');
if (exec(`cd ${ROOT_DIR}; PUBLIC_PATH='${PUBLIC_PATH}' npm run build`).status !== 0) {
  error(`There was a problem compiling the assets! ${ result.stderr }`);
}

log('🚀', 'Uploading build to S3');
const s3Client = s3.createClient({
  maxAsyncS3: 20,
  s3RetryCount: 3,
  s3RetryDelay: 1000,
  s3Options: {
    accessKeyId: SECRETS.aws.accessKeyId,
    secretAccessKey: SECRETS.aws.secretAccessKey,
    region: 'us-east-1',
  }
});

const s3Uploader = s3Client.uploadDir({
  localDir: BUILD_DIR,
  deleteRemoved: true,
  s3Params: {
    Bucket: 'weatherbee-100',
  }
});

s3Uploader.on('error', function(err) {
  error(`Error uploading build to S3: ${ err.stack }`);
});

s3Uploader.on('end', function() {
  log('🤘', 'And we\'re live.')
});
