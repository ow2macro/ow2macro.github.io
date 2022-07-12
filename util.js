const util = {
  epsilon: Number.EPSILON * 2,
  significance: -6,

  is: {
    equal(a,b, epsilon = util.epsilon) {
      return Math.abs(a-b) <= epsilon;
    },

    greaterThan(a, b, epsilon = util.epsilon) {
      return a >= b+epsilon;
    },

    lessThan(a, b, epsilon = util.epsilon) {
      return a+epsilon <= b;
    },

    significantly: {
      greaterThan(a, b, significance = util.significance) {
        return util.is.greaterThan(a, b, util.significance(significance));
      },

      lessThan(a, b, significance = util.significance) {
        return util.is.lessThan(a, b, util.significance(significance));
      },
    },

    approximately: {
      equal(a, b, significance) {
        return util.is.equal(a, b, util.significance(significance));
      },

      greaterThan(a, b, significance) {
        return !util.is.significantly.lessThan(a, b, significance);
      },

      lessThan(a, b, significance) {
        return !util.is.significantly.greaterThan(a, b, significance);
      },
    },
  },

  significance(significancePower) {
    return 10**significancePower;
  },

  sumArray(arr) {
    const add = (a, b) => a+b;
    return arr.reduce(add, 0);
  },

  linear(a,b,t) {
    return (a*(1-t)) + (b*t);
  }
}
