using Xunit;
using System;
using It.FattureInCloud.Sdk.FilterHelper;

namespace It.FattureInCloud.Sdk.Test.FilterHelper
{
    public class ConjunctionTest : IDisposable
    {
        /// <summary>
        /// Test a Conjunction instance
        /// </summary>
        [Fact]
        public void ConjunctionInstanceTest()
        {
            Expression left = new Condition<string>("city", Operator.EQ, "Bergamo");
            Expression right = new Condition<int>("age", Operator.LT, 35);
            Conjunction c = new Conjunction(left, right);
            Assert.Equal(left, c.Left);
            Assert.Equal(right, c.Right);
            Assert.Equal("(city = 'Bergamo' and age < 35)", c.BuildQuery());
            Assert.Equal("(city = 'Bergamo' and age < 35)", c.ToString());

            Expression left1 = new Condition<string>("team", Operator.EQ, "Volley Bergamo 1991");
            c.Left = left1;
            Assert.Equal(left1, c.Left);
            Assert.Equal("(team = 'Volley Bergamo 1991' and age < 35)", c.BuildQuery());
            Assert.Equal("(team = 'Volley Bergamo 1991' and age < 35)", c.ToString());

            Expression right1 = new Condition<string>("best_player", Operator.IS_NOT, null);
            c.Right = right1;
            Assert.Equal(right1, c.Right);
            Assert.Equal("(team = 'Volley Bergamo 1991' and best_player is not null)", c.BuildQuery());
            Assert.Equal("(team = 'Volley Bergamo 1991' and best_player is not null)", c.ToString());
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }
    }
}