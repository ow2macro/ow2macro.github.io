playbook.add(new Play(
  'Force Objective',
  'Play',
  `Attack by appling objective pressure to force a brawl.`,
  [
    `"Turtle" on an objective to force the enemy to contest it.`,
    `Use cover, damage mitigation, and healing to sustain on the objective while capturing.`,
    `Use powerfull close range damage to force enemies off the objective.`,
    `If team lacks significant advantage, prefer capturing objective over chasing kills if enemy does not contest.`,
  ],
));

playbook.add(new Play(
  'Killbox Objectives or Chokes',
  'Play',
  `Defend by attacking anyone who enters & contests an objective or crosses a choke.`,
  [
    `Position behind cover near the objective or choke to cut off angles.`,
    `When defending chokes, position near the hardest to reach choke (usually high ground), and reposition if the enemy does not attack it.`,
  ],
));

playbook.add(new Play(
  'Soft Flank',
  'Play',
  `Low commitment flanks for advantages.`,
  [
    `Advantages can be forcing cooldowns like lamp, nade, bubble, and flashbang.`,
    `When pushed, return to safety.`,
  ],
));

playbook.add(new Play(
  'Crossfire',
  'Play',
  'Defend with angles in multiple lanes to circumvent damage mitigation and cover.',
  [
    `Setup on high ground.`,
    `Maintain Line-of-Sight on chokes and objectives when defending.`,
  ],
));

playbook.add(new Play(
  'Split Push',
  'Play',
  'Attack with angles in multiple lanes to circumvent damage mitigation and cover.',
  [
    `One lane pushes.`,
    `Other lanes support by applying pressure and splitting attention.`,
  ],
));

playbook.add(new Play(
  'Scout & Stage',
  'Play',
  `Look for isolated dive targets.`,
  [
    `Coordinate targets.`,
    `Target: Enemies with low HP pools (squishy).`,
    `Target: Enemies isolated from sustain/antidive heros, like Cassidy.`,
    `Target: Enemies without Line-of-Sight to their ranged allies, like Soldier 76.`,
    `Target: Enemies with Anti-dive abilities already comitted or not present, like Ana without nade/sleep.`,
    `Position for an easy enagement (preferablly avoid using cooldowns to engage).`,
    `Wait to have cooldowns and HP.`,
  ],
));

playbook.add(new Play(
  'Disrupt Rotations',
  'Play',
  `Use enemy rotations as opportunities to dive or flank.`,
  [
    `Damage mitigation will be less effective while enemy is out in the open during rotations.`,
    `Enemy squishies can be left isolated if they are late to rotations.`,
  ],
));

playbook.add(new Play(
  'Soft Dive',
  'Play',
  `Low commitment dives for advantages rather than kills.`,
  [
    `Advantages can be forcing cooldowns like lamp, nade, bubble, and flashbang.`,
    `When pushed, regroup and dive again to capitalize and secure kills.`,
    `Repeat this process to pick apart a sustain oriented composition bit by bit.`,
  ],
));
