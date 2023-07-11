'use strict';
const fs = require('fs-extra');
const { appBuild } = require('../config/paths');

fs.copy(`${appBuild}/index.html`, `${appBuild}/404.html`);