import matplotlib.pyplot as plt
from prophet import Prophet
import pandas as pd

# If you already have the forecast as a DataFrame:
# forecast = model.predict(future)

def plot_forecast(forecast_df: pd.DataFrame):
    plt.figure(figsize=(12, 6))

    # Plot predicted values
    plt.plot(forecast_df["ds"], forecast_df["yhat"], label="Predicted", color='blue')

    # Plot confidence intervals
    plt.fill_between(forecast_df["ds"],
                     forecast_df["yhat_lower"],
                     forecast_df["yhat_upper"],
                     color='skyblue',
                     alpha=0.4,
                     label="Confidence Interval")

    plt.xlabel("Date")
    plt.ylabel("Forecasted Value")
    plt.title("Payroll Forecast")
    plt.legend()
    plt.grid(True)
    plt.tight_layout()
    plt.show()

# Example usage if you're calling from model_utils.py
# forecast = load_and_forecast(df, months=6)
# plot_forecast(forecast)
