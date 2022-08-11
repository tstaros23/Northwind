using System;

using Xunit;
using Xunit.Gherkin.Quick;


using Northwind.Web.Services;
using Northwind.Web.Models;
using Xunit.Sdk;

namespace Northwind.Test.Features
{
	[FeatureFile("./Features/WeatherForecast.feature")]
	public sealed class WeatherForecastFeature : Feature
	{
		private IWeatherForecastService _weather = null;
		private WeatherForecast _forecast = null;
		private Exception _serviceException = null;

		[Given(@"the weather forecast")]
		public void The_weather_forecast()
		{
			_weather = new WeatherForecastService();
		}

		[When(@"I get the forecast for tomorrow")]
		public void I_get_the_forecast_for_tomorrow()
		{
			_forecast = _weather.ForecastFor(DateTime.Now.AddDays(1));
		}

		[Then(@"the forecast temperature F should be greater than (\d+)")]
		public void The_forecast_temperature_F_should_be_greater_than(int temperature)
		{
			Assert.True(_forecast.TemperatureF > temperature);
		}

		[When(@"I get the forecast for yesterday")]
		public void I_get_the_forecast_for_yesterday()
		{
			try { 
				_forecast = _weather.ForecastFor(DateTime.Now.AddDays(-1));
				throw new XunitException("Expect service to throw an exception");
			}
			catch(ArgumentException ex){
				this._serviceException = ex;
			}
			// if (_forecast.Date < DateTime.Today)
			// 	throw new ArgumentException();
		}

		[Then(@"the service should throw an invalid argument exception")]
		public void The_service_should_throw_an_argument_exception()
		{
			Assert.IsType<ArgumentException>(_serviceException);
		}
	}
}