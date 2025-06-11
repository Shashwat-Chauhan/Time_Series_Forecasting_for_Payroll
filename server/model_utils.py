import pandas as pd
from prophet import Prophet

def load_and_forecast(data: pd.DataFrame, months: int = 6) -> pd.DataFrame:
    # Preprocess
    df = data.rename(columns={"date": "ds", "payroll": "y"})
    
    # Clean and convert date
    df["ds"] = pd.to_datetime(df["ds"].str.strip(), format="%Y-%m-%d", errors="coerce")
    df = df.dropna(subset=["ds"])

    # Fit model
    model = Prophet()
    model.fit(df)

    # Predict future
    future = model.make_future_dataframe(periods=months, freq="M")
    forecast = model.predict(future)

    return forecast[["ds", "yhat", "yhat_lower", "yhat_upper"]]
