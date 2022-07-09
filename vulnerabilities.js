const vulnerabilities = {
  'low_mobility': new Vulnerability('Low Mobility', 'Low ability to reposition during fights and react to flankers.'),
  'low_frontline': new Vulnerability('Weak Frontline', 'Loses fights when stacking main against stronger teams.'),
  'no_defensive_ult': new Vulnerability('No Defensive Ult', 'No Defensive Ult to negate aggressive plays or ult combos.'),

  'no_aoe_support_brawl': new Vulnerability('No AOE Healing', 'Without Area of Effect Healing, A Brawl team will have less sustain.'),
  'no_anti_dive_poke': new Vulnerability('No Antidive', 'Poke team compositions without antidive abilities are especially vulneralbe to Dive heros.'),
  'no_ranged_support_dive': new Vulnerability('No Ranged Healing', 'No Ranged Support to heal Divers.'),

  'no_main_support': new Vulnerability('No Main Support', 'This team lacks utility such as speed boost or debuffs'),
  'no_main_healer': new Vulnerability('No Main Healer', 'This team lacks in overall healing per second and sustain.'),
  'low_support': new Vulnerability('Low Support', 'Not enough Support heros.'),

  'no_flex_dps': new Vulnerability('No Flex DPS', 'Can indicate low overall damage and shieldbreak.'),
  'no_hitscan_dps': new Vulnerability('No Hitscan DPS', 'Can indicate a vulnerability to flying heros, and an inability to poke out staging divers.'),

  'no_tank': new Vulnerability('No Tank', 'No Tank, low sustain.'),
  'no_main_tank': new Vulnerability('No Main Tank', 'No Main tank, low sustain.'),
  'no_off_tank': new Vulnerability('No Off Tank', 'No Off tank can indicate low control of off angles and flanks.'),
  'low_mitigation': new Vulnerability('Low Damage Mitigation', 'This team lacks abilities to negate/deny damage, abilities, and enemy healing.'),
  'diveable': new Vulnerability('Diveable', 'This team has more dive targets than antidive heros, which may leave it vulneralbe to Dive.'),
}
