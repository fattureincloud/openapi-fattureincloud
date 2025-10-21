using Xunit;
using System;
using It.FattureInCloud.Sdk.FilterHelper;

namespace It.FattureInCloud.Sdk.Test.FilterHelper
{
    /// <summary>
    ///  Class for testing Condition
    /// </summary>
    public class ConditionTest : IDisposable
    {
        /// <summary>
        /// Test a Condition instance
        /// </summary>
        [Fact]
        public void ConditionInstanceTest()
        {
            var cBool = new Condition<bool>("qualified", Operator.EQ, true);
            Assert.Equal("qualified", cBool.Field);
            Assert.Equal(Operator.EQ, cBool.Op);
            Assert.True(cBool.Value);
            Assert.Equal("qualified = true", cBool.BuildQuery());
            Assert.Equal("qualified = true", cBool.ToString());

            cBool.Field = "phd";
            cBool.Op = Operator.NEQ;
            Assert.Equal("phd", cBool.Field);
            Assert.Equal(Operator.NEQ, cBool.Op);

            cBool.Value = false;
            Assert.False(cBool.Value);
            cBool.Value = true;
            Assert.True(cBool.Value);

            var cInt = new Condition<int>("ranking", Operator.GT, 10);
            Assert.Equal(10, cInt.Value);
            Assert.Equal("ranking > 10", cInt.BuildQuery());
            Assert.Equal("ranking > 10", cInt.ToString());

            cInt.Value = 6;
            Assert.Equal(6, cInt.Value);
            cInt.Value = 99;
            Assert.Equal(99, cInt.Value);

            var cFloat = new Condition<float>("price", Operator.LTE, 10.12F);
            Assert.Equal(10.12F, cFloat.Value);
            Assert.Equal("price <= 10.12", cFloat.BuildQuery());
            Assert.Equal("price <= 10.12", cFloat.ToString());

            var cDouble = new Condition<double>("price", Operator.LTE, 6.66);
            Assert.Equal(6.66, cDouble.Value);
            Assert.Equal("price <= 6.66", cDouble.BuildQuery());
            Assert.Equal("price <= 6.66", cDouble.ToString());

            var cString = new Condition<string>("sweet", Operator.ENDS_WITH, "cioccolato");
            Assert.Equal("cioccolato", cString.Value);
            Assert.Equal("sweet ends with 'cioccolato'", cString.BuildQuery());
            Assert.Equal("sweet ends with 'cioccolato'", cString.ToString());

            cString.Value = "fragole";
            Assert.Equal("fragole", cString.Value);
            cString.Value = "panna";
            Assert.Equal("panna", cString.Value);

            var cNull = new Condition<string>("girlfriend", Operator.IS_NOT, null);
            Assert.Null(cNull.Value);
            Assert.Equal("girlfriend is not null", cNull.BuildQuery());
            cNull.Op = Operator.IS;
            Assert.Equal("girlfriend is null", cNull.ToString());

        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

    }

}