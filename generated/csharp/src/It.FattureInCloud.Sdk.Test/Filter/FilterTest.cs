using Xunit;
using System;
using It.FattureInCloud.Sdk.FilterHelper;

namespace It.FattureInCloud.Sdk.Test.FilterHelper
{
    /// <summary>
    ///  Class for testing Filter
    /// </summary>
    public class FilterTest : IDisposable
    {
        /// <summary>
        /// Test a Filter instance
        /// </summary>
        [Fact]
        public void FilterInstanceTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression e = new Condition<string>("nation", Operator.EQ, "IT");
            f = new Filter(e);
            Assert.Equal(e, f.Expression);

            Expression e1 = new Condition<string>("company", Operator.EQ, "MadBit Entertainment S.r.l.");
            f.Expression = e1;
            Assert.Equal(e1, f.Expression);
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test the Where method
        /// </summary>
        [Fact]
        public void WhereTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression e = new Condition<string>("nation", Operator.EQ, "IT");
            f.Where("nation", Operator.EQ, "IT");
            Assert.Equal(e, f.Expression);

            Expression e1 = new Condition<string>("company", Operator.EQ, "MadBit Entertainment S.r.l.");
            f.Where("company", Operator.EQ, "MadBit Entertainment S.r.l.");
            Assert.Equal(e1, f.Expression);
        }

        /// <summary>
        /// Test the WhereExpression method
        /// </summary>
        [Fact]
        public void WhereExpressionTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression e = new Condition<string>("nation", Operator.EQ, "IT");
            f.WhereExpression(e);
            Assert.Equal(e, f.Expression);

            Expression e1 = new Condition<string>("company", Operator.EQ, "MadBit Entertainment S.r.l.");
            f.WhereExpression(e1);
            Assert.Equal(e1, f.Expression);
        }

        /// <summary>
        /// Test the And method
        /// </summary>
        [Fact]
        public void AndTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression c1 = new Condition<string>("city", Operator.EQ, "Warsaw");
            Expression c2 = new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media");
            Conjunction conj = new Conjunction(c1, c2);


            Exception ex = Assert.Throws<Exception>(() =>
                f.And("company", Operator.EQ, "Reply")
            );

            Assert.Equal("Cannot create a conjunction for an empty expression.", ex.Message);

            f.Where("city", Operator.EQ, "Warsaw")
                .And("company", Operator.EQ, "Przewodniczka Social Media");

            Assert.Equal(conj, f.Expression);
        }

        /// <summary>
        /// Test the AndExpression method
        /// </summary>
        [Fact]
        public void AndExpressionTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression c1 = new Condition<string>("city", Operator.EQ, "Warsaw");
            Expression c2 = new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media");
            Conjunction conj = new Conjunction(c1, c2);


            Exception thrownLeft = Assert.Throws<Exception>(() =>
                f.AndExpression(c2)
            );

            Assert.Equal("Cannot create a conjunction for an empty expression.", thrownLeft.Message);

            Exception thrownRight = Assert.Throws<Exception>(() =>
                f.WhereExpression(c1)
                    .AndExpression(null)
            );

            Assert.Equal("Cannot create a conjunction for an empty expression.", thrownRight.Message);

            f.WhereExpression(c1).AndExpression(c2);

            Assert.Equal(conj, f.Expression);
        }

        /// <summary>
        /// Test the AndFilter method
        /// </summary>
        [Fact]
        public void AndFilterTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression c1 = new Condition<string>("city", Operator.EQ, "Warsaw");
            Expression c2 = new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media");
            Conjunction conj = new Conjunction(c1, c2);


            Exception thrownLeft = Assert.Throws<Exception>(() =>
                f.AndFilter(new Filter(c2))
            );

            Assert.Equal("Cannot create a conjunction for an empty expression.", thrownLeft.Message);

            Exception thrownRight = Assert.Throws<Exception>(() =>
                f.WhereExpression(c1)
                    .AndFilter(new Filter())
            );

            Assert.Equal("Cannot create a conjunction for an empty expression.", thrownRight.Message);


            Exception thrownNull = Assert.Throws<Exception>(() =>
                f.WhereExpression(c1)
                    .AndFilter(null)
            );

            f.WhereExpression(c1).AndFilter(new Filter(c2));

            Assert.Equal(conj, f.Expression);
        }

        /// <summary>
        /// Test the Or method
        /// </summary>
        [Fact]
        public void OrTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression c1 = new Condition<string>("city", Operator.EQ, "Warsaw");
            Expression c2 = new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media");
            Disjunction disj = new Disjunction(c1, c2);


            Exception ex = Assert.Throws<Exception>(() =>
                f.Or("company", Operator.EQ, "Reply")
            );

            Assert.Equal("Cannot create a disjunction for an empty expression.", ex.Message);

            f.Where("city", Operator.EQ, "Warsaw")
                .Or("company", Operator.EQ, "Przewodniczka Social Media");

            Assert.Equal(disj, f.Expression);
        }

        /// <summary>
        /// Test the OrExpression method
        /// </summary>
        [Fact]
        public void OrExpressionTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression c1 = new Condition<string>("city", Operator.EQ, "Warsaw");
            Expression c2 = new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media");
            Disjunction disj = new Disjunction(c1, c2);


            Exception thrownLeft = Assert.Throws<Exception>(() =>
                f.OrExpression(c2)
            );

            Assert.Equal("Cannot create a disjunction for an empty expression.", thrownLeft.Message);

            Exception thrownRight = Assert.Throws<Exception>(() =>
                f.WhereExpression(c1)
                    .OrExpression(null)
            );

            Assert.Equal("Cannot create a disjunction for an empty expression.", thrownRight.Message);

            f.WhereExpression(c1).OrExpression(c2);

            Assert.Equal(disj, f.Expression);
        }

        /// <summary>
        /// Test the OrFilter method
        /// </summary>
        [Fact]
        public void OrFilterTest()
        {
            Filter f = new Filter();
            Assert.Null(f.Expression);

            Expression c1 = new Condition<string>("city", Operator.EQ, "Warsaw");
            Expression c2 = new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media");
            Disjunction disj = new Disjunction(c1, c2);


            Exception thrownLeft = Assert.Throws<Exception>(() =>
                f.OrFilter(new Filter(c2))
            );

            Assert.Equal("Cannot create a disjunction for an empty expression.", thrownLeft.Message);

            Exception thrownRight = Assert.Throws<Exception>(() =>
                f.WhereExpression(c1)
                    .OrFilter(new Filter())
            );

            Assert.Equal("Cannot create a disjunction for an empty expression.", thrownRight.Message);


            Exception thrownNull = Assert.Throws<Exception>(() =>
                f.WhereExpression(c1)
                    .OrFilter(null)
            );

            f.WhereExpression(c1).OrFilter(new Filter(c2));

            Assert.Equal(disj, f.Expression);
        }

        /// <summary>
        /// Test the BuildQuery method
        /// </summary>
        [Fact]
        public void BuildQueryTest()
        {
            Filter f = new Filter();
            Assert.Empty(f.BuildQuery());

            f = new Filter(new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media"));
            Assert.Equal("company = 'Przewodniczka Social Media'", f.BuildQuery());
        }

        /// <summary>
        /// Test the BuildUrlEncodedQuery method
        /// </summary>
        [Fact]
        public void BuildUrlEncodedQueryTest()
        {
            Filter f = new Filter();
            Assert.Empty(f.BuildUrlEncodedQuery());

            f = new Filter(new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media"));
            Assert.Equal("company+%3d+%27Przewodniczka+Social+Media%27", f.BuildUrlEncodedQuery());
        }

        /// <summary>
        /// Test the ToString method
        /// </summary>
        [Fact]
        public void ToStringTest()
        {
            Filter f = new Filter();
            Assert.Empty(f.ToString());

            f = new Filter(new Condition<string>("company", Operator.EQ, "Przewodniczka Social Media"));
            Assert.Equal("company = 'Przewodniczka Social Media'", f.ToString());
        }
    }
}