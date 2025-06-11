from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
from model_utils import load_and_forecast

app = FastAPI()

# Enable CORS (especially useful for frontend integration)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/forecast")
async def forecast_payroll(file: UploadFile = File(...), months: int = Form(6)):
    try:
        # Read uploaded file contents
        contents = await file.read()

        # Decode and convert to pandas DataFrame
        df = pd.read_csv(io.StringIO(contents.decode("utf-8")))

        # Run forecasting
        forecast = load_and_forecast(df, months=months)

        # Convert the last `months` rows to dict for JSON output
        result = forecast.tail(months).to_dict(orient="records")

        return {"forecast": result}

    except Exception as e:
        # Return the error message in case of failure
        return {"error": str(e)}
