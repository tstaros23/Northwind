using System;
using Northwind.Web.Models;

namespace Northwind.Web.Services
{
	public interface IWeatherForecastService 
	{
		WeatherForecast ForecastFor(DateTime dateTime);

		string SummaryFor(int temperature);
	}


	public class WeatherForecastService : IWeatherForecastService
	{
		private static readonly string[] Summaries = new[]
		{
				"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		public WeatherForecast ForecastFor(DateTime dateTime)
		{
			var rng = new Random();
			var temperatureC = rng.Next(-20, 55);
			if (dateTime < DateTime.Today)
				throw new ArgumentException();
			return new WeatherForecast
			{
					Date = dateTime,
					TemperatureC = temperatureC,
					Summary = SummaryFor(temperatureC)
			};
		}

		public string SummaryFor(int temperature)
		{
			var rng = new Random();
			return Summaries[rng.Next(Summaries.Length)];
		}
	}

}