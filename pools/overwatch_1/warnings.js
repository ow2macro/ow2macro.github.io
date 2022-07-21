function load(hero) {
    return [
        new Warning({
            name: 'No Defensive Ultimate',
            test(team) {
                return !team.archetypes.has(attribute.archetype.defensiveUlt);
            },
            getDetails(team) {
                return [
                    {paragraph: `No Defensive Ult to negate aggressive plays or ult combos.`},
                ];
            },
        }),

        new Warning({
            name: 'No Anti-Dive',
            test(team) {
                return !team.archetypes.has(attribute.archetype.antidive);
            },
            getDetails(team) {
                return [
                    {paragraph: `Team compositions without antidive abilities are especially vulnerable to Dive heros.`},
                ];
            },
        }),

        new Warning({
            name: 'Dive Targets',
            test(team) {
                if (!team.archetypes.has(attribute.archetype.antidive)) return false;
                return team.count[attribute.archetype.dive_target]??0 > team.count[attribute.archetype.antidive]??0;
            },
            getDetails(team) {
                const targets = team.getMembers().filter(hero=>hero.archetypes.includes(attribute.archetype.dive_target));
                const anti = team.getMembers().filter(hero=>hero.archetypes.includes(attribute.archetype.antidive));

                return [
                    {paragraph: `This team has significantly more dive targets than antidive heros, which may leave it more vulnerable to a Dive.`},
                    {
                        string: `Dive Targets include:`,
                        list: targets.map(hero=>hero.full),
                    },
                    {
                        string: `Anti-Dive Heros include:`,
                        list: anti.map(hero=>hero.full),
                    },
                ];
            },
        }),

        new Warning({
            name: 'No Healing Focused Support',
            test(team) {
                return (team.count[attribute.class.support.healing] < 1) && (team.count[attribute.role.support] <= 2);
            },
            getDetails(team) {
                return [
                    {paragraph: `Can indicate a lack of overall healing per second and sustain.`},
                ];
            },
        }),

        new Warning({
            name: 'No Utility Focused Support',
            test(team) {
                return team.count[attribute.class.support.utility] < 1;
            },
            getDetails(team) {
                return [
                    {paragraph: `Can indicate a lack of utility such as speed boost or debuffs.`},
                ];
            },
        }),

        new Warning({
            name: 'No Main Tank',
            test(team) {
                return (team.count[attribute.class.tank.main] < 1) && (team.count[attribute.role.tank] <= 2);
            },
            getDetails(team) {
                return [
                    {paragraph: `Can indicate low sustain.`},
                ];
            },
        }),

        new Warning({
            name: 'No Off Tank',
            test(team) {
                return (team.count[attribute.class.tank.off] < 1) && (team.count[attribute.role.tank] <= 2);
            },
            getDetails(team) {
                return [
                    {paragraph: `Can indicate low control of off angles and flanks.`},
                ];
            },
        }),

        new Warning({
            name: 'No Damage Mitigation',
            test(team) {
                return !team.archetypes.has(attribute.archetype.tank.mitigation);
            },
            getDetails(team) {
                return [
                    {paragraph: `No heros that can deny incoming damage.`},
                ];
            },
        }),

        new Warning({
            name: 'No Ranged Hitscan DPS',
            test(team) {
                return !team.archetypes.has(attribute.archetype.damage.ranged);
            },
            getDetails(team) {
                return [
                    {paragraph: `Can indicate a vulnerability to flying heros.`},
                ];
            },
        }),

        new Warning({
            name: 'Low Shieldbreak',
            test(team) {
                return !team.archetypes.has(attribute.archetype.highdps);
            },
            getDetails(team) {
                return [
                    {paragraph: `Lacking in heros with high raw damage.`},
                ];
            },
        }),
    ];
}

pools['overwatch_1'].warnings = load;
