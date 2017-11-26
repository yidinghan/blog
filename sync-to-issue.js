const fs = require('fs');
const https = require('https');
const assert = require('assert');

const config = {
    urls: {
        updateIssue: '/repos/yidinghan/blog/issues/',
    },
    articleLinkPrefix: 'https://github.com/yidinghan/blog/blob/master/',
    filename: '',
    filepath: '',
    issueID: 0,
    issueTitle: '',
    issueBody: '',
    httpsOptions: {
        protocol: 'https:',
        host: 'api.github.com',
        port: '443',
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Ding test',
        },
    },
    user: {
        un: '',
        pw: '',
    },
};

const parseArgv = () => {
    const filename = process.argv[2];
    assert(filename, 'filename is empty');

    const filepath = `${__dirname}/${filename}`;
    const isFileExists = fs.existsSync(filepath);
    assert(isFileExists, `${filename} not exists`);

    const issueID = parseInt(process.argv[3]);
    assert(issueID, 'issueID is empty');

    const un = process.env['un'];
    assert(un, 'u` is empty');

    const pw = process.env['pw'];
    assert(pw, 'pw is empty');

    config.filename = filename;
    config.filepath = filepath;
    config.issueID = issueID;
    config.issueTitle = filename.split('.')[0].replace(/-/g, ' ');
    config.user = { un, pw };
};

const parseIssueBody = () => {
    const fileContent = fs.readFileSync(config.filepath).toString();
    const articleLink = config.articleLinkPrefix + config.filename;
    const refContent = `Article Reference [Link](${articleLink})`;

    config.issueBody = [refContent, fileContent].join('\n\n');
};

const parseHttpOptions = () => {
    config.httpsOptions = Object.assign(
        {
            path: config.urls.updateIssue + String(config.issueID),
            auth: `${config.user.un}:${config.user.pw}`,
        },
        config.httpsOptions
    );
};

const makeRequest = callback => {
    const req = https.request(config.httpsOptions, res => {
        let body = '';
        res.on('data', chuck => {
            body += chuck;
        });
        res.on('end', () => {
            console.log({ body, code: res.statusCode });
            callback(0);
        });
        res.on('err', err => {
            console.log({ err });
            callback(1);
        });
    });

    const body = {
        title: config.issueTitle,
        body: config.issueBody,
    };
    req.write(JSON.stringify(body));

    req.end();
};

(() => {
    parseArgv();
    parseIssueBody();
    parseHttpOptions();
    console.log(config.httpsOptions);
    makeRequest((code = 0) => {
        process.exit(code);
    });
})();
