const version = {
  major: 0,
  minor: 15,
  patch: 0,
  tag: 'a',
}

function makeVersion(version, short = false, delim = '.') {
  const segments = short
    ? [version.major, version.minor]
    : [version.major, version.minor, version.patch, version.tag]
    ;
  return segments.join(delim);
}

function getVersion() {
  return makeVersion(version);
}

function getShortVersion() {
  return `v${version.major}.${version.minor}`;
}
