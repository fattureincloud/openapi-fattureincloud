using Xunit;
using System;
using It.FattureInCloud.Sdk.FilterHelper;

namespace It.FattureInCloud.Sdk.Test.FilterHelper
{
    public class OperatorTest : IDisposable
    {
        /// <summary>
        /// Test a Operator instance
        /// </summary>
        [Fact]
        public void OperatorInstanceTest()
        {
            Operator eq = Operator.EQ;
            Assert.Equal("=", OperatorExtensions.GetOperatorValue(eq));

            Operator neq = Operator.NEQ;
            Assert.Equal("<>", OperatorExtensions.GetOperatorValue(neq));

            Operator gt = Operator.GT;
            Assert.Equal(">", OperatorExtensions.GetOperatorValue(gt));

            Operator gte = Operator.GTE;
            Assert.Equal(">=", OperatorExtensions.GetOperatorValue(gte));

            Operator lt = Operator.LT;
            Assert.Equal("<", OperatorExtensions.GetOperatorValue(lt));

            Operator lte = Operator.LTE;
            Assert.Equal("<=", OperatorExtensions.GetOperatorValue(lte));

            Operator isOp = Operator.IS;
            Assert.Equal("is", OperatorExtensions.GetOperatorValue(isOp));

            Operator isNot = Operator.IS_NOT;
            Assert.Equal("is not", OperatorExtensions.GetOperatorValue(isNot));

            Operator like = Operator.LIKE;
            Assert.Equal("like", OperatorExtensions.GetOperatorValue(like));

            Operator contains = Operator.CONTAINS;
            Assert.Equal("contains", OperatorExtensions.GetOperatorValue(contains));

            Operator notLike = Operator.NOT_LIKE;
            Assert.Equal("not like", OperatorExtensions.GetOperatorValue(notLike));

            Operator notContains = Operator.NOT_CONTAINS;
            Assert.Equal("not contains", OperatorExtensions.GetOperatorValue(notContains));

            Operator startsWith = Operator.STARTS_WITH;
            Assert.Equal("starts with", OperatorExtensions.GetOperatorValue(startsWith));

            Operator endsWith = Operator.ENDS_WITH;
            Assert.Equal("ends with", OperatorExtensions.GetOperatorValue(endsWith));
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }
    }
}