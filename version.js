const version = {
  major: 0,
  minor: 12,
  patch: 0,
  tag: 'c',
}

function makeVersion(version, short = false, delim = '.') {
  const segments = short
    ? [version.major, version.minor]
    : [version.major, version.minor, version.patch, version.tag]
    ;
  return segments.join(delim);
}

function getVersion(short = false) {
  const base = makeVersion(version);
  const poolVersions = [];

  for (const pool of Object.values(pools)) {
    poolVersions.push(`${pool.id}-${makeVersion(pool.version, short)}`);
  }

  return base + '_' + poolVersions.join('_');
}

function getShortVersion() {
  return `v${version.major}.${version.minor}`;
}
